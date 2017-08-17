app.controller("LoginController", ['$scope', 'AuthenticationService', 'sessionService', '$state', '$rootScope', 'toastr', 'UserService', function($scope, AuthenticationService, sessionService, $state, $rootScope, toastr, UserService) {
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
    $scope.isLoggedIn = false;
    $scope.advisorSignUp = false;
    $scope.advisorLogin = true;
    $scope.advisorOtp = false;

    $scope.clientSignUp = false;
    $scope.clientLogin = true;
    $scope.clientOtp = false;

    // to login financial Advisor or Client
    $scope.loginUser = function(user, validForm) {
        $scope.loginData = {
            mobile: user.mobile
        }
        AuthenticationService.login($scope.loginData).then(function(response) {
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
            if (!response.data.error) {
                sessionService.set("auth_token", response.data.response.auth_token);
            } else {
                toastr.error(response.data.message, 'Error');
            }
        }).catch(function(errResponse) {
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