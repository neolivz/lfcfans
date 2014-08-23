'use strict';

describe('Filter: imagegroup', function () {

  // load the filter's module
  beforeEach(module('bkopApp'));

  // initialize a new instance of the filter before each test
  var imagegroup;
  beforeEach(inject(function ($filter) {
    imagegroup = $filter('imagegroup');
  }));

  it('should return the input prefixed with "imagegroup filter:"', function () {
    var text = 'angularjs';
    expect(imagegroup(text)).toBe('imagegroup filter: ' + text);
  });

});
