'use strict';

angular.module('bike').constant('FEEDBACK_TYPES', {
    'question': {
        type: 'mail_to_question',
        template: '/templates/feedback/form-question.html',
        userFields: ['user_name', 'user_contact'],
        callToAction: 'Отправить',
        success: {
            template: '/templates/feedback/success-text.html',
            scope: {
                title: 'Заявка отправлена',
                text: 'Специалист скоро свяжется с вами.'
            }
        }
    },
    'callback': {
        type: 'mail_to_callback',
        template: '/templates/feedback/form-callback.html',
        userFields: ['user_name', 'user_phone'],
        callToAction: 'Отправить',
        success: {
            template: '/templates/feedback/success-dialog.html',
            scope: {
                title: 'Заявка отправлена',
                text: 'Специалист скоро свяжется с вами.'
            }
        }
    },
    'testdrive': {
        type: 'mail_to_testdrive',
        template: '/templates/feedback/form-testdrive.html',
        userFields: ['user_name', 'user_contact'],
        callToAction: 'Отправить',
        success: {
            template: '/templates/feedback/success-dialog.html',
            scope: {
                title: 'Заявка отправлена',
                text: 'Специалист скоро свяжется с вами.'
            }
        }
    },
    'fastorder': {
        type: 'mail_to_fastorder',
        template: '/templates/feedback/form-fastorder.html',
        userFields: ['user_name', 'user_phone', 'user_email', 'bike'],
        callToAction: 'Заказать',
        success: {
            template: '/templates/feedback/success-dialog.html',
            scope: {
                title: 'Заявка отправлена',
                text: 'Специалист скоро свяжется с вами.'
            }
        }
    }
});
