app.controller("AppCtrl", ['$scope', 'sessionService', '$state', '$rootScope', 'AuthenticationService', 'UserService', 'toastr', function($scope, sessionService, $state, $rootScope, AuthenticationService, UserService, toastr) {
	


   
    /* Verify Authorization Token */
    $scope.verifyAuth = function() {
        AuthenticationService.verifyAuth().then(function(response) {
            if (!response.data.error) {
                UserService.getMe().then(function(getMeObj) {
					AuthenticationService.cacheSession(getMeObj)
					$rootScope.username = getMeObj.data.response.firstName +" "+ getMeObj.data.response.lastName;
                    $rootScope.isLoggedIn = true;
                }).catch(function(errResponse) {
                    if (errResponse.error) {
                        toastr.error(errResponse.message, 'Error');
                    }
                });
            } else {
                toastr.error(response.data.message, 'Error');
                sessionService.get('role') === "ADMINISTRATOR" ? $state.go('adminLogin') : $state.go('login');
            }
        }).catch(function(errResponse) {
            console.log("error auth", errResponse);
            if (errResponse.error) {
                toastr.error(errResponse.message, 'Error');
            }
        });

    };


    $scope.init = function() {
        sessionService.get('auth_token') && $scope.verifyAuth();
    }

}]);