(function(){
    'use strict';

    angular.module('bike').filter('bkCurrency', [function(){
        return function(input){
            var dividerSpace = '\u2009';
            if(isNaN(input)){
                return input;
            } else {
                return input.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1'+dividerSpace) + dividerSpace + '\u20BD';
            }
        };
    }]);
})();
