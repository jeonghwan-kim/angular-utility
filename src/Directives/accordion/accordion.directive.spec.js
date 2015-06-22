'use strict';

describe('Directive: accordion', function () {

  // load the directive's module
  beforeEach(module('chris.util'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    var element = $compile('<accordion></accordion>')(scope);
    ctrl = element.controller('accordion');
  }));

  describe('closeOthers', function () {
    var group1, group2, group3;
    beforeEach(function () {
      ctrl.addGroup(group1 = scope.$new());
      ctrl.addGroup(group2 = scope.$new());
      ctrl.addGroup(group3 = scope.$new());
      group1.isOpen = group2.isOpen = group3.isOpen = true;
    });

    it('closes all groups other than the one passed', function () {
      ctrl.closeOthers(group2);
      expect(group1.isOpen).toBe(false);
      expect(group2.isOpen).toBe(true);
      expect(group3.isOpen).toBe(false);
    })
  })
});