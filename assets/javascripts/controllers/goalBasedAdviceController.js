app.controller("GoalBasedAdviceController", ['$scope', '$state', '$rootScope', 'sessionService','UserService', 'GoalBasedAdviceService', '$timeout', function($scope, $state, $rootScope,sessionService, UserService, GoalBasedAdviceService, $timeout) {
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
    $scope.customFieldObj22 = {};
    $scope.saveGoals = function() {
        var final_data = {
            "custom_field": [
                { "CUSTOM_FIELD_ID": "CONTACT_FIELD_154", "FIELD_VALUE": $scope.goalBasedAdvice[0].severity },
                { "CUSTOM_FIELD_ID": "CONTACT_FIELD_155", "FIELD_VALUE": $scope.goalBasedAdvice[1].severity },
                { "CUSTOM_FIELD_ID": "CONTACT_FIELD_156", "FIELD_VALUE": $scope.goalBasedAdvice[2].severity },
                { "CUSTOM_FIELD_ID": "CONTACT_FIELD_157", "FIELD_VALUE": $scope.goalBasedAdvice[3].severity },
                { "CUSTOM_FIELD_ID": "CONTACT_FIELD_158", "FIELD_VALUE": $scope.goalBasedAdvice[4].severity },
                { "CUSTOM_FIELD_ID": "CONTACT_FIELD_159", "FIELD_VALUE": $scope.goalBasedAdvice[5].severity },
                { "CUSTOM_FIELD_ID": "CONTACT_FIELD_160", "FIELD_VALUE": $scope.goalBasedAdvice[6].severity },
                { "CUSTOM_FIELD_ID": "CONTACT_FIELD_161", "FIELD_VALUE": $scope.goalBasedAdvice[7].severity },
                { "CUSTOM_FIELD_ID": "CONTACT_FIELD_162", "FIELD_VALUE": $scope.goalBasedAdvice[8].severity },
                { "CUSTOM_FIELD_ID": "CONTACT_FIELD_163", "FIELD_VALUE": $scope.goalBasedAdvice[9].severity },
                { "CUSTOM_FIELD_ID": "CONTACT_FIELD_164", "FIELD_VALUE": $scope.goalBasedAdvice[10].severity },
                { "CUSTOM_FIELD_ID": "CONTACT_FIELD_165", "FIELD_VALUE": $scope.goalBasedAdvice[11].severity }
            ]
        };
        var customFieldObj22 = {};
        for (i = 0; i < final_data.custom_field.length; i++) {
            customFieldObj22[final_data.custom_field[i].CUSTOM_FIELD_ID] = final_data.custom_field[i].FIELD_VALUE;
        }
        final_data["customFieldMap"] = customFieldObj22;
        UserService.customFieldsUpdate(final_data);
    };
}]);
'use strict';
