(function() {
    'use strict';

    app.factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$http', '$timeout'];

    function AuthenticationService($http, $timeout) {

        var service = {};
        service.Login = Login;
        return service;

        function formTemplate(user) {
            return {
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
            };
        }

        function Login(user) {
            var req = {
                method: 'POST',
                url: 'http://localhost:3000/api/v1/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: formTemplate(user)
            };

            /* Use this for real authentication*/
            return $http(req).then(handleSuccess, handleError('Error creating user'));
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function() {
                return { success: false, message: error };
            };
        }

    }


})();
