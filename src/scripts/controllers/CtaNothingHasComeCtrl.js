'use strict';

angular.module('bike').controller('CtaNothingHasComeCtrl',['$scope', function($scope){
    $scope.init = function(){

    };

    $scope.action = function(){
        console.log('CtaNothingHasComeCtrl ACTION');
    };
}]);
