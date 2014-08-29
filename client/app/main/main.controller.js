'use strict';

angular.module('bkopApp')
  .controller('MainCtrl', function ($scope, $http,Auth) {

        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.getCurrentUser = Auth.getCurrentUser;

        console.log("Get Current User",Auth.getCurrentUser());

        $scope.loadNewPage = function(page){
            var url;
            if(page ==='facebook'){
                url = 'http://goo.gl/gVuqc6';
            }else if(page === 'google'){
                url='http://goo.gl/mnXmXN';
            }else if (page === 'twitter'){
                url = 'http://goo.gl/zff0wy';
            }else if(page ==='instagram'){
                url = 'http://goo.gl/pF3ZTy';
            }
            var win = window.open(url, '_blank');
            win.focus();
        };

    });