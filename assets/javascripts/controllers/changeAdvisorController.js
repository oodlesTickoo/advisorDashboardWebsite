app.controller("ChangeAdvisorController", ['$scope', '$uibModalInstance', 'advisors', 'UserService', 'toastr', function($scope, $uibModalInstance, advisors, UserService, toastr) {
    'use strict';

    $scope.selectedAdvisor = advisors.assisgnedAdvisor._id;
    $scope.advisorList = [];
    var clientId = advisors.client._id;
    $scope.clientName = advisors.client.firstName+" "+ advisors.client.lastName;

    function _init() {
        var index = 0;
        var selectedIndex = -1;
        advisors.advisorList.forEach(function(elm) {
            if (advisors.assisgnedAdvisor._id === elm._id ) {
                selectedIndex = index;
            }
            $scope.advisorList.push({
                name: elm.firstName + ' ' + elm.lastName,
                id: elm._id + ''
            });
            index++;
        });
    }
    _init();

    $scope.changeAdvisor = function() {
        UserService.linkClientToAdvisor(clientId, $scope.selectedAdvisor).then(function(result) {
            console.log("result11111111111111111",result);
            if (result.status === 200) {
                $uibModalInstance.close();
                toastr.success('Advisor Changed Successfully');
            } else {
                $scope.cancel();
//                toastr.error('Advisor Change Unsuccessful');
            }
        }).catch(function(err) {
            $scope.cancel();
            toastr.error('Advisor Change Unsuccessful');
        });
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

}]);
