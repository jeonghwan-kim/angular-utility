'use strict';

angular.module('chris.util')
    .controller('IndexCtrl', function ($scope) {
      $scope.numPages = 5;

      $scope.currentPage = 2;

      $scope.onSelectPage = function (page) {
        console.log('onSelectPage()', page);
      };

    });