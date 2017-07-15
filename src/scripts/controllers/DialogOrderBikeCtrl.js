'use strict';

angular.module('bike').controller('DialogOrderBikeCtrl',['$scope', 'CatalogService', 'DialogService', function($scope, CatalogService, DialogService){
    $scope.init = function(){

    };

    $scope.order = function($event){
        
        DialogService.show($event, DialogService.getByType('fastorder', {bikes: CatalogService.getAllBikes()}));
    };

    $scope.customize = function(){
        console.log('customize bike');
    };
}]);
