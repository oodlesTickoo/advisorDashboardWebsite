(function() {
    'use strict';

    app.factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['sessionService', '$http', '$timeout', 'toastr', '$rootScope'];

    function AuthenticationService(sessionService, $http, $timeout, toastr, $rootScope) {

        var uncacheSession = function() {
            //sessionService.unsetAll();
        };

        function formTemplate(user) {
            if (user.advisorID === undefined) {
                return {
                    "FIRST_NAME": user.firstName,
                    "LAST_NAME": user.lastName,

                    "CONTACTINFOS": [{
                        "TYPE": "PHONE",
                        "DETAIL": user.phone
                    }, {
                        "TYPE": "EMAIL",
                        "DETAIL": user.mail
                    }],
                    "CUSTOMFIELDS": [{
                        "CUSTOM_FIELD_ID": "CONTACT_FIELD_150",
                        "FIELD_VALUE": user.type
                    }]
                };
            } else {
                return {
                    "FIRST_NAME": user.firstName,
                    "LAST_NAME": user.lastName,

                    "CONTACTINFOS": [{
                        "TYPE": "PHONE",
                        "DETAIL": user.phone
                    }, {
                        "TYPE": "EMAIL",
                        "DETAIL": user.mail
                    }],
                    "CUSTOMFIELDS": [{
                        "CUSTOM_FIELD_ID": "CONTACT_FIELD_150",
                        "FIELD_VALUE": user.type
                    }, {
                        "CUSTOM_FIELD_ID": "CONTACT_FIELD_151",
                        "FIELD_VALUE": user.advisorID
                    }]
                };
            }

        }

        return {

            login: function(credentials) {
                console.log("credentials", credentials);
                console.log("form", formTemplate(credentials));
                
                var req = {
                    method: 'POST',
                    url: '/api/v1/login',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: formTemplate(credentials)
                };

                 console.log("req", req);

                /* Use this for real authentication*/
                //return $http(req);

                var login = $http(req);
                console.log("login11:", login);

                return login;
            },
            isLoggedIn: function() {
                return sessionService.get('token');
            },
            cacheSession: function(response) {
                var result = response.data.response.me;
                $rootScope.loginName = result.FIRST_NAME + ' ' + result.LAST_NAME;
                sessionService.set('name', result.FIRST_NAME + ' ' + result.LAST_NAME);
                sessionService.set('email', result.CONTACTINFOS[1].DETAIL);
                sessionService.set('mobile', result.CONTACTINFOS[0].DETAIL);
                sessionService.set('role', response.data.response.role);
                sessionService.set('token', response.data.response.token);
                sessionService.set('contact', result.CONTACT_ID);


            }
        };

    }


})();
