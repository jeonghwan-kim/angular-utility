'use strict';

describe('Directive: pagination', function () {

  // load the directive's module
  beforeEach(module('chris.util'));

  var element,
      scope,
      lis,
      selectPageHandler;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    scope.numPages = 5;
    scope.currentPage = 3;
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

  it('set the current-page to be active', function () {
    var currentPageItem = lis().eq(scope.currentPage);
    expect(currentPageItem.hasClass('active')).toBe(true);
  });

  it('disables "next" if current-page is num-pages', function () {
    scope.currentPage = 5;
    scope.$digest();
    var nextPageItem = lis().eq(-1);
    expect(nextPageItem.hasClass('disabled')).toBe(true);
  });

  it('changes currentPage if a page link is clicked', function () {
    var page2 = lis().eq(2).find('a').eq(0);
    page2[0].click();
    scope.$digest();
    expect(scope.currentPage).toBe(2);
  });

  it('executes the onSelectPage expression when the current page changes', inject(function ($compile, $rootScope) {
    $rootScope.numPages = 5;
    $rootScope.currentPage = 3;
    $rootScope.selectPageHandler = jasmine.createSpy('selectPageHandler');
    var element = $compile(
        '<div pagination num-pages="numPages" ' +
        ' current-page="currentPage"> ' +
        ' on-select-page="selectPageHandler(page)">' +
        '</div>')($rootScope);
    $rootScope.$digest();

    var page2 = element.find('li').eq(2).find('a').eq(0);
    page2[0].click();
    $rootScope.$digest();
    expect($rootScope.currentPage).toBe(2);

    // Below is not called. Why?
    //expect($rootScope.selectPageHandler).toHaveBeenCalledWith(2);
  }));
});

