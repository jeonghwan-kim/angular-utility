/**
 * ngForm utility
 * Created at 2015. 11. 11
 * Updated at 2015. 11. 11
 */

'use strict';

angular.module('chris.util')
    .factory('FormUtil', function ($log, $window) {

      function isEmpty(obj) {
        for (var key in obj) {
          if (hasOwnProperty.call(obj, key)) {
            return false;
          }
        }
        return true;
      }

      function hasError(form, ctrl, target) {
        return form.$submitted && form[ctrl].$error[target];
      }

      function isSubmitable(form) {
        if (form.$submitted){
          return form.$valid && isEmpty(form.$error);
        } else {
          return true;
        }
      }

      function removeError(form, ctrl, target) {
        delete form[ctrl].$error[target];
      }

      return {
        hasError: hasError,
        isSubmitable: isSubmitable,
        removeError: removeError
      } ;
    });
