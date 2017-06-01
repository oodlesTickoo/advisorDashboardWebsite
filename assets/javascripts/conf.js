app.config(function ($httpProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.interceptors.push(function ($injector, $q,sessionService,$timeout) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                var authToken = sessionService.get('token');
                var token = authToken != null?authToken:null;
                if(token){
                    config.headers.Authorization = token;
                }
                return config;
            },
            requestError: function (rejection) {
                    return $q.reject(rejection);
            },
            responseError: function (rejection) {
                
                return rejection;
            },
            response: function(response){
             
              return response
            }
        };
    });
});