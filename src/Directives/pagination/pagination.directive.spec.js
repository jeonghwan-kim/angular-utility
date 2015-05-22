'use strict';

describe('Directive: pagination', function () {

  // load the directive's module
  beforeEach(module('chris.util'));

  var tag = 'pagination.directive.spec.js',
      element,
      scope,
      lis,
      selectPageHandler;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    scope.numPages = 5;
    scope.currentPage = 3;
    selectPageHandler = scope.selectPageHandler = jasmine.createSpy('selectPageHandler');
    element = $compile(
        '<div pagination num-pages="numPages" ' +
        ' current-page="currentPage"> ' +
        ' on-select-page="selectPageHandler(page)">' +
        '</div>')(scope);
    scope.$digest();
    lis = function () {
      return element.find('li');
    };
  }));

  it('has the number of the page as text in each page item', function () {
    var i;
    for (i = 1; i <= scope.numPage; i += 1) {
      expect(lis().eq(i).text()).toEqual('' + i);
    }
  });

  // why is not working?
  it('executes the onSelectPage expression when the current page changes', function ($timeout) {
    var page2 = lis().eq(2).find('a').eq(0);
    page2.triggerHandler('click');
    scope.$digest();
    expect(selectPageHandler).toHaveBeenCalledWith(2);
  });
});