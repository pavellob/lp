angular.module('bike').directive('bkHint', ['$compile', function($compile) {
    return {
        restrict: 'A',
        require: '?ngModel', // get a hold of NgModelController
        link: function(scope, element, attrs, ngModel) {
            if (!ngModel || !element[0]) return;
            var hintElem = angular.element('<div class="hint"></div>');
            hintElem.text(attrs.dkHint);
            var hintNode = $compile(hintElem)(scope);
            element[0].parentNode.insertBefore(hintNode[0], element[0].nextSibling);

            setPosition();
            hideHint();

            element.on('focus keyup', function() {
                showHint();
            });
            element.on('blur', function() {
                hideHint();
            });

            function showHint() {
                if ( (ngModel.$untouched && !ngModel.$$parentForm.$submitted) || (ngModel.$touched && ngModel.$valid) || (ngModel.$$parentForm.$submitted && ngModel.$valid) ) {
                    hintNode[0].textContent = attrs.dkHint;
                    hintElem.addClass("hint--shown");
                } else {
                    hintElem.removeClass("hint--shown");
                }
            }

            function hideHint() {
                hintElem.removeClass("hint--shown");
            }

            function setPosition() {
                var lineHeight = 14;
                hintElem.addClass("hint--line_" + hintNode[0].clientHeight/lineHeight);
            }
        }
    };
}]);
