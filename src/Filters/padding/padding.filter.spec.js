'use strict';

describe('Filter: padding', function () {

  // load the filter's module
  beforeEach(module('chris.util'));

  // initialize a new instance of the filter before each test
  var TAG = 'padding.filter.spec.js',
      padding;

  beforeEach(inject(function ($filter) {
    padding = $filter('padding');
  }));

  it('should return padding value', function () {
    expect(padding(1, 3, '0')).toBe('001');
    expect(padding(1, 3)).toBe('001');
    expect(padding(100, 8)).toBe('00000100');
  });

});