app.controller("LoginController", ['$scope', 'AuthenticationService', function($scope, AuthenticationService) {
         'use strict';

         $scope.user={};

         $scope.login=function(type) {
             //vm.dataLoading = true;
          	console.log("user: ",$scope.user);
             $scope.user.type=type;
             AuthenticationService.Login($scope.user, function(response) {
             	console.log('response: ',response);
                 if (response.success) {
                     
                 } else {
    
                     //vm.dataLoading = false;
                 }
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