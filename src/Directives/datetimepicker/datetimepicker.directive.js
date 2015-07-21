/**
 * datetimepicker
 * Created at 2015. 7. 18
 * Updated at 2015. 7. 21
 */

'use strict';

angular.module('chris.util')
    .directive('datetimepicker', function () {
      return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attrs, ngModelCtrl) {

          if (!ngModelCtrl) return;

          var updateModelValue = function () {
                ngModelCtrl.$setViewValue(element[0].value)
              },
              options = {
                lang: 'ko',
                value: ngModelCtrl.$modelValue || '',
                format: 'Y-m-d H:i',
                onSelectDate: updateModelValue,
                onSelectTime: updateModelValue,
                onClose: updateModelValue
              },
              validator = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;

          if (attrs.datetimepicker === 'timepicker') {
            options.datepicker = false;
            options.format = 'H:i';
            validator = /^\d{2}:\d{2}$/;
          } else if (attrs.datetimepicker === 'datepicker') {
            options.timepicker = false;
            options.format = 'Y-m-d';
            validator = /^\d{4}-\d{2}-\d{2}$/;
          }

          $(element).datetimepicker(options);

          ngModelCtrl.$validators.datetimeFormat = function (modelValue, viewValue) {
            return !modelValue || validator.test(modelValue);
          };
        }
      };
    });