app.controller("WelcomeController", ['$scope', 'sessionService', '$state', 'UserService', '$uibModal', function($scope, sessionService, $state, UserService, $uibModal) {
    'use strict';

    //tab toggle btn group
    $scope.USER_ROLE = {
        ADVISOR: "ADVISOR",
        CLIENT: "CLIENT",
        ADMIN: "ADMINISTRATOR"
    };

    $scope.my_clients = [];
    $scope.advisors = [];
    $scope.client_advisors = [];

    function initialize() {
        $scope.selectedRole = sessionService.get('role');
        _getPageData();

    }
    initialize();

    function _getPageData() {
        console.log("Getting data")
        UserService.homePageData().then(function(result) {
            console.log("Response ", result);
            $scope.my_clients = result.data.response.my_clients ? result.data.response.my_clients : [];
            $scope.advisors = result.data.response.advisors ? result.data.response.advisors : [];
            $scope.client_advisors = result.data.response.clientAdvisor ? result.data.response.clientAdvisor : [];
            _updateListData();
        }).catch(function(err) {
            console.log(err);
        })
    }

    function _updateListData() {

        $scope.client_advisors.forEach(function(ca) {
            ca.client.NAME = ca.client.FIRST_NAME + ' ' + ca.client.LAST_NAME;
            ca.advisor.NAME = ca.advisor.FIRST_NAME + ' ' + ca.advisor.LAST_NAME;
        })

    }

    $scope.radioModel = 'Left';

    $scope.checkModel = {
        left: true,
        middle: false,
        right: false
    };

    $scope.checkResults = [];

    $scope.$watchCollection('checkModel', function() {
        $scope.checkResults = [];
        angular.forEach($scope.checkModel, function(value, key) {
            if (value) {
                $scope.checkResults.push(key);
            }
        });
    });

    //Advisor Login
    $scope.advisorList = [{
        "fullName": "Robert Pattison"
    }, {
        "fullName": "Jessica Black"
    }, {
        "fullName": "Daryl Richard Swasbrook"
    }, {
        "fullName": "Klebia Clorrie"
    }, {
        "fullName": "Taylor Swift"
    }, {
        "fullName": "Jonnathan T."
    }, {
        "fullName": "Daniel Richard"
    }, {
        "fullName": "Hannah Cliff"
    }];

    $scope.advisorListData = {
        data: 'my_clients',
        useExternalPagination: false,
        enablePaginationOption: false,
        enableGridMenu: false,
        exporterMenuPdf: false,
        exporterMenuCsv: false,
        enableColumnMenus: false,
        enableSorting: false,
        enableHorizontalScrollbar: 0,
        enableVerticalScrollbar: 0,
        rowHeight: 30,
        columnDefs: [{
            name: 'name',
            displayName: 'Name'
        }, {
            name: 'actions',
            width: 150,
            pinnedRight: true,
            cellTemplate: "<a class='download-pdf action-icon' title='Download PDF' href='#'><i></i></a><a class='upload-word action-icon' title='Upload WORD' href='#'><i></i></a>",
        }],
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;
            /*  gridApi.pagination.on.paginationChanged($scope, function(newPage, pageSize) {
                  setPaginationDataAndGetList(newPage, pageSize);
              });*/
        }
    };

    //Administrator Login

    /*Client List*/
    $scope.administratorCLientList = [{
        "fullName": "Robert Pattison",
        "last": "Robert Pattison"
    }, {
        "fullName": "Jessica Black",
        "last": "Robert Pattison"
    }, {
        "fullName": "Daryl Richard Swasbrook",
        "last": "SD"
    }, {
        "fullName": "Klebia Clorrie",
        "last": "Robert Pattison"
    }, {
        "fullName": "Taylor Swift",
        "last": "Robert Pattison"
    }, {
        "fullName": "Jonnathan T.",
        "last": "Robert Pattison"
    }, {
        "fullName": "Daniel Richard",
        "last": "Robert Pattison"
    }, {
        "fullName": "Hannah Cliff",
        "last": "Robert Pattison"
    }];

    /// SHOW CLIENTS 

    $scope.administratorCLientListData = {
        data: 'my_clients',
        useExternalPagination: false,
        enablePaginationOption: false,
        enableGridMenu: false,
        exporterMenuPdf: false,
        exporterMenuCsv: false,
        enableColumnMenus: false,
        enableSorting: false,
        enableHorizontalScrollbar: 0,
        enableVerticalScrollbar: 0,
        rowHeight: 30,
        columnDefs: [{
            name: 'name',
            displayName: 'Name'
        }],
        onRegisterApi: function(gridApi) {
            console.log(gridApi);
            $scope.gridApi = gridApi;
            /*  gridApi.pagination.on.paginationChanged($scope, function(newPage, pageSize) {
                  setPaginationDataAndGetList(newPage, pageSize);
              });*/
        }
    };

    /*Master Advisor List*/

    $scope.isOpen = false;

    // Data 
    $scope.advisorLists = [{
        title: "XYZ Advisor",
        contents: [{
            "fullName": "Robert Pattison"
        }, {
            "fullName": "Jessica Black"
        }, {
            "fullName": "Daryl Richard Swasbrook"
        }]
    }, {
        title: "PQR Advisor",
        contents: [{
            "fullName": "Klebia Clorrie"
        }, {
            "fullName": "Taylor Swift"
        }]
    }];

    /*Master Client List*/
    $scope.administratorMasterClientList = [{
        "fullName": "Robert Pattison",
        "advisorName": "Russel Medcraft"
    }, {
        "fullName": "Jessica Black",
        "advisorName": "Medcraft"
    }, {
        "fullName": "Daryl Richard Swasbrook",
        "advisorName": "T.K Larry"
    }, {
        "fullName": "Klebia Clorrie",
        "advisorName": "T.K Larry"
    }, {
        "fullName": "Taylor Swift",
        "advisorName": "Russel Medcraft"
    }, {
        "fullName": "Jonnathan T.",
        "advisorName": "Russel Medcraft"
    }, {
        "fullName": "Daniel Richard",
        "advisorName": "Emma"
    }, {
        "fullName": "Hannah Cliff",
        "advisorName": "T.K Larry"
    }];

    $scope.administratorMasterClientListData = {
        data: 'client_advisors',
        useExternalPagination: false,
        enablePaginationOption: false,
        enableGridMenu: false,
        exporterMenuPdf: false,
        exporterMenuCsv: false,
        enableColumnMenus: false,
        enableSorting: false,
        enableHorizontalScrollbar: 0,
        enableVerticalScrollbar: 0,
        rowHeight: 30,
        columnDefs: [{
            name: 'client.NAME',
            displayName: 'Name'
        }, {
            name: 'advisor.NAME',
            displayName: 'Advisors Name'
        }, {
            name: 'actions',
            width: 150,
            pinnedRight: true,
            cellTemplate: "<a class='edit-action action-icon' title='Edit' href='#'><i></i></a>",
        }],
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;
            /*  gridApi.pagination.on.paginationChanged($scope, function(newPage, pageSize) {
                  setPaginationDataAndGetList(newPage, pageSize);
              });*/
        }
    };

    //open modal

    $scope.showModal = function() {
        $uibModal.open({
                templateUrl: 'changeAdvisorModal.html',
                controller: 'ChangeAdvisorController',
                size: 'md',
                backdrop: 'static',
                resolve: {
                    advisors: function() {
                        return $scope.administratorMasterClientList;
                    }

                }
            })
            .result.then(
                function() {
                    console.log("OK");
                },
                function() {
                    console.log("Cancel");
                }
            );
    }

}]);