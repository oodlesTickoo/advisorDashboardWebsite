app.controller("GoalBasedAdviceController", ['$scope', '$state', '$rootScope', 'sessionService','UserService', 'GoalBasedAdviceService', '$timeout', function($scope, $state, $rootScope,sessionService, UserService, GoalBasedAdviceService, $timeout) {
    $rootScope.addGoal = false;

    $scope.goalBasedAdvice = GoalBasedAdviceService.getGoalBasedAdvices();
    $scope.customField = GoalBasedAdviceService.getCustomFieldObj;
    console.log('Goal controllerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', $scope.goalBasedAdvice, $scope.customField);
	
	
	function initialize() {
        _getPageData();
    }
    initialize();
	
	 function _getPageData() {
		UserService.getFactFindData().then(factFindDataObj => {
			console.log("Response ", factFindDataObj);
			$scope.factFindData = factFindDataObj.data.response ? factFindDataObj.data.response : [];
		}).catch(function(err) {
			console.log(err);
		});
    }
	
	
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
                { goalBasedAdvice_0_severity:$scope.goalBasedAdvice[0].severity },
                { goalBasedAdvice_1_severity: $scope.goalBasedAdvice[1].severity },
                { goalBasedAdvice_2_severity: $scope.goalBasedAdvice[2].severity },
                { goalBasedAdvice_3_severity: $scope.goalBasedAdvice[3].severity },
                { goalBasedAdvice_4_severity: $scope.goalBasedAdvice[4].severity },
                { goalBasedAdvice_5_severity: $scope.goalBasedAdvice[5].severity },
                { goalBasedAdvice_6_severity: $scope.goalBasedAdvice[6].severity },
                { goalBasedAdvice_7_severity: $scope.goalBasedAdvice[7].severity },
                { goalBasedAdvice_8_severity: $scope.goalBasedAdvice[8].severity },
                { goalBasedAdvice_9_severity: $scope.goalBasedAdvice[9].severity },
                { goalBasedAdvice_10_severity: $scope.goalBasedAdvice[10].severity },
                { goalBasedAdvice_11_severity: $scope.goalBasedAdvice[11].severity }
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
