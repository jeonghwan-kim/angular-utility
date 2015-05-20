'use strict';

angular.module('chris.util')
    .controller('IndexCtrl', function ($scope, $log, DaumPostcode) {

      $scope.search = function () {
        DaumPostcode().then(function (data) {
          $scope.result = data;
        }, function (reason) {
          console.error(reason);
          $scope.result = reason.toString();
        });
      };

    });