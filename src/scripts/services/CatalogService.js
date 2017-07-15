'use strict';

angular.module('bike').service('CatalogService', ['BikeService', function(BikeService){
    function getBikes(count) {
        var bikes = [];
        count = count || 1;
        console.log(bikes);
        for (var i = count - 1; i >= 0; i--) {
            bikes.push(BikeService.getMock());
        };
        console.log(bikes);
        return bikes;
    }
    function getAllBikes(){
        return getBikes(4);
    }

    return {
        getBikes: getBikes,
        getAllBikes: getAllBikes
    };
}]);
