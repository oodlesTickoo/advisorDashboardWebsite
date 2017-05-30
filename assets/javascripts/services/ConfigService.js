/*$provide.factory('sessionInjector',['sessionService','toastr', function(sessionService) {
    return {

        'request': function(config) {
            if (!SessionService.isAnonymus) {
                config.headers.Authorization= SessionService.token;
            }
            return config;
        },

        'response': function(response) {
            // do something on success
            return response;
        },

        'responseError': function(rejection) {
            // do something on error
            if (canRecover(rejection)) {
                return responseOrNewPromise;
            }
            return $q.reject(rejection);
        }
    };
}]);

$httpProvider.interceptors.push('myHttpInterceptor');
*/