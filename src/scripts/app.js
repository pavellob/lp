'use strict';

angular.module('bike', ['ngMaterial'])
    .config(['$mdThemingProvider', function($mdThemingProvider){
        $mdThemingProvider.definePalette('bikePallete', {
            '50': '#9acffa',
            '100': '#82c4f8',
            '200': '#6ab8f7',
            '300': '#51adf6',
            '400': '#39a1f4',
            '500': '#202020', // primary (toolbar)
            '600': '#0d8aee',
            '700': '#ff7100', // accent focus
            '800': '#0a6ebd',
            '900': '#0960a5',
            'A100': '#b2dbfb',
            'A200': '#ff7100', // accent
            'A400': '#e3f2fd',
            'A700': '#08528d'
        });
        $mdThemingProvider.theme('default').primaryPalette('bikePallete').accentPalette('bikePallete');
    }])
;
