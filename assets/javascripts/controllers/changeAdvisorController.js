app.controller("ChangeAdvisorController", ['$scope', '$uibModalInstance', 'advisors', 'UserService', function($scope, $uibModalInstance, advisors, UserService) {
    'use strict';
	
	console.log("in ChangeAdvisorController", advisors);
	//$scope.selectedAdvisor = advisors.advisor+'';
	$scope.advisorList = []; 
	const clientId = advisors.client;
    $scope.name = advisors.name;
	function _init(){
        advisors.advisors.forEach(function(elm){
            if(advisors.advisor+'' === elm.advisor.CONTACT_ID+''){
                $scope.selectedAdvisor = {
                    name: elm.advisor.FIRST_NAME + ' ' + elm.advisor.LAST_NAME,
                    id: elm.advisor.CONTACT_ID+''
                }
            }
            $scope.advisorList.push({
                name: elm.advisor.FIRST_NAME + ' ' + elm.advisor.LAST_NAME,
                id: elm.advisor.CONTACT_ID+''
            })
        })
    }
    _init();

    $scope.ok = function() {
        $uibModalInstance.close();
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.advisorChanged = function(advisorId){
        console.log('advisorId', advisorId, $scope.selectedAdvisor)
        UserService.linkClientToAdvisor(clientId, advisorId).then(function(result){
            if(result.status === 200)
                $scope.ok();
            else
                $scope.cancel();
        }).catch(function(err){
            $scope.cancel();
        })
    }

}]);