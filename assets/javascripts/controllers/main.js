/**
 * @ngdoc function
 * @name fmsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fmsApp
 */
app.controller("MainCtrl", ['$scope', function($scope) {
    //    $scope.menuItems = ['Home', 'Calculators', 'Goal Based Advice', 'Contact Us'];
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
}]);