/**
 * datetimepicker
 * Created at 2015. 7. 18
 * Updated at 2015. 7. 18
 */

'use strict';

angular.module('chris.util')
    .directive('datetimepicker', function () {
      return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attrs, ngModelCtrl) {

          if (!ngModelCtrl) return;

          function updateModelValue () {
            ngModelCtrl.$setViewValue(element[0].value)
          }

          $(element).datetimepicker({
            lang: 'ko',
            value: ngModelCtrl.$modelValue || '',
            format: 'Y-m-d H:i',
            onSelectDate: updateModelValue,
            onSelectTime: updateModelValue
          });

          ngModelCtrl.$validators.dateFormat = function (modelValue, viewValue) {
            return modelValue === '' ||
                   /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(modelValue);
          }
        }
      };
    });