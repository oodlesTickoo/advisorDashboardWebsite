(function() {
    'use strict';

    app.factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['sessionService', '$http', '$timeout', 'toastr', '$rootScope'];

    function AuthenticationService(sessionService, $http, $timeout, toastr, $rootScope) {

        var uncacheSession = function() {
            //sessionService.unsetAll();
        };

        return {
            register: function(registerCredentials) {
                console.log("registerCredentials: ", registerCredentials);

                var req = {
                    method: 'POST',
                    url: '/api/v1/register',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: registerCredentials
                };

                console.log("req", req);

                return $http(req);
            },
            login: function(loginCredentials) {
                console.log("credentials: ", loginCredentials);

                var req = {
                    method: 'POST',
                    url: '/api/v1/login',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: loginCredentials
                };

                console.log("req", req);

                return $http(req);
            },
			verifyAuth: function() {
                var req = {
                    method: 'POST',
                    url: '/api/v1/verifyAuth',
                    headers: {
                        'Content-Type': 'application/json',
						'Authorization': sessionService.get('auth_token')
                    },
                    data: {}
                };
                return $http(req);
            },
            submitOtp: function(otpKey) {
                console.log("otpKey: ", otpKey);

                var req = {
                    method: 'POST',
                    url: '/api/v1/verify',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: otpKey
                };

                console.log("req", req);

                return $http(req);
            },
            resendOtp: function(mobile) {
                console.log("resendOtp: ", mobile);

                var req = {
                    method: 'POST',
                    url: '/api/v1/resend',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: mobile
                };

                console.log("req", req);

                return $http(req);
            },
            adminLogin: function(data) {
                console.log("adminLogin: ", data);

                var req = {
                    method: 'POST',
                    url: '/api/v1/adminLogin',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };

                console.log("req", req);

                return $http(req);
            },
            logout: function(mobile) {
                console.log("logout: ", mobile);

                var req = {
                    method: 'POST',
                    url: '/api/v1/logout',
                    headers: {
                        'Content-Type': 'application/json',
						'Authorization': sessionService.get('auth_token')
                    },
                    data: mobile
                };

                console.log("req", req);

                return $http(req);
            },
            isLoggedIn: function() {
                return sessionService.get('token');
            },
            cacheSession: function(response) {
                var result = response.data.response;
                sessionService.set('mobile', result.mobile);
                sessionService.set('role', result.role);
                sessionService.set('_id', result._id);
                sessionService.set('firstName', result.firstName);
                sessionService.set('lastName', result.lastName);
                sessionService.set('email', result.email);
                sessionService.set('isLoggedIn', true);
            }
        };

    }


})();