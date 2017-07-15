'use strict';

angular.module('bike').controller('CtaSpeedOrderCtrl',['$scope', 'CatalogService', 'DialogService', function($scope, CatalogService, DialogService){
    $scope.init = function(){

    };

    $scope.action = function($event){
        DialogService.show($event, DialogService.getByType('fastorder', {bikes: CatalogService.getAllBikes()}));
    };
}]);
