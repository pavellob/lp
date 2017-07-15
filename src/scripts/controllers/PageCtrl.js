'use strict';

angular.module('bike').controller('PageCtrl',['$scope', '$mdMedia', '$mdSidenav', 'DialogService', function($scope, $mdMedia, $mdSidenav, DialogService){
    $scope.isAdaptive = function(){
        return $mdMedia('min-width: 840px');
    };
    $scope.toggleMenu = function(){
        $mdSidenav('menu').toggle();
    };
    $scope.isOpenMenu = function(){
        return $mdSidenav('menu').isOpen();
    };
    $scope.openDialog = function($event, type) {
        DialogService.show($event, DialogService.getByType(type));
    };
}]);