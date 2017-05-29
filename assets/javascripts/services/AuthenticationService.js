(function() {
    'use strict';

    app.factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$http', '$timeout','toastr'];

    function AuthenticationService($http, $timeout, toastr) {

        var service = {};
        service.Login = Login;
        return service;

        function formTemplate(user) {
            return {
                "FIRST_NAME": user.name,
                
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

        function Login(user) {
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

            /* Use this for real authentication*/
            return $http(req);
        }

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

    }


})();
