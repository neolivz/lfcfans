'use strict';

angular.module('bkopApp')
  .filter('imagegroup', function ($cacheFactory) {
        var arrayCache = $cacheFactory('partition');
        var filter = function(arr, size) {
            if (!arr) { return; }
            var newArr = [];
            for (var i=0; i<arr.length; i+=size) {
                newArr.push(arr.slice(i, i+size));
            }
            var cachedParts;
            var arrString = JSON.stringify(arr);
            cachedParts = arrayCache.get(arrString+size);

            if (JSON.stringify(cachedParts) === JSON.stringify(newArr)) {
                return cachedParts;
            }
            arrayCache.put(arrString+size, newArr);
            return newArr;
        };
        return filter;
  });
