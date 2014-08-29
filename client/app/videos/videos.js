'use strict';

angular.module('bkopApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('videos', {
        url: '/videos',
        templateUrl: 'app/videos/videos.html',
        controller: 'VideosCtrl'
      });
  });