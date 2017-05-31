(function() {
    'use strict';

    app.factory('UserService', UserService);

    UserService.$inject = ['sessionService','$http', '$timeout', 'toastr'];

    function UserService(sessionService,$http, $timeout, toastr) {

        return {

            homePageData: function() {
                var req = {
                    method: 'GET',
                    url: '/api/v1/home_data',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('token')
                    }
                };
                return $http(req);
            },
            linkClientToAdvisor: function(clientId, advisorId) {
                var req = {
                    method: 'PUT',
                    url: '/api/v1/client/link_advisor',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('token')
                    },
                    data: { 'client_id':clientId, 'advisor_id':advisorId}
                };
                return $http(req);
            }
        };
    }


})();
