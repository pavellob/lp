'use strict';
angular.module('bike').service('DialogService', ['$mdDialog', 'DIALOG_TYPES', function($mdDialog, DIALOG_TYPES) {
    function show($event, dialog) {
        $mdDialog.show({
            controller: ['$scope', '$mdDialog', function($scope, $mdDialog){
                _.merge($scope, dialog);
                $scope.closeDialog = function() {
                    $mdDialog.hide();
                };
            }],
            templateUrl: dialog.template,
            parent: angular.element(document.body),
            targetEvent: $event,
            preserveScope: true,
            clickOutsideToClose: true
        });
    }

    function getByType(type, sources){
        var dialog = DIALOG_TYPES[type] || {};

        if(_.isUndefined(sources)){
            return dialog;
        } else {
            return  _.merge({}, dialog, sources);
        }
    }

    return {
        show: show,
        getByType: getByType
    };
}]);
