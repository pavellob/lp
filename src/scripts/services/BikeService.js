'use strict';

angular.module('bike').service('BikeService', [function(){
    var id = 0;
    
    function getMock() {
        id++;
        return {
            id: id,
            name: 'Mock bike',
            price: 29900,
            description: 'Готовые велосипеды прямо сейчас велосипеды кастомной комплектации в течении 3-х дней.',
            descriptionFull: 'Описание этой модели. Мы создаем красивые, современные велосипеды для каждого. Мы индивидуально собираем комплектацию под потребности каждого клиента, затем красим велосипед в выбранный заказчиком цвет.',
            config: [
                {icon: 'images/config-icon-1.svg', name: 'Рама', value: 'Pix X2'},
                {icon: 'images/config-icon-2.svg', name: 'Вилка', value: '3020'},
                {icon: 'images/config-icon-3.svg', name: 'Колёса', value: '28", black'},
                {icon: 'images/config-icon-4.svg', name: 'Система', value: '52+3 speed'},
                {icon: 'images/config-icon-5.svg', name: 'Седло', value: 'Red simple'},
                {icon: 'images/config-icon-6.svg', name: 'Руль', value: 'Red big'},
                {icon: 'images/config-icon-7.svg', name: 'Дополнительно', value: 'Шлем, звонок'}
            ],
            features: [
                {icon: 'images/feature.svg', value: 'Преимущество. Мы индивидуально собираем комплектацию.'},
                {icon: 'images/feature.svg', value: 'Преимущество. Мы индивидуально собираем комплектацию.'},
                {icon: 'images/feature.svg', value: 'Преимущество. Мы индивидуально собираем комплектацию.'}
            ],
            image: 'images/bike.jpg'
        };
    }

    return {
        getMock: getMock
    };
}]);
