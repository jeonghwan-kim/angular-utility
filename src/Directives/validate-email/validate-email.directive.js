/**
 * Pagination
 * Created at 2015. 6. 1
 * Updated at 2015. 7. 9
 */

'use strict';

angular.module('chris.util')
    .directive('validateEmail', function () {
      var EMAIL_REGEXP = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/;

      return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attrs, ctrl) {
          if (ctrl && ctrl.$validators.email) {
            ctrl.$validators.email = function (modelValue) {
              return EMAIL_REGEXP.test(modelValue);
            }
          }
        }
      };
    });