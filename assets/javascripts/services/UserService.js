(function() {
    'use strict';

    app.factory('UserService', UserService);

    UserService.$inject = ['sessionService','$http', '$timeout'];

    function UserService(sessionService,$http, $timeout) {

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
            },
            download: function(id, format) {
                var req = {
                    method: 'GET',
                    url: '/api/v1/file?contact_id='+id+'&file_format='+format,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('token')
                    }
                };
                return $http(req);
            },
            isFileExist: function(format) {
                var req = {
                    method: 'GET',
                    url: '/api/v1/is_file_exist?format='+format,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('token')
                    }
                };
                return $http(req);
            },
            customFieldsUpdate: function(data) {
                var req = {
                    method: 'PUT',
                    url: '/api/v1/custom_field',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('token')
                    },
                    data: data
                };
                return $http(req);
            },
            generatePdf: function(data) {

                var req = {
                    method: 'POST',
                    url: '/api/v1/pdf',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('token')
                    },
                    data: data
                };
                return $http(req);
            }
        };
    }


})();
