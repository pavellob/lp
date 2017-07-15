'use strict';

angular.module('bike').directive('bkBanner', ['$mdMedia', function($mdMedia){
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var $carousel = $(element).find('.bk-js-carousel');
            var $pagination = $(element).find('.bk-js-pagination');
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

            $pagination
                .on('jcarouselpagination:active', 'div', function() {
                    $(this).addClass('bk-is-active');
                })
                .on('jcarouselpagination:inactive', 'div', function() {
                    $(this).removeClass('bk-is-active');
                })
                .jcarouselPagination({
                    perPage: 1,
                    item: function(page, carouselItems){
                        return '<div class="bk-section-banner__pagination-item"></div>';
                    }
                });
        }
    };
}]);
