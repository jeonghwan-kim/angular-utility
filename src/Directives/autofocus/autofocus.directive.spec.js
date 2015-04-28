'use strict';

describe('Directive: autofocus', function () {

  // load the directive's module
  beforeEach(module('chris.util'));

  var TAG = 'autofocus.directive.spec.js',
      element,
      scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make autofocus in input field', inject(function ($compile) {
    element = angular.element('<input type="text" autofocus></input>');
    element = $compile(element)(scope);
    console.log(TAG, element.prop('autofocus'));
    expect(element.prop('autofocus')).toBe(true);
  }));
});