'use strict';

angular.module('bkopApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('gallery', {
        url: '/gallery',
        templateUrl: 'app/gallery/gallery.html',
        controller: 'GalleryCtrl'
      });
  });