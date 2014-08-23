'use strict';

angular.module('bkopApp')
  .factory('instagramFactory', function ($http) {
    // Service logic
    // ...


    // Public API here
    return {
        fetchPopular: function(callback) {

            var endPoint = "https://api.instagram.com/v1/users/1273445313/media/recent?client_id=b37f729f63a0484aa8c7749a1a09863e&count=-1&callback=JSON_CALLBACK";

            $http.jsonp(endPoint).success(function(response) {
                callback(response.data);
            });
        }
    };
  });
