'use strict';

describe('Filter: birthToAge', function () {

  // load the filter's module
  beforeEach(module('chris.util'));

  // initialize a new instance of the filter before each test
  var TAG = 'birthToAge.filter.spec.js',
      birthToAge;

  beforeEach(inject(function ($filter) {
    birthToAge = $filter('birthToAge');
  }));

  it('should return the age', function () {
    var today = new Date();
    today.setSeconds(today.getSeconds() - 1);

    console.log(TAG, birthToAge(today));
    expect(birthToAge(today)).toBe(0);
  });

});