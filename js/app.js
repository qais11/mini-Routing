angular.module('miniRouting', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'js/settings/settingsTmpl.html',
            controller: 'settingsCtrl'
        })
        .state('products', {
            url: '/proudects/:id',
            templateUrl: 'js/proudect/proudectTmpl.html',
            controller: 'proudectCtrl'
        });

    $urlRouterProvider
        .otherwise('/');
});
