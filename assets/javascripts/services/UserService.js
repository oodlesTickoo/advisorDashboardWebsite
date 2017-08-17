(function() {
    'use strict';

    app.factory('UserService', UserService);

    UserService.$inject = ['sessionService', '$http', '$timeout','Upload','AuthenticationService'];

    function UserService(sessionService, $http, $timeout, Upload,AuthenticationService) {

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
                    data: {
                        'clientId': clientId,
                        'advisorId': advisorId
                    }
                };
                return $http(req);
            },

            advisorsClientList: function(advisorId) {
                var req = {
                    method: 'GET',
                    url: '/api/v1/user/' + advisorId + '/clients',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('auth_token')
                    },
                    data: {}
                };
                return $http(req);
            },
            getMe: function() {
                var req = {
                    method: 'GET',
                    url: '/api/v1/me',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('auth_token')
                    },
                    data: {}
                };
                return $http(req);
            },
            downloadPdf: function(clientId, data) {
                var req = {
                    method: 'GET',
                    url: '/api/v1/user/' + clientId + '/file/pdf',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('auth_token')
                    },
                    data: {
						'data': data
					}
                };
                return $http(req);
            },

            uploadFile: function(file, clientId) {
				console.log(file, clientId)
                return Upload.upload({
                    url: '/api/v1/user/'+ clientId +'/upload/doc',
					 headers: {
                        'Authorization': sessionService.get('auth_token')
                    },
                    data: {
						file: file
                    }
                });
            },
			downloadDoc: function(clientId) {
                var req = {
                    method: 'GET',
                    url: '/api/v1/user/' + clientId + '/file/doc',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('auth_token')
                    },
                    data: {}
                };
                return $http(req);
            },
			getFactFindData : function() {
                var req = {
                    method: 'GET',
                    url: '/api/v1/calculator/factfind',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('auth_token')
                    },
                    data: {}
                };
                return $http(req);
            },
			saveFactFindDataGetPdf : function(factFindData) {
                var req = {
                    method: 'POST',
                    url: '/api/v1/calculator/factfind',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('auth_token')
                    },
                    data: factFindData/*{
						'factFindData': factFindData
					}*/
                };
                return $http(req);
            },
			saveFactFindData : function(factFindData) {
                var req = {
                    method: 'POST',
                    url: "/api/v1/calculator/saveFactfind",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionService.get('auth_token')
                    },
                    data: factFindData/*{
						'factFindData': factFindData
					}*/
                };
                return $http(req);
            },
        };
    }


})();