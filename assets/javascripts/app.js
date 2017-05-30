
var app = angular.module('advisorDashboardApp', [
    'ui.router',
    'ngAnimate',
        'toastr',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngFileUpload',
    'AngularPrint',
    'AgeCalculatorService',
    'ngScrollbars',
	'ui.grid',
	'ui.grid.autoResize',
	'ui.bootstrap'
]);

    app.config(function($stateProvider, $urlRouterProvider, ScrollBarsProvider) {

    ScrollBarsProvider.defaults = {
        advanced: {
            updateOnContentResize: true
        },
        scrollInertia: 800,
        axis: 'y', // enable 2 axis scrollbars by default 
        theme: 'light',
        setHeight: 655,
        autoHideScrollbar: true
    };

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
            templateUrl: 'views/app.html'
                /*,
                        controller: 'AppCtrl'*/
        })

    .state('app.welcome', {
        url: '/welcome',
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController'
    })

        .state('app.advisorPage', {
            url: '/advisor',
            templateUrl: 'views/advisorPage.html',
            controller: 'AdvisorPageController'
        })

        .state('app.superCalculator', {
            url: '/superCalculator',
            templateUrl: 'views/superCalculator.html',
            controller: 'SuperCalculatorController'
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
