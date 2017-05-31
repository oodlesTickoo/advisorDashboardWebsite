(function() {
    'use strict';

    app.factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['sessionService','$http', '$timeout', 'toastr'];

    function AuthenticationService(sessionService,$http, $timeout, toastr) {

        var cacheSession = function(response) {
            var result = response.data.response.me;
            //   sessionService.set('token', result.token);
             sessionService.set('firstName', result.FIRST_NAME);
             sessionService.set('lastName', result.LAST_NAME);
             sessionService.set('email', result.CONTACTINFOS[1].DETAIL);
             sessionService.set('mobile', result.CONTACTINFOS[0].DETAIL);
             sessionService.set('role', response.data.response.role);
            console.log("sessionService.name:", sessionService.get('firstName'));


        };

        var uncacheSession = function() {
            //sessionService.unsetAll();
        };

        function formTemplate(user) {
            return {
                "FIRST_NAME": user.name,
                "LAST_NAME": "d",

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
            logout: function() {
                uncacheSession();
                return logout;
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
