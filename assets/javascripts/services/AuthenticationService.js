(function() {
    'use strict';

    app.factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['sessionService','$http', '$timeout', 'toastr', '$rootScope'];

    function AuthenticationService(sessionService,$http, $timeout, toastr, $rootScope) {

        var cacheSession = function(response) {
            var result = response.data.response.me;
            $rootScope.loginName = result.FIRST_NAME + ' ' + result.LAST_NAME;
             sessionService.set('name', result.FIRST_NAME + ' ' + result.LAST_NAME);
             sessionService.set('email', result.CONTACTINFOS[1].DETAIL);
             sessionService.set('mobile', result.CONTACTINFOS[0].DETAIL);
             sessionService.set('role', response.data.response.role);
             sessionService.set('token', response.data.response.token);
             sessionService.set('contact', result.CONTACT_ID);


        };

        var uncacheSession = function() {
            //sessionService.unsetAll();
        };

        function formTemplate(user) {
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
        }

        return {

            login: function(credentials) {
                var req = {
                    method: 'POST',
                    url: '/api/v1/login',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: formTemplate(credentials)
                };

                console.log("form", formTemplate(credentials));
                console.log("req", req);

                /* Use this for real authentication*/
                //return $http(req);

                var login = $http(req);
                console.log("login11:",login );
                login.then(cacheSession);
                return login;
            },
            isLoggedIn: function() {
                return sessionService.get('token');
            }
        };

    }


})();




/*var service = {};
        service.Login = Login;
        return service;*/



/*{
        "FIRST_NAME": user.name,
        "LAST_NAME": "",
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
    };*/

/*{
    "firstName": user.name,
    "email": user.mail,
    "mobile": user.phone
};*/

/*function Login(user) {
    var req = {
        method: 'POST',
        url: '/api/v1/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: formTemplate(user)
    };

    console.log("form",formTemplate(user));
    console.log("req",req);

    
    return $http(req);
}*/

// private functions

/*function handleSuccess(response) {
    console.log("response:",response.data);
    return response.data;
}

function handleError(error) {
    return function() {
        return { success: false, message: error };
    };
}*/
