var auth = angular.module("app.auth", []);

auth.factory("authenticationService", ['$http', '$rootScope', 'sessionService', '$state', '$log', function($http, $rootScope, sessionService, $state, $log) {
    var cacheSession = function(response) {
        var result=response[0];
        $rootScope.authObject = response[0];
        sessionService.set('token', result.mobile);
        sessionService.set('firstName', result.FIRST_NAME);
        sessionService.set('lastName', result.LAST_NAME);
        sessionService.set('email', result.CONTACTINFOS[1].DETAIL);
        sessionService.set('mobile', result.CONTACTINFOS[0].DETAIL);

    };

    var uncacheSession = function() {
        $rootScope.authObject = {};
        sessionService.unsetAll();
    };

    return {
       
        login: function(credentials) {
            var login = $http.post("/api/v1/login", credentials);
            login.success(cacheSession);
            return login;
        },
        logout: function() {
            uncacheSession();
            return logout;
        },
        isLoggedIn: function() {
            return sessionService.get('token');
        }
    };
}]);


/*auth.config(function($httpProvider) {

    $httpProvider.interceptors.push(['$location', '$q', 'sessionService', 'flashService', '$log', function($location, $q, sessionService, flashService, $log) {
        return {
            request: function(config) {
                config.headers = config.headers || {};
                config.headers.Authorization = sessionService.get('token');
                return config;
            },
            responseError: function(response) {
                if (response.status === 401) {
                    flashService.showError("Unauthorised Access");
                    sessionService.unset('token');
                    $location.path('/signin');
                }

                return $q.reject(response);
            }
        };
    }]);

});*/

/*
auth.run(["$rootScope", "$location", "$state", "$stateParams", "$http", "authenticationService", "flashService", "_", "$anchorScroll", "sessionService", "Idle", "$window", "$log", function($rootScope, $location, $state, $stateParams, $http, authenticationService, flashService, _, $anchorScroll, sessionService, Idle, $window, $log) {
    var routesThatRequireAuth = ['/admin', '/signin', '/userCheckInOut', '/userOTP', '/dashboard', '/dashboard/module/:moduleId', '/plannedLeavesPage'];
  

    $rootScope.$on("$locationChangeSuccess", function() {
        var tokenValue = authenticationService.isLoggedIn();
       
        if (_(routesThatRequireAuth).contains($location.path()) && !authenticationService.isLoggedIn()) {
            if ($location.path() == '/userOTP') {
                $state.go('userHome');
            } else if ($location.path() == '/teamHomePage') {
                //TODO : 2 cases to handle, #1 if the user is not logged in , then redirect to login page
                //if logged in but not supervisor, redirect to user  home page
                $state.go('signin');
            } else {
                $state.go('signin');
            }
        } else if (($location.path().indexOf('/teamHomePage') > -1) && authenticationService.isLoggedIn()) {} else if (($location.path().indexOf('/plannedLeavesPage') > -1) && authenticationService.isLoggedIn()) {} else if (($location.path().indexOf('/teamHomePage') > -1) && !authenticationService.isLoggedIn()) {
            $state.go('signin');
        } else if (_(routesThatRequireAuth).contains($location.path()) && authenticationService.isLoggedIn()) {
            if (sessionService.get('role') == 'ROLE_USER') {
                if ($location.path().indexOf('/teamHomePage') > -1) {
                    $state.go("teamHomePage");
                } else if ($location.path().indexOf('/plannedLeavesPage') > -1) {
                    $state.go("plannedLeavesPage");
                } else {
                    if (sessionService.get('displayCheckInTab') == "true" && sessionService.get('isCheckInFromWeb') == "true") {
                        $state.go("userCheckInOut");
                    } else {
                        $state.go("signin");
                        sessionService.unset('token');
                    }
                }
            } else if (sessionService.get('role') == 'ROLE_ADMIN') {
                $state.go('adminHome');
            } else if (sessionService.get('role') == 'ROLE_MANAGER') {
                $state.go('managerHome');
            }
        } else if (authenticationService.isLoggedIn()) {
            if (sessionService.get('displayCheckInTab') == "true") {
                $state.go("userCheckInOut");
            }
        } else {
            $anchorScroll();
        }
    });

    $rootScope.forceSSL = function() {
        if ($location.absUrl().indexOf("localhost") > -1) {
            $log.debug("development server, not redirecting to https")
        } else {
            if ($location.protocol() !== 'https') {
                $window.location.href = $location.absUrl().replace('http', 'https');
            }
        }
    };
    $rootScope.forceSSL();

    $rootScope.isLoggedOut = function() {
        return !authenticationService.isLoggedIn();
    };
}]);
*/