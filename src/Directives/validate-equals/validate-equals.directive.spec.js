'use strict';

describe('Directive: validate-equals', function () {
  var tag = 'validate-equals.directive.spec.js',
      $scope,
      element,
      modelCtrl,
      modelValue;

  // load the directive's module
  beforeEach(module('chris.util'));

  beforeEach(inject(function ($compile, $rootScope) {
    $scope = $rootScope.$new();
    element = $compile(
        '<form name="testForm">' +
        '  <input name="testInput" ng-model="model.testValue" validate-equals="model.compareTo" />' +
        '</form>'
    )($scope);
    $scope.$digest();

    modelValue = $scope.model = {};
    modelCtrl = $scope.testForm.testInput;

  }));

  describe('model value changes, ', function () {

    it('should be invalid if the model chagnes', function () {
      modelValue.testValue = 'different';
      $scope.$digest();
      expect(modelCtrl.$valid).toBeFalsy();
      expect(modelCtrl.$viewValue).toBe(undefined);
    });

    it('should be invalid if the reference model chagnes', function () {
      modelValue.compareTo = 'different';
      $scope.$digest();
      expect(modelCtrl.$valid).toBeFalsy();
      expect(modelCtrl.$viewValue).toBe(undefined);
    });

    it('should be valid if the modelValue changes to be the same as the reference', function () {
      modelValue.compareTo = 'different';
      $scope.$digest();
      expect(modelCtrl.$valid).toBeFalsy();

      modelValue.testValue = 'different';
      $scope.$digest();
      expect(modelCtrl.$valid).toBeTruthy();
      expect(modelCtrl.$viewValue).toBe('different');
    });

  });

  describe('input value changes', function() {

    it('should be invalid if the input value changes', function () {
      modelCtrl.$setViewValue('different');
      expect(modelCtrl.$valid).toBeFalsy();
      expect(modelValue.testValue).toBe(undefined);
    });

    it('should be valid if the input value changes to be the smae as the reference', function () {
      modelValue.compareTo = 'different';
      $scope.$digest();
      expect(modelCtrl.$valid).toBeFalsy();


      modelCtrl.$setViewValue('different');
      expect(modelCtrl.$valid).toBeTruthy();
      expect(modelValue.testValue).toBe('different');
    });

  });

});