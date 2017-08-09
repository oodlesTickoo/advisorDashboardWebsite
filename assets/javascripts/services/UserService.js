(function() {
    'use strict';

    app.factory('UserService', UserService);

    UserService.$inject = ['sessionService','$http', '$timeout'];

    function UserService(sessionService,$http, $timeout) {

        return {
			/*After Administrator Login*/
			  masterClientList: function() {
                var req = {
                    method: 'GET',
                    url: '/api/v1/clients',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('auth_token')
                    }
                };
                return $http(req);
            },
			
			masterAdvisorList: function() {
                var req = {
                    method: 'GET',
                    url: '/api/v1/advisors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('auth_token')
                    }
                };
				console.log("1111");
                return $http(req);
            }, 
			/****/
			
			linkClientToAdvisor: function(clientId, advisorId) {
                var req = {
                    method: 'POST',
                    url: '/api/v1/client/link_advisor',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('auth_token')
                    },
                    data: { 'clientId':clientId, 'advisorId':advisorId}
                };
                return $http(req);
            },
			
			clientList: function(clientId) {
                var req = {
                    method: 'GET',
                    url: '/api/v1/user/'+ clientId +'/clients',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('auth_token')
                    },
                    data: {}
                };
                return $http(req);
            },
			/*uploadDocFile: function(clientId) {
                var req = {
                    method: 'POST',
                    url: '/api/v1/user/'+ clientId +'/upload',
					transformRequest: angular.identity,
                    headers: {
                        'Content-Type': undefined,
                        'Authorization': sessionService.get('token')
                    },
                    data: {}
                };
                return $http(req);
            },
			*/
			
			
			/*var uploadUrl = '/api/v1/upload?contact_id=' + $attrs.id;
                        $http.post(uploadUrl, fd, {
                            transformRequest: angular.identity,
                            headers: {
                                'Content-Type': undefined
                            }*/
			
			clientList: function(clientId) {
                var req = {
                    method: 'GET',
                    url: '/api/v1/user/'+ clientId +'/clients',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('token')
                    },
                    data: {}
                };
                return $http(req);
            },
			
			/*router.get('/api/v1/user/:userId/file/:fileType', configurationHolder.security.authority(Constants.ROUTE_ACCESS_ROLE.CLIENT), CalculatorController.getUserFile);
    router.post('/api/v1/user/:userId/upload', configurationHolder.security.authority(Constants.ROUTE_ACCESS_ROLE.ADVISOR), CalculatorController.upload);*/
			
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
            },
            checkFile: function(contact_id) {
                var req = {
                    method: 'GET',
                    url: '/api/v1/checkfile?contact_id='+contact_id+'&file_format=pdf',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('token')
                    }
                };
                return $http(req);
            }
        };
    }


})();
