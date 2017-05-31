app.controller("ChangeAdvisorController", ['$scope', '$uibModalInstance', 'advisors', function($scope, $uibModalInstance, advisors) {
    'use strict';
	
	console.log("in ChangeAdvisorController", advisors);
	
	$scope.advisorList = advisors; 
	
	
    $scope.ok = function() {
        $uibModalInstance.close();
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

}]);