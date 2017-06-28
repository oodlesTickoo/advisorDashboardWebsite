app.controller("WelcomeController", ['$scope', 'sessionService', '$state', 'UserService', '$uibModal', '$rootScope', function($scope, sessionService, $state, UserService, $uibModal, $rootScope) {
    'use strict';

    //tab toggle btn group
    $scope.fileExist = false;
    $scope.LOGGED_NAME = sessionService.get('name');
    $scope.USER_ROLE = {
        ADVISOR: "ADVISOR",
        CLIENT: "CLIENT",
        ADMIN: "ADMINISTRATOR"
    };

    $rootScope.addGoal = false;
    $scope.my_clients = [];
    $scope.advisors = [];
    $scope.client_advisors = [];

    function initialize() {
        //$scope.selectedRole = "ADMINISTRATOR";      // sessionService.get('role');
        $scope.selectedRole = sessionService.get('role');
        _getPageData();

    }
    initialize();

    function _getPageData() {
        console.log("Getting data");
        if ($scope.selectedRole !== $scope.USER_ROLE.CLIENT) {
            UserService.homePageData().then(function(result) {
                console.log("Response ", result);
                $scope.my_clients = result.data.response.my_clients ? result.data.response.my_clients : [];
                $scope.advisors = result.data.response.advisors ? result.data.response.advisors : [];
                $scope.client_advisors = result.data.response.clientAdvisor ? result.data.response.clientAdvisor : [];
                _updateListData();
            }).catch(function(err) {
                console.log(err);
            });
        } else {
            UserService.isFileExist('docx').then(function(result) {
                if (result && result.status !== 200) {
                    console.log("doc file does not exist",result);
                    return;
                }
                
                console.log("errorrrr",result);
                $scope.fileExist = result.data.response.status;
            }).catch(function(err) {
                console.log("doc file does not exist",err);
            });
        }
    }

    function _updateListData() {

        $scope.client_advisors.forEach(function(ca) {
            ca.client.NAME = ca.client.FIRST_NAME + ' ' + ca.client.LAST_NAME;
            if (ca.advisor)
                ca.advisor.NAME = ca.advisor.FIRST_NAME + ' ' + ca.advisor.LAST_NAME;
        });

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


    $scope.advisorListData = {
        data: 'my_clients',
        useExternalPagination: false,
        enablePaginationOption: false,
        enableGridMenu: false,
        exporterMenuPdf: false,
        exporterMenuCsv: false,
        enableColumnMenus: false,
        enableSorting: false,
        enableVerticalScrollbar: 1,
        columnDefs: [{
            name: 'name',
            displayName: 'Name'
        }, {
            name: 'actions',
            width: 150,
            pinnedRight: true,
            cellTemplate: "<a class='download-pdf action-icon' title='Download PDF' ng-click='grid.appScope.downloadPdf(row.entity.CONTACT_ID)'><i></i></a><a class='upload-word action-icon' title='Upload WORD' ng-click='grid.appScope.uploadDoc(row.entity.CONTACT_ID)'><i></i></a>" +
                "<input type='file' fileread='' id='{{row.entity.CONTACT_ID}}' style='display:none;'>",
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
        enableVerticalScrollbar: 1,
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
    /*Master Client List*/
    $scope.administratorMasterClientListData = {
        data: 'client_advisors',
        useExternalPagination: false,
        enablePaginationOption: false,
        enableGridMenu: false,
        exporterMenuPdf: false,
        exporterMenuCsv: false,
        enableColumnMenus: false,
        enableSorting: false,
        enableVerticalScrollbar: 1,
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
            cellTemplate: "<a class='edit-action action-icon pointer' title='Edit' ng-click='grid.appScope.showModal(row.entity.client, row.entity.advisor.CONTACT_ID)'><i></i></a>",
        }],
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;
            /*  gridApi.pagination.on.paginationChanged($scope, function(newPage, pageSize) {
                  setPaginationDataAndGetList(newPage, pageSize);
              });*/
        }
    };

    $scope.saveTemplateDoc = function() {
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.href = '/download/TEMPLATE_DOC.docx';
        link.target = '_blank';
        link.click();
    }

    $scope.downloadPdf = function(id) {
        var url = '/api/v1/file?contact_id=' + id + '&file_format=pdf';
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.href = url;
        link.target = '_blank';
        link.click();
    }

    $scope.uploadDoc = function(id) {
        console.log(id);
        document.getElementById('' + id).click();
    }

    $scope.fileSelected = function(id) {

        console.log("---------------------", document.getElementById('' + id));

    }

    $scope.saveDocForClient = function() {
        UserService.download(sessionService.get('contact'), 'docx').then(function(data) {
            if (data.data && data.data.response && data.data.response.file) {
                const url = '/download/' + data.data.response.file;
                var link = document.createElement('a');
                document.body.appendChild(link);
                link.href = url;
                //link.target = '_blank';
		console.log("link:",link.href);
                link.click();
            }
        })
    }

    $scope.showModal = function(client, advisor) {
        $uibModal.open({
                templateUrl: 'changeAdvisorModal.html',
                controller: 'ChangeAdvisorController',
                size: 'md',
                backdrop: 'static',
                resolve: {
                    advisors: function() {
                        return {
                            client: client.CONTACT_ID,
                            name: client.FIRST_NAME + ' ' + client.LAST_NAME,
                            advisors: $scope.advisors,
                            selected: advisor
                        };
                    }

                }
            })
            .result.then(
                function() {
                    console.log("OK");
                    _getPageData();
                },
                function() {
                    console.log("Cancel");
                }
            );
    }

}]);
