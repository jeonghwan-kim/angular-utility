/**
 * Set autofocus attribute in input field
 * Created at 2015. 5. 17
 * Updated at 2015. 5. 17
 */

'use strict';

angular.module('chris.util')
    .directive('customRadio', function ($log, $compile) {
      var tag = 'Directive:customRadio';

      return {
        template: '<div><input type="radio" ng-model="choice" />' +
            '<label for="1"><span class="icon"></span><span class="text"><ng-transclude></ng-transclude></span></label>' +
          '</div>',
        restrict: 'A',
        transclude: true,
        scope: {
          choice: '='
        },
        compile: function (element, attrs) {
          element.find('input').attr('id', attrs.radioId);
          element.find('input').attr('value', attrs.radioId);
          element.find('label').attr('for', attrs.radioId);
        },
        link: function (scope, element, attrs) {

        }

      };
    });
