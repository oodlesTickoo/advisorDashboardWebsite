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
    'ui.bootstrap',
    'uiSwitch',
    'toastr',
    'angular-loading-bar'
]);

app.run(function($rootScope, $state, $stateParams, $transitions) {
    $rootScope.$state = $state;
    console.log("frfrfrfrfrrfrfrfrrfrf", $rootScope.$state);
});

app.config(function($stateProvider, $urlRouterProvider, ScrollBarsProvider, $locationProvider, cfpLoadingBarProvider) {
    $locationProvider.hashPrefix('');
    ScrollBarsProvider.defaults = {
        advanced: {
            updateOnContentResize: true
        },
        scrollInertia: 800,
        axis: 'y', // enable 2 axis scrollbars by default 
        theme: 'light',
        setHeight: '99vh',
        autoHideScrollbar: true
    };

    cfpLoadingBarProvider.includeBar = false;

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
        })
	.state('app.goalBasedAdvice', {
		url: '/goals',
		templateUrl: 'views/goalBasedAdvice.html',
		controller: 'GoalBasedAdviceController'
	})
	.state('app.contact', {
		url: '/contact',
		templateUrl: 'views/contact.html',
		controller: 'ContactController'
	});
    $urlRouterProvider.otherwise('/login');

});