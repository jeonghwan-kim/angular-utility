/**
 * Set autofocus attribute in input field
 * Created at 2015. 5. 17
 * Updated at 2015. 5. 17
 */

'use strict';

angular.module('chris.util')
    .directive('customRadio', function ($log) {
      var tag = 'Directive:customRadio';
      $log.debug(tag);

      return {
        template:
          '<div>' +
            '<input type="radio" ng-model="" id="" value="" />' +
            '<label for=""><span></span><span></span></label>' +
          '</div>',
        restrict: 'A',
        scope: {
          data: '=data'
        },
        compile: function () {
          return {
            pre: function (scope, element, attrs) {
              //$log.debug(tag, 'pre:', attrs.radioId);
              //$log.debug(tag, 'pre: scope.data', scope.data);
              element.find('input').attr('id', attrs.radioId);
              element.find('input').attr('value', attrs.radioId);
              element.find('label').attr('for', attrs.radioId);
              //element.find('.text')[0].text(attrs.radioId);
              $log.debug(tag, 'pre:', element.find('span'));
              $log.debug(tag, 'pre:', element.find('span')[1].text(attrs.radioId));
              element.find('span')[1].text('asdf');
            },
            post: function (scope, element, attrs) {
              $log.debug(tag, 'post:', attrs.radioId);
              $log.debug(tag, 'post: scope.data', scope.data);
              //element.find('input').attr('id', attrs.radioId);
              //element.find('input').attr('value', attrs.radioId);
              //element.find('label').attr('for', attrs.radioId);
              //scope.data = 'option3';
            }
          };

        }
        //link: function (scope, element, attrs) {
        //  $log.debug(tag, scope.radioId);
        //  $log.debug(tag, scope.data);

        //}
      };
    });