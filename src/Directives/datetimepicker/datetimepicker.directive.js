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
          $(element).datetimepicker({
            lang: 'ko',
            value: ngModelCtrl.$modelValue || '',
            format: 'Y-m-d H:i',
            onSelectDate: updateModelValue,
            onSelectTime: updateModelValue
          });

          function updateModelValue () {
            ngModelCtrl.$setViewValue(element[0].value)
          }
        }
      };
    });