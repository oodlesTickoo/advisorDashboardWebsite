app.controller("GoalBasedAdviceController", ['$scope', '$state', '$rootScope', 'GoalBasedAdviceService', '$timeout', function($scope, $state, $rootScope, GoalBasedAdviceService, $timeout) {
    $rootScope.addGoal = false;

    $scope.goalBasedAdvice = GoalBasedAdviceService.goalBasedAdvice();
	$scope.customField = GoalBasedAdviceService.custom_field.customFieldObj;
    console.log('Goal controllerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', $scope.goalBasedAdvice, $scope.customField);

    //to add a Goal
    $scope.addGoal = function(index, severity) {
        $scope.showTooltip = index;
        $scope.goalBasedAdvice[index].severity = severity;
        removeClass();
    };


    //to remove a class to hide intial tooltip
    var removeClass = function() {
        $timeout(function() {
            $scope.showTooltip = "";
        }, 3000);
    };

    //to remove a Goal
    $scope.removeGoal = function(index, severity) {
        $scope.showTooltip = "";
        $scope.goalBasedAdvice[index].severity = 'false';
        console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", $scope.showTooltip, $scope.goalBasedAdvice[index].severity);
    };

    $scope.saveGoals = function() {
        for(i=0; i<$scope.final_data.custom_field.length;i++){ 
            $scope.customFieldObj22[$scope.final_data.custom_field[i].CUSTOM_FIELD_ID] = $scope.final_data.custom_field[i].FIELD_VALUE ;
        } 
        console.log("customFieldObj22", $scope.customFieldObj22);
        $scope.final_data["customFieldMap"]=$scope.customFieldObj22;
        UserService.customFieldsUpdate($scope.final_data);
        console.log("requsest sent");
    };

    //go to Goal Based calculator
    /* $scope.goToGoalCalc = function() {
         $rootScope.addGoal = true;
         $state.go('app.superCalculator');
     }*/
}]);
'use strict';