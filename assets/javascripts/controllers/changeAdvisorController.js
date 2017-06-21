app.controller("ChangeAdvisorController", ['$scope', '$uibModalInstance', 'advisors', 'UserService', 'toastr', function($scope, $uibModalInstance, advisors, UserService, toastr) {
    'use strict';
	
	console.log("in ChangeAdvisorController", advisors);
	$scope.selectedAdvisor = advisors.selected+'';
	$scope.advisorList = []; 
	const clientId = advisors.client;
    $scope.name = advisors.name;
	function _init(){
        var index = 0;
        var selectedIndex = -1;
        advisors.advisors.forEach(function(elm){
            if(advisors.advisor+'' === elm.advisor.CONTACT_ID+''){
                selectedIndex = index;
            }
            $scope.advisorList.push({
                name: elm.advisor.FIRST_NAME + ' ' + elm.advisor.LAST_NAME,
                id: elm.advisor.CONTACT_ID+''
            });
            index++;
        });
        //$scope.selectedAdvisor = $scope.advisorList[selectedIndex];
    }
    _init();

    $scope.ok = function() {
        $uibModalInstance.close();
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.advisorChanged = function(advisorId){
        console.log('advisorId', advisorId, $scope.selectedAdvisor);
        UserService.linkClientToAdvisor(clientId, advisorId).then(function(result){
            if(result.status === 200){
				$scope.ok();
				 toastr.success('Hello world!');
			}
                
            else
                $scope.cancel();
        }).catch(function(err){
            $scope.cancel();
        });
    };

}]);