'use strict';

describe('Controller: GalleryCtrl', function () {

  // load the controller's module
  beforeEach(module('bkopApp'));

  var GalleryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GalleryCtrl = $controller('GalleryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
