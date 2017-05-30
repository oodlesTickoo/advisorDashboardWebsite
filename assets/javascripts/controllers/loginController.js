app.controller("LoginController", ['$scope', 'AuthenticationService', function($scope, AuthenticationService) {
    'use strict';

    $scope.user = {};


    $scope.USER_ROLE = {
        ADVISOR: "ADVISOR",
        CLIENT: "CLIENT",
        ADMIN: "ADMINISTRATOR"
    };

    $scope.advisorLogin = function() {
        console.log("advisor: ", $scope.advisor);
        $scope.advisor.type = $scope.USER_ROLE.ADVISOR;
        console.log("advisor.type: ", $scope.advisor.type);
        AuthenticationService.login($scope.advisor).then(function(response) {
            console.log('response: ', response);
        }).catch(function(error) {
            console.log("error", error);
        });
    };
    $scope.clientLogin = function() {
        console.log("client: ", $scope.client);
        $scope.client.type = $scope.USER_ROLE.CLIENT;
        console.log("client.type: ", $scope.client.type);
        AuthenticationService.login($scope.client).then(function(response) {
            console.log('response: ', response);
        }).catch(function(error) {
            console.log("error", error);
        });
    };

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
