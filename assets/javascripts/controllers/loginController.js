app.controller("LoginController", ['$scope', 'AuthenticationService', 'sessionService', '$state', '$rootScope', 'toastr', function($scope, AuthenticationService, sessionService, $state, $rootScope, toastr) {
    'use strict';

    var USER_ROLE = {
        ADVISOR: "ADVISOR",
        CLIENT: "CLIENT",
        ADMIN: "ADMINISTRATOR"
    };


    $scope.advisor = {};
    $scope.advisor.type = USER_ROLE.ADVISOR;
    $scope.isFinancialAdvisor=false;
    $scope.client = {};
    $scope.client.type = USER_ROLE.CLIENT;
    $rootScope.isLoggedIn = false;

    $scope.loginAdvisor = function(advisor, client) {
        //console.log("Login: ", data);
        if ($scope.isFinancialAdvisor) {
            AuthenticationService.login(advisor).then(function(response) {
                if (response && response.status !== 200) {
                    toastr.error('Login not successful, please try again!', 'Error');
                    return;
                }
                if (response && response.data && response.data.response) {
                    client["advisorID"]=response.data.response.me.CONTACT_ID;
                    client["type"]=USER_ROLE.CLIENT;
                    console.log("clientobject",client)
                    AuthenticationService.login(client).then(function(response) {
                        var customFieldObj1 = {};
                        for (let i = 0; i < response.data.response.me.CUSTOMFIELDS.length; i++) {
                            customFieldObj1[response.data.response.me.CUSTOMFIELDS[i].CUSTOM_FIELD_ID] = response.data.response.me.CUSTOMFIELDS[i].FIELD_VALUE;
                        }
                        sessionService.set("latestObj", JSON.stringify(customFieldObj1));
                        $rootScope.latestObj = customFieldObj1;
                        AuthenticationService.cacheSession(response);
                        $rootScope.isLoggedIn = true;
                        $state.go('app.welcome');
                    });
                }
            }).catch(function(error) {
                console.log("error", error);
                toastr.error('Internal Server Error', 'Error');
                return error;
            });

        } else {
            AuthenticationService.login(advisor).then(function(response) {
                if (response && response.status !== 200) {
                    toastr.error('Login not successful, please try again!', 'Error');
                    return;
                }
                if (response && response.data && response.data.response) {
                    AuthenticationService.cacheSession(response);
                    $rootScope.isLoggedIn = true;
                    $state.go('app.welcome');
                }
            }).catch(function(error) {
                console.log("error", error);
                toastr.error('Internal Server Error', 'Error');
            });
        }

    };


    $scope.loginClient = function(data) {
        console.log("Login: ", data);
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
                console.log("client:customFieldObj1:", customFieldObj1);
                sessionService.set("latestObj", JSON.stringify(customFieldObj1));
                $rootScope.latestObj = customFieldObj1;
                AuthenticationService.cacheSession(response);
                $rootScope.isLoggedIn = true;
                $state.go('app.welcome');
            }
        }).catch(function(error) {
            console.log("error", error);
            toastr.error('Internal Server Error', 'Error');
        });
    };

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
