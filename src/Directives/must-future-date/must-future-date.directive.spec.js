'use strict';

describe('Directive: must-future-date', function () {
  var $scope,
      element;

  // load the directive's module
  beforeEach(module('chris.util'));

  beforeEach(inject(function ($compile, $rootScope) {
    $scope = $rootScope.$new();
    element = $compile(
        '<form name="testForm">' +
        '  <input name="testInput" ng-model="testValue" must-future-date />' +
        '</form>'
    )($scope);
    $scope.$digest();
  }));

  describe('model value changes, ', function () {

    it('should be valid if the modelValue is future date', function () {
      $scope.testValue = new Date(3000, 1, 1);
      $scope.$digest();
      expect($scope.testForm.testInput.$valid).toBeTruthy();
    });

    it('should be invalid if the modelValue is previous date', function () {
      $scope.testValue = new Date(1000, 1, 1);
      $scope.$digest();
      expect($scope.testForm.testInput.$valid).toBeFalsy();
    });

    it('should be invalid if the modelValue is not Date object', function () {
      $scope.testValue = 'string object';
      $scope.$digest();
      expect($scope.testForm.testInput.$valid).toBeFalsy();
    });

  });

  describe('input value changes', function() {

    it('should be valid if the input value is future date', function () {
      var testValue = new Date(3000, 1, 1);
      $scope.testValue = testValue;
      $scope.$digest();
      expect($scope.testForm.testInput.$valid).toBeTruthy();
      expect($scope.testValue).toBe(testValue);
    });

    it('should be invalid if the input value is previous date', function () {
      $scope.testForm.testInput.$setViewValue(new Date(2000, 1, 1));
      expect($scope.testForm.testInput.$valid).toBeFalsy();
      expect($scope.testValue).toBe(undefined);
    });

    it('should be invalid if the input value is not Date object', function () {
      $scope.testForm.testInput.$setViewValue('string object');
      expect($scope.testForm.testInput.$valid).toBeFalsy();
      expect($scope.testValue).toBe(undefined);
    });

  });

});