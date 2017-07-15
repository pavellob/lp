'use strict';
angular.module('bike').controller('FeedbackCtrl', ['$scope', '$rootScope', '$element', '$http', '$compile', '$mdDialog', 'FeedbackService', function($scope, $rootScope, $element, $http, $compile, $mdDialog, FeedbackService) {
    $scope.init = function(typeName, note){
        $scope.feedback = FeedbackService.getType(typeName);
        console.log($scope.feedback);
        $scope.formData = {
            type: $scope.feedback.type,
            note: note
        };
    };
    $scope.submit = function() {
        if (_.isEmpty($scope.FeedbackForm.$error)) {
            FeedbackService.send($scope.formData).then(function successCallback(response) {
                // TODO: вынести в сервис
                $http({
                    method: 'GET',
                    cache: true,
                    url: $scope.feedback.success.template
                }).then(function successCallback(response) {
                    var $parent = $element.parent();
                    var $successScope = $rootScope.$new();
                    $successScope.closeDialog = function() {
                        $mdDialog.hide();
                    };
                    _.merge($successScope, $scope.feedback.success.scope);
                    $parent.html(response.data);
                    $compile($parent.contents())($successScope);
                }, function errorCallback(response) {
                    console.error("Bad template");
                });
            }, function errorCallback(response) {
                console.error(response);
            });
        }
    };
}]);
