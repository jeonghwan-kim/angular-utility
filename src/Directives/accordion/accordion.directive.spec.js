'use strict';

describe('Directive: accordion', function () {

  // load the directive's module
  beforeEach(module('chris.util'));

  var element,
      scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should ...', inject(function ($compile) {
    //element = angular.element('<input type="text" autofocus></input>');
    //element = $compile(element)(scope);
    //expect(element.prop('autofocus')).toBe(true);
  }));
});