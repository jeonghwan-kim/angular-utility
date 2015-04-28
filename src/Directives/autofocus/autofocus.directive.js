/**
 * Set autofocus attribute in input field
 * Created at 2015. 4. 28
 * Updated at 2015. 4. 24
 */

'use strict';

angular.module('chris.util')
    .directive('autofocus', function ($timeout) {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          //$timeout(function () {
            element[0].focus();
          //});
        }
      };
    });