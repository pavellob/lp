'use strict';

angular.module('bike').directive('bkInfografics', ['$mdMedia', function($mdMedia){
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var $carousel = $(element).find('.bk-js-carousel');
            var $prev = $(element).find('.bk-js-control-prev');
            var $next = $(element).find('.bk-js-control-next');

            $carousel.jcarousel();

            $prev
                .on('jcarouselcontrol:active', function() {
                    $(this).removeClass('bk-is-inactive');
                })
                .on('jcarouselcontrol:inactive', function() {
                    $(this).addClass('bk-is-inactive');
                })
                .jcarouselControl({
                    target: '-=1'
                });

            $next
                .on('jcarouselcontrol:active', function() {
                    $(this).removeClass('bk-is-inactive');
                })
                .on('jcarouselcontrol:inactive', function() {
                    $(this).addClass('bk-is-inactive');
                })
                .jcarouselControl({
                    target: '+=1'
                });
        }
    };
}]);
