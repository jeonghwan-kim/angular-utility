/**
 * Accordion directive
 * Created at 2015. 6. 12
 * Updated at 2015. 6. 12
 */

'use strict';

angular.module('chris.util')
    .controller('AccordionController', function ($scope, $attrs) {

      this.groups = [];

      this.closeOthers = function (openGroup) {
        angular.forEach(this.groups, function (group) {
          if (group !== openGroup) {
            group.isOpen = false;
          }
        });
      };

      this.addGroup = function (groupScope) {
        var that = this;
        this.groups.push(groupScope);
        groupScope.$on('$destroy', function (event) {
          that.removeGroup(groupScope);
        }); // ?
      };

      this.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
          this.groups.splice(this.groups.indexOf(group), 1);
        }
      };

    });

angular.module('chris.util')
    .directive('accordion', function () {
      return {
        restrict: 'E',
        controller: 'AccordionController', // This is directive controller
        link: function (scope, element, attrs) {
          element.addClass('panel-group');
        }
      };
    });

angular.module('chris.util')
    .directive('accordionGroup', function () {
      return {
        require: '^accordion', // For using directive controller
        restrict: 'E',
        transclude: true,
        replace: true,
        template:
          '<div class="accordion-group panel panel-default">' +
            '<div class="panel-heading">' +
              '<h4 class="panel-title">' +
                '<a class="#" ng-click="isOpen =! isOpen">{{heading}}</a>' +
              '</h4>' +
            '</div>' +
            '<div class="panel-body" ng-show="isOpen">' +
              '<div class="" ng-transclude></div>' +
            '</div>' +
          '</div>',
        scope: {heading: '@'},
        link: function (scope, element, attrs, accordionCtrl) {
          accordionCtrl.addGroup(scope);
          scope.isOpen = false;
          scope.$watch('isOpen', function (value) {
            if (value) {
              accordionCtrl.closeOthers(scope);
            }
          });
        }
      };
    });