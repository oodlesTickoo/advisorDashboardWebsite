app.controller("AdminLoginController", ['$scope', 'AuthenticationService', 'sessionService', '$state', '$rootScope', 'toastr', 'UserService', function($scope, AuthenticationService, sessionService, $state, $rootScope, toastr, UserService) {
    'use strict';

	$scope.showMenuMethod = function() {
        $rootScope.$emit("showMainMenu", {});
    }


    $scope.adminLogin = function(adminCredentials) {
        console.log("adminLogin: ", adminCredentials);
        $scope.adminLoginData = {
            email: adminCredentials.email,
            password: adminCredentials.password
        }
        console.log("adminLoginData: ", $scope.adminLoginData);
        AuthenticationService.adminLogin($scope.adminLoginData).then(function(response) {
            //$ionicLoading.hide();
            if (!response.data.error) {
				sessionService.set("auth_token",response.data.response.auth_token);
                UserService.getMe().then(function(getMeObj) {
                    console.log("otp response", getMeObj);
                    sessionService.set('isLoggedIn', true);
                    AuthenticationService.cacheSession(getMeObj);
                    $scope.showMenuMethod();
                    $state.go('app.welcome');
                }).catch(function(errResponse) {
                    //$ionicLoading.hide();
                    if (errResponse.error) {
                        toastr.error(errResponse.message, 'Error');
                    }
                });
            } else {
                toastr.error(response.data.message, 'Error');
            }
        }).catch(function(errResponse) {
            //$ionicLoading.hide();
            console.log("erorororororororro", errResponse);
            if (errResponse.error) {
                toastr.error(errResponse.message, 'Error');
            }
        });
    }


    /* $scope.signUpClient = function(data) {
         console.log("Login: ", data);
         data = {
             firstName: "Russell",
             lastName: "Medcraft",
             mail: "russellmedcraft@gmail.com",
             phone: 9988776655,
             type: "ADMINISTRATOR"
         };
         AuthenticationService.login(data).then(function(response) {
             if (response && response.status !== 200) {
                 toastr.error('Please fill up all the required fields!', 'Error');
                 return;
             }
             if (response && response.data && response.data.response) {
                 console.log("client:response.data.response", response.data.response.me.CUSTOMFIELDS);
                 var customFieldObj1 = {};
                 for (let i = 0; i < response.data.response.me.CUSTOMFIELDS.length; i++) {
                     customFieldObj1[response.data.response.me.CUSTOMFIELDS[i].CUSTOM_FIELD_ID] = response.data.response.me.CUSTOMFIELDS[i].FIELD_VALUE;
                 }
             }
             console.log("client:customFieldObj1:", customFieldObj1);
             sessionService.set("latestObj", JSON.stringify(customFieldObj1));
             $rootScope.latestObj = customFieldObj1;
             AuthenticationService.cacheSession(response);
             $scope.isLoggedIn = true;
             $state.go('app.welcome');

         }).catch(function(error) {
             console.log("error", error);
             toastr.error('Internal Server Error', 'Error');
         });
     };*/

    /*$scope.advisorLoginWithOtp = function() {
        $scope.advisorOtp = true;
        $scope.advisorLogin = false;

    }

    $scope.clientLoginWithOtp = function() {
        $scope.clientOtp = true;
        $scope.clientLogin = false;

    }*/

    function callAuthService() {
        AuthenticationService.login(data).then(function(response) {
            return response;
        }).catch(function(error) {
            console.log("error", error);
            toastr.error('Internal Server Error', 'Error');
            return error;
        });
    }

    function openWelcomePage(role) {

    }

}]);


/*function SaveToDisk(fileURL, fileName) {
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.href = fileURL;
        link.target='_blank';
        link.click();
        $rootScope.isLoading = false;
        $timeout(0);
    }*/