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

          function updateModelValue () {
            ngModelCtrl.$setViewValue(element[0].value)
          }

          function validateDateFormat (val) {
            var valid = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(val);
            ngModelCtrl.$setValidity('dateFormat', valid);
            return valid ? val: undefined;
          }

          $(element).datetimepicker({
            lang: 'ko',
            value: ngModelCtrl.$modelValue || '',
            format: 'Y-m-d H:i',
            onSelectDate: updateModelValue,
            onSelectTime: updateModelValue
          });

          ngModelCtrl.$parsers.push(validateDateFormat); // input 요소의 값이 변경될 경우 호출할 함수 목록
          ngModelCtrl.$formatters.push(validateDateFormat); // 모델 값이 변경되면 호출되는 함수 목록
        }
      };
    });