'use strict';

var app = angular.module('advisorDashboardApp', [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ngFileUpload',
    'AngularPrint',
    'AgeCalculatorService'
]);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

    // LOGIN STATE
	.state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    })

    // NESTED VIEWS 
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'views/app.html'/*,
        controller: 'AppCtrl'*/
    })

    .state('app.advisorPage', {
        url: '/advisor',
        templateUrl: 'views/advisorPage.html',
        controller: 'AdvisorPageController'
    });
});


/*$routeProvider
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    })
    .when('/client', {
        templateUrl: 'views/clientPage.html',
        controller: 'clientPageController'
    })
    .otherwise({
        redirectTo: '/login'
    });*/