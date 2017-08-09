/**
 * @ngdoc function
 * @name fmsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fmsApp
 */
app.controller("MainCtrl", ['$scope', 'sessionService', '$state', '$rootScope', 'AuthenticationService', function($scope, sessionService, $state, $rootScope, AuthenticationService) {
    //    $scope.menuItems = ['Home', 'Calculators', 'Goal Based Advice', 'Contact Us'];



    //to get token
    //    $scope.isLoggedIn = false;
	$scope.isLoggedIn = sessionService.get('isLoggedIn');
	$scope.loginName = sessionService.get('firstName') + " " + sessionService.get('lastName');
    $scope.showColor = false;
    $scope.showUser = false;
    /*$rootScope.previousState;
    $rootScope.currentState;*/

  


    function init() {
        var token = sessionService.get('token');
        if (token && token !== '' && token !== null && token !== 'null') {
            $scope.isLoggedIn = true;
        }
        var name = sessionService.get('name');
        if (name && name !== '' && name !== null && name !== 'null') {
            $scope.loginName = name;
        }
    }
    init();

    $rootScope.$on("showMainMenu", function() {
        //        $scope.parentmethod();
        $scope.isLoggedIn = sessionService.get('isLoggedIn');
        $scope.loginName = sessionService.get('firstName') + " " + sessionService.get('lastName');
    });
	  console.log("In Main Controller", $scope.loginName);


    $scope.menuItems = [{
        'path': 'app.welcome',
        'name': 'Home'
    }, {
        'path': 'app.superCalculator',
        'name': 'Calculators'
    }, {
        'path': 'app.goalBasedAdvice',
        'name': 'Goal Based Advice'
    }, {
        'path': 'app.contact',
        'name': 'Contact Us'
    }];
    $scope.selected = 0;

    $scope.select = function(index) {
        $scope.selected = index;
    };

    /* $scope.logout = function() {
         sessionService.unsetAll();
         $scope.isLoggedIn = false;
         $state.go('login');
     }*/
    $scope.logoutUser = function() {

        $scope.logoutData = {
            mobile: sessionService.get('mobile')
        }
        AuthenticationService.logout($scope.logoutData).then(function(response) {
            if (!response.data.error) {
                console.log("error", response);
                sessionService.unsetAll();
                $scope.isLoggedIn = false;
                sessionService.get('role') === "ADMINISTRATOR" ? $state.go('adminLogin') : $state.go('login');

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

    $scope.fontchange = function() {

        $scope.showColor = !$scope.showColor;
        $scope.showUser = !$scope.showUser;
    }


}]);