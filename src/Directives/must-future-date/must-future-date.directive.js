/**
 * must-future-date
 * Created at 2015. 7. 17
 * Updated at 2015. 7. 17
 */

'use strict';

angular.module('chris.util')
    .directive('mustFutureDate', function () {
      return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attrs, ngModelCtrl) {
          function validateEqual(myValue) {
            var valid = (myValue - Date.now()) > 0;
            ngModelCtrl.$setValidity('mustFutureDate', valid);
            return valid ? myValue : undefined;
          }

          ngModelCtrl.$parsers.push(validateEqual); // input 요소의 값이 변경될 경우 호출할 함수 목록
          ngModelCtrl.$formatters.push(validateEqual); // 모델 값이 변경되면 호출되는 함수 목록
        }
      };
    });