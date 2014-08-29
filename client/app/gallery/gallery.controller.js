'use strict';

angular.module('bkopApp')
  .controller('GalleryCtrl', function ($scope,instagramFactory) {
        $scope.pics = [];
        $scope.have = [];
        $scope.orderBy = "-likes.count";
        $scope.getMore = function() {
            instagramFactory.fetchPopular(function(data) {
                console.log(data);
                for(var i=0; i<data.length; i++) {
                    if (typeof $scope.have[data[i].id]==="undefined") {
                        $scope.pics.push(data[i]) ;
                        $scope.have[data[i].id] = "1";
                    }
                }
            });
        };
        $scope.getMore();


  });
