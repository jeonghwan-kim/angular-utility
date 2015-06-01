'use strict';

describe('Directive: validate-email', function () {
  var $scope,
      element,
      ctrl;

  // load the directive's module
  beforeEach(module('chris.util'));

  beforeEach(inject(function ($compile, $rootScope) {
    $scope = $rootScope.$new();
    element = $compile(
        '<form name="form" novalidate>' +
        '  <input type="email" name="email" ng-model="email" validate-email />' +
        '</form>'
    )($scope);
    $scope.$digest();
    ctrl = $scope.form.email;
  }));

  it('should be valid', function () {
    $scope.email = 'ej88ej@gmail.com';
    $scope.$digest();
    expect(ctrl.$valid).toBeTruthy();
    expect(ctrl.$viewValue).toBe($scope.email);
  });

  it('should be valid', function () {
    $scope.email = 'ej88ej.kim@gmail.com';
    $scope.$digest();
    expect(ctrl.$valid).toBeTruthy();
    expect(ctrl.$viewValue).toBe($scope.email);
  });

  it('should be invalid', function () {
    ctrl.$viewValue = 'ej88ej';
    $scope.$digest();
    expect(ctrl.$valid).toBeFalsy();
    expect(ctrl.$modelValue).toBe(undefined);
    expect($scope.email).toBe(undefined);
  });

  it('should be invalid', function () {
    ctrl.$viewValue = 'ej88ej@gmail.';
    $scope.$digest();
    expect(ctrl.$valid).toBeFalsy();
    expect(ctrl.$modelValue).toBe(undefined);
    expect($scope.email).toBe(undefined);
  });

  it('should be invalid', function () {
    ctrl.$viewValue = 'ej88ej@gmail.comcom';
    $scope.$digest();
    expect(ctrl.$valid).toBeFalsy();
    expect(ctrl.$modelValue).toBe(undefined);
    expect($scope.email).toBe(undefined);
  });



});