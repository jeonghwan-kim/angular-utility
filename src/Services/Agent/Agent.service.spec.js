'use strict';

describe('Service: Agent', function () {

  // load the service's module
  beforeEach(module('chris.util'));

  // instantiate service
  var Agent;
  beforeEach(inject(function (_Agent_) {
    Agent = _Agent_;
  }));

  it('should check brower\'s name', function () {
    var browsers = ['chrome', 'safari', 'firefox', 'ie', 'unknown'];
    var browser = Agent.getName().toLowerCase();
    var details = Agent.getDetails();

    expect(browsers).toContain(browser);
    expect(new RegExp(browser).test(details.toLowerCase())).toBe(true);
  });

});