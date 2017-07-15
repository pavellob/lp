'use strict';

angular.module('bike').controller('CtaFreeTestDriveCtrl',['$scope', 'DialogService', function($scope, DialogService){
    $scope.init = function(){

    };

    $scope.action = function($event){
        DialogService.show($event, DialogService.getByType('testdrive'));
    };
}]);
