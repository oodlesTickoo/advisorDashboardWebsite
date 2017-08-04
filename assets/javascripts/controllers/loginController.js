app.controller("LoginController", ['$scope', 'AuthenticationService', 'sessionService', '$state', '$rootScope', 'toastr', function($scope, AuthenticationService, sessionService, $state, $rootScope, toastr) {
    'use strict';

    var USER_ROLE = {
        ADVISOR: "ADVISOR",
        CLIENT: "CLIENT",
        ADMIN: "ADMINISTRATOR"
    };


    $scope.advisor = {};
    $scope.advisor.role = USER_ROLE.ADVISOR;
    $scope.isFinancialAdvisor = false;
    $scope.client = {};
    $scope.client.role = USER_ROLE.CLIENT;
    $rootScope.isLoggedIn = false;
    $scope.advisorSignUp = false;
    $scope.advisorLogin = true;
    $scope.advisorOtp = false;

    $scope.clientSignUp = false;
    $scope.clientLogin = true;
    $scope.clientOtp = false;


    // to login financial Advisor or Client
    $scope.loginUser = function(user, validForm) {
        console.log("in login user fnctn : ", user, validForm);

        $scope.loginData = {
            mobile: 919999999999 //user.mobile
        }
        console.log("login data : ", $scope.loginData);
        AuthenticationService.login($scope.loginData).then(function(response) {
            //$ionicLoading.hide();
            if (!response.data.error) {
                console.log("error", response);
                $scope.otpId = response.data.response.id;
                $scope.enteredMobile = response.data.response.mobile;
                console.log("$scope.otpId :", $scope.otpId, $scope.enteredMobile);
                if (user.role == "ADVISOR") {
                    $scope.advisorOtp = true;
                    $scope.advisorLogin = false;
                } else {
                    $scope.clientOtp = true;
                    $scope.clientLogin = false;
                }
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


    $scope.submitOtp = function(user, validForm) {
        console.log("submitOtp", user, validForm);
        $scope.otpData = {
            otp: user.otp,
            id: $scope.otpId
        }
        console.log("otp data : ", $scope.otpData);
        AuthenticationService.submitOtp($scope.otpData).then(function(response) {
            //			AuthenticationService.cacheSession(response);
            if (!response.data.error) {
                console.log("otp response", response);
                AuthenticationService.cacheSession(response);
				$state.go('app.welcome');

            } else {
                toastr.error(response.data.message, 'Error');
            }

        }).catch(function(errResponse) {
            //$ionicLoading.hide();
            if (errResponse.error) {
                toastr.error(errResponse.message, 'Error');
            }
        });

    }


    $scope.registerUser = function(user, validForm) {

        console.log("signUpAdvisor: ", user, validForm);

        console.log("registerUser data : ", user);
        AuthenticationService.register(user).then(function(response) {
            //$ionicLoading.hide();
            if (!response.data.error) {
                console.log("repsonseeeeee", response);
                $scope.otpId = response.data.response.id;
                $scope.enteredMobile = response.data.response.mobile;
                console.log("$scope.otpId :", $scope.otpId, $scope.enteredMobile);
                if (user.role == "ADVISOR") {
                    $scope.advisorOtp = true;
                    $scope.advisorLogin = false;
                    $scope.advisorSignUp = false;
                } else {
                    $scope.clientOtp = true;
                    $scope.clientLogin = false;
                    $scope.clientSignUp = false;
                }
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

    };

    $scope.resendOtp = function() {
        console.log("resendOtp: ", $scope.enteredMobile);
        $scope.resendData = {
            mobile: $scope.enteredMobile
        }
        AuthenticationService.resendOtp($scope.resendData).then(function(response) {
            //$ionicLoading.hide();
            if (!response.data.error) {
                console.log("repsonseeeeee", response);
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
	
	$scope.adminLogin = function(adminCredentials) {
        console.log("adminLogin: ", adminCredentials);
        $scope.adminLoginData = {
            email: adminCredentials.email,
			passsword: adminCredentials.password
        }
		console.log("adminLoginData: ", $scope.adminLoginData);
        /*AuthenticationService.resendOtp($scope.adminLoginData).then(function(response) {
            //$ionicLoading.hide();
            if (!response.data.error) {
                console.log("repsonseeeeee", response);
            } else {
                toastr.error(response.data.message, 'Error');
            }
        }).catch(function(errResponse) {
            //$ionicLoading.hide();
            console.log("erorororororororro", errResponse);
            if (errResponse.error) {
                toastr.error(errResponse.message, 'Error');
            }
        });*/
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
             $rootScope.isLoggedIn = true;
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