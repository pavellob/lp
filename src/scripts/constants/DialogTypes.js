'use strict';

angular.module('bike').constant('DIALOG_TYPES', {
    'callback': {
        template: '/templates/dialog/feedback.html',
        feedbackConfig: {
            type: 'callback',
            note: 'Заказать звонок'
        },
        title: 'Обратный звонок',
        text: 'Укажите ваши контактные данные и мы перезвоним вам в течение 5 минут.'
    },
    'testdrive': {
        template: '/templates/dialog/feedback.html',
        feedbackConfig: {
            type: 'testdrive',
            note: 'Заказать звонок'
        },
        title: 'Запись на тест-драйв',
        text: 'Укажите ваши контактные данные и мы перезвоним вам в течение 5 минут.'
    },
    'fastorder': {
        template: '/templates/dialog/feedback.html',
        feedbackConfig: {
            type: 'fastorder',
            note: 'Заказать велосипед'
        },
        title: 'Заказать велосипед',
        text: 'Выберете для заказа модель велосипеда'
    },
    'bike': {
        template: '/templates/dialog/bike.html'
    }
});
