/**
 * Pagination
 * Created at 2015. 5. 29
 * Updated at 2015. 5. 29
 */

'use strict';

angular.module('chris.util')
    .directive('validateEquals', function () {
      var tag = 'validate-equals';
      return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attrs, ngModelCtrl) {
          function validateEqual(myValue) {
            var valid = (myValue === scope.$eval(attrs.validateEquals));
            ngModelCtrl.$setValidity('equal', valid);
            return valid ? myValue : undefined;
          }

          ngModelCtrl.$parsers.push(validateEqual); // input 요소의 값이 변경될 경우 호출할 함수 목록
          ngModelCtrl.$formatters.push(validateEqual); // 모델 값이 변경되면 호출되는 함수 목록

          scope.$watch(attrs.validateEquals, function (val) {
            //ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue); // $parsers 파이프라인 동작

            // 위 코드대신 아래코드로 실행
            validateEqual(ngModelCtrl.$viewValue);
          });
        }
      };
    });