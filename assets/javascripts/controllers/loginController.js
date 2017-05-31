app.controller("LoginController", ['$scope', 'AuthenticationService', '$state', function($scope, AuthenticationService, $state) {
    'use strict';

    const USER_ROLE = {
        ADVISOR: "ADVISOR",
        CLIENT: "CLIENT",
        ADMIN: "ADMINISTRATOR"
    };

    
    $scope.advisor = {};
    $scope.advisor.type = USER_ROLE.ADVISOR;
    $scope.client = {};
    $scope.client.type = USER_ROLE.CLIENT;


    $scope.login = function(data) {
        console.log("Login: ",data);
        AuthenticationService.login(data).then(function(response) {
            if(response && response.status !== 200){
                return;
            }
            if(response && response.data && response.data.response){
                console.log(response);
                $state.go('app.welcome');
            } else{

            }
        }).catch(function(error) {
            console.log("error", error);
        });
    };

    function openWelcomePage(role){

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
