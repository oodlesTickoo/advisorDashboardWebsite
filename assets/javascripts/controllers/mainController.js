app.controller("MainCtrl", ['$scope', 'sessionService', '$state', '$rootScope', 'AuthenticationService', 'UserService', 'toastr', function($scope, sessionService, $state, $rootScope, AuthenticationService, UserService, toastr) {

    /* Logout User */
    $scope.logoutUser = function() {
        $scope.logoutData = {
            mobile: sessionService.get('mobile')
        }
        AuthenticationService.logout($scope.logoutData).then(function(response) {
            if (!response.data.error) {
                sessionService.unsetAll();
                $rootScope.isLoggedIn = false;
                sessionService.get('role') === "ADMINISTRATOR" ? $state.go('adminLogin') : $state.go('login');
            } else {
                toastr.error(response.data.message, 'Error');
            }
        }).catch(function(errResponse) {
            if (errResponse.error) {
                toastr.error(errResponse.message, 'Error');
            }
        });

    };



    $scope.selected = 0;

    $scope.select = function(index) {
        $scope.selected = index;
    };
}]);