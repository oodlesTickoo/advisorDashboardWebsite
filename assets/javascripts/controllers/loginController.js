app.controller("LoginController", ['$scope', 'AuthenticationService', function($scope, AuthenticationService) {
    'use strict';

    $scope.user = {};


    $scope.USER_ROLE = {
        ADVISOR: "ADVISOR",
        CLIENT: "CLIENT",
        ADMIN: "ADMINISTRATOR"
    };

    $scope.login = function(type) {
        //vm.dataLoading = true;
        console.log("user: ", $scope.user);
        $scope.user.type = type;
        console.log("user.type: ", $scope.user.type);
        AuthenticationService.login($scope.user).then(function(response) {
            console.log('response: ', response);
        }).catch(function(error){
            console.log("error",error);
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
