'use strict';

describe('Filter: decodeBits', function () {

  // load the filter's module
  beforeEach(module('chris.util'));

  // initialize a new instance of the filter before each test
  var TAG = 'decodeBits.filter.spec.js',
      decodeBits;

  beforeEach(inject(function ($filter) {
    decodeBits = $filter('decodeBits');
  }));

  it('should return object', function () {
    var bitObjects = [{
      code: 1
    }, {
      code: 2
    }, {
      code: 4
    }];

    decodeBits(1 | 4, bitObjects, 'object');
    expect(bitObjects[0].checked).toBe(true);
    expect(bitObjects[2].checked).toBe(true);
  });

  it('should return string', function () {
    var bitObjects = [{
      code: 1,
      name: 'foo'
    }, {
      code: 2,
      name: 'boo'
    }, {
      code: 4,
      name: 'poo'
    }];

    var str = decodeBits(1 | 4, bitObjects, 'string');
    expect(str).toBe('foo, poo');
  });

});