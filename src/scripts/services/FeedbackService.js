'use strict';
angular.module('bike').service('FeedbackService', ['$http', 'FEEDBACK_TYPES', function($http, FEEDBACK_TYPES) {
    function send(data) {
        return $http.post( '/api/mail_messages/', data);
    }
    function getType(name){
        return FEEDBACK_TYPES[name];
    }
    return {
        send: send,
        getType: getType
    };
}]);
