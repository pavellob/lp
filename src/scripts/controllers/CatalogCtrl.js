'use strict';

angular.module('bike').controller('CatalogCtrl',['$scope', 'CatalogService', 'DialogService', function($scope, CatalogService, DialogService){
    var count = 4;
    $scope.bikes = [];
    
    $scope.init = function(){
        $scope.bikes = CatalogService.getBikes(count);
    };

    $scope.about = function($event, bike){
        // console.log('About bike: ' + bikeId);
        DialogService.show($event, DialogService.getByType('bike', {bike: bike}));
    };

    $scope.config = function(bikeId){
        console.log('Config bike: ' + bikeId);
    };

    $scope.order = function($event){
        DialogService.show($event, DialogService.getByType('fastorder', {bikes: CatalogService.getAllBikes()}));
    };

    $scope.more = function() {
        // var moreBikes = CatalogService.getBikes(count);
        // $scope.bikes.concat(moreBikes);
        // console.log('$scope.bikes');
        // console.log($scope.bikes);
        $scope.bikes = _.concat($scope.bikes, CatalogService.getBikes(count))
    };
}]);