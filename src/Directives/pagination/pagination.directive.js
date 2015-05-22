/**
 * Pagination
 * Created at 2015. 5. 22
 * Updated at 2015. 5. 22
 */

'use strict';

angular.module('chris.util')
    .directive('pagination', function () {
      var tag = 'pagination';
      return {
        template: '<div><ul class="pagination">' +
          '<li ng-class="{disabled: noPrevious()}">' +'' +
            '<a href="#" ng-click="selectPrevious()">&laquo;</a>' +
          '</li>' +
          '<li ng-repeat="page in pages" ng-class="{active: isActive(page)}">' +
            '<a href="#" ng-click="selectPage(page)">{{page}}</a>' +
          '</li>' +
          '<li ng-class="{disabled: noNext()}">' +'' +
            '<a href="#" ng-click="selectNext()">&raquo;</a>' +
          '</li>' +
        '</ul></div>',
        restrict: 'A',
        scope: {
          numPages: '=',
          currentPage: '=',
          onSelectPage: '&'
        },
        replace: true,
        link: function (scope, element, attrs) {
          scope.$watch('numPages', function (value) {
            console.log(tag, value);
            scope.pages = [];
            for (var i = 1; i <= value; i++) {
              scope.pages.push(i);
            }
            if (scope.currentPage > value) {
              scope.selectPage(value);
            }
          });

          scope.isActive = function (page) {
            return scope.currentPage === page;
          };

          scope.selectPage = function (page) {
            if (!scope.isActive(page)) {
              scope.currentPage = page;
              scope.onSelectPage({page: page});
            }
          };

          scope.selectNext = function () {
            if (!scope.noNext()) {
              scope.selectPage(scope.currentPage + 1);
            }
          };

          scope.noNext = function() {
            return true;
          };

          scope.noPrevious = function() {
            return true;
          };

        }
      };
    });