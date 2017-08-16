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
			GoalBasedAdviceService.setGoalBasedAdviceData($scope.factFindData);
		}).catch(function(err) {
			console.log(err);
		});
    }
	
//	function _getPageData() {
//		UserService.getFactFindData().then(factFindDataObj => {
//			console.log("Response ", factFindDataObj);
//			$scope.factFindData = factFindDataObj.data.response ? factFindDataObj.data.response : [];
//			GoalBasedAdviceService.setGoalBasedAdviceData($scope.factFindData);
//			promise.resolve($scope.factFindData);
//			return promise;
//		}).catch(function(err) {
//			console.log(err);
//		});
//    }
	
	
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
         var final_data = {
			"factFindData": {
				 goalBasedAdvice_0_severity : $scope.goalBasedAdvice[0].severity ,
				 goalBasedAdvice_1_severity : $scope.goalBasedAdvice[1].severity ,
				 goalBasedAdvice_2_severity : $scope.goalBasedAdvice[2].severity ,
				 goalBasedAdvice_3_severity : $scope.goalBasedAdvice[3].severity ,
				 goalBasedAdvice_4_severity : $scope.goalBasedAdvice[4].severity ,
				 goalBasedAdvice_5_severity : $scope.goalBasedAdvice[5].severity ,
				 goalBasedAdvice_6_severity : $scope.goalBasedAdvice[6].severity ,
				 goalBasedAdvice_7_severity : $scope.goalBasedAdvice[7].severity ,
				 goalBasedAdvice_8_severity : $scope.goalBasedAdvice[8].severity ,
				 goalBasedAdvice_9_severity : $scope.goalBasedAdvice[9].severity ,
				 goalBasedAdvice_10_severity : $scope.goalBasedAdvice[10].severity ,
				 goalBasedAdvice_11_severity : $scope.goalBasedAdvice[11].severity 
			}
		};
        console.log("GOAL final_data", final_data);
        UserService.saveFactFindData(final_data).then(function(res){
			console.log(res)
        });
       /* UserService.downloadPdf(sessionService.get('_id'), final_data).then(function(response){
            SaveToDisk(response.data.response.filePath,response.data.response.fileName);
         });*/
        console.log("GOAL requsest sent");
    };
}]);
'use strict';
