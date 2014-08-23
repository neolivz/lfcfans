'use strict';

describe('Service: instagramFactory', function () {

  // load the service's module
  beforeEach(module('bkopApp'));

  // instantiate service
  var instagramFactory;
  beforeEach(inject(function (_instagramFactory_) {
    instagramFactory = _instagramFactory_;
  }));

  it('should do something', function () {
    expect(!!instagramFactory).toBe(true);
  });

});
