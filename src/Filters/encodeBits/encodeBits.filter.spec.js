'use strict';

describe('Filter: encodeBits', function () {

  // load the filter's module
  beforeEach(module('chris.util'));

  // initialize a new instance of the filter before each test
  var TAG = 'encodeBits.filter.spec.js',
      encodeBits;

  beforeEach(inject(function ($filter) {
    encodeBits = $filter('encodeBits');
  }));

  it('should return bit operation value', function () {
    var bitObjects = [{
      code: 1,
      checked: true
    }, {
      code: 2,
      checked: false
    }, {
      code: 4,
      checked: true
    }];

    expect(encodeBits(bitObjects)).toBe(1 | 4);
  });

  it('should return null for non array', function () {
    var object = {};
    expect(encodeBits(object)).toBe(null);
  });

});