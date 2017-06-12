/**
 * @ngdoc function
 * @name fmsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fmsApp
 */
app.controller("MainCtrl", ['$scope', 'sessionService', '$state','$rootScope', function($scope, sessionService, $state, $rootScope) {
    //    $scope.menuItems = ['Home', 'Calculators', 'Goal Based Advice', 'Contact Us'];
	
	//to get token
	$rootScope.isLoggedIn = false;
	$rootScope.loginName = '';
    $scope.showColor = false;
    $scope.showUser = false;
	
	
	function init(){
		var token = sessionService.get('token');
		if(token && token !== '' && token !== null && token !== 'null'){
			$rootScope.isLoggedIn = true;
		}
		var name = sessionService.get('name');
		if(name && name !== '' && name !== null && name !== 'null'){
			$rootScope.loginName = name;
		}
	}
	init();
	
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

    $scope.logout = function(){
    	sessionService.unsetAll();
    	$rootScope.isLoggedIn = false;
    	$state.go('login');
    }
    
    $scope.fontchange = function(){
      
        $scope.showColor = !$scope.showColor;
        $scope.showUser = !$scope.showUser;
    }
    
    
}]);