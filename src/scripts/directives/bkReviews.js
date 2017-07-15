'use strict';

angular.module('bike').directive('bkReviews', ['$mdMedia', function($mdMedia){
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
                        console.log(carouselItems.data('reviewer-photo'));
                        return '<div class="bk-section-reviews__pagination-item"><div class="bk-section-reviews__pagination-item-photo"><img class="bk-section-reviews__pagination-item-image" src="'+carouselItems.data('reviewer-photo')+'"></div><div class="bk-section-reviews__pagination-item-name">'+carouselItems.data('reviewer-name')+'</div></div>';
                    }
                });
        }
    };
}]);
