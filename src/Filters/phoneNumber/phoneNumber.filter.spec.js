'use strict';

describe('Filter: phoneNumber', function () {

  // load the filter's module
  beforeEach(module('chris.util'));

  // initialize a new instance of the filter before each test
  var TAG = 'phoneNumber.filter.spec.js',
      phoneNumber;

  beforeEach(inject(function ($filter) {
    phoneNumber = $filter('phoneNumber');
  }));

  it('should return phone number format with hyphen', function () {
    expect(phoneNumber('01012345678')).toBe('010-1234-5678');
    expect(phoneNumber('0101234567')).toBe('010-123-4567');
  });

});