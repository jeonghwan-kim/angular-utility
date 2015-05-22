'use strict';

angular.module('chris.util')
    .controller('IndexCtrl', function ($scope) {
      var tag = 'IndexCtrl';

      $scope.numPages = 5;

      $scope.currentPage = 2;

      $scope.selectPage = function (page) {
        console.log(tag, page);
      };

    });