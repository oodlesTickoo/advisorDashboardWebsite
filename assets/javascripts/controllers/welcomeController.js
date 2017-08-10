app.controller("WelcomeController", ['$scope', 'sessionService', '$state', 'UserService', '$uibModal', '$rootScope', 'toastr', function($scope, sessionService, $state, UserService, $uibModal, $rootScope, toastr) {
    'use strict';

    //tab toggle btn group
    $scope.fileExist = false;
    $scope.LoggedName = sessionService.get('firstName') + " " + sessionService.get('lastName');
    $scope.USER_ROLE = {
        ADVISOR: "ADVISOR",
        CLIENT: "CLIENT",
        ADMIN: "ADMINISTRATOR"
    };

    console.log("In welcome ctrl", $scope.LoggedName);

    $rootScope.addGoal = false;
    $scope.my_clients = [];
    $scope.advisors = [];
    $scope.client_advisors = [];
    $scope.updateMasterClients = [];
    $scope.openIndex = [false];
	
	//You have Financial Adivsor Modal
	$scope.haveFinancialAdvisorModal = function() {
        $uibModal.open({
                templateUrl: 'haveFinancialAdvisor.html',
                controller: 'HaveFinancialAdvisorController',
                size: 'md',
                backdrop: 'static'
            })
    };


    function initialize() {
        $scope.selectedRole = sessionService.get('role');
        _getPageData();
		if($scope.selectedRole === $scope.USER_ROLE.CLIENT){
			$scope.haveFinancialAdvisorModal();
		}
    }
    initialize();

	

    function _getPageData() {
        if ($scope.selectedRole === $scope.USER_ROLE.ADMIN) {
            UserService.masterClientList().then(clientListObj => {
                $scope.masterClients = clientListObj.data.response;
                return UserService.masterAdvisorList();
            }).then(advisorListObj => {
                $scope.masterAdvisors = advisorListObj.data.response;
                console.log("Response ", $scope.masterClients);
                console.log("Response ", $scope.masterAdvisors);
            }).catch(function(err) {
                console.log(err);
            });
        } else if ($scope.selectedRole === $scope.USER_ROLE.ADVISOR) {

            let advisorId = sessionService.get('_id')
            UserService.advisorsClientList(advisorId).then(clientListObj => {
                $scope.clientList = clientListObj.data.response ? clientListObj.data.response : [];
                console.log("Response clientList", $scope.clientList);
            }).catch(function(err) {
                console.log(err);
            });
        } else {
            UserService.getFactFindData().then(factFindDataObj => {
                console.log("Response ", factFindDataObj);
                $scope.factFindData = factFindDataObj.data.response ? factFindDataObj.data.response : [];
                $scope.fileExist =  $scope.factFindData.docFile ? true : false;
                console.log("$scope.fileExist: ", $scope.fileExist);
            }).catch(function(err) {
                console.log(err);
            });
        }

        /*
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
                    console.log("doc file does not exist", result);
                    return;
                }

                console.log("errorrrr", result);
                $scope.fileExist = result.data.response.status;
            }).catch(function(err) {
                console.log("doc file does not exist", err);
            });
        }*/
    }
	
	
    $scope.administratorMasterClientListData = {
        data: 'masterClients',
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
            name: 'firstName',
            displayName: 'Name',
            cellTemplate: "<span class='ui-grid-cell-contents'>{{row.entity.firstName}} {{row.entity.lastName}}</span>"
        }, {
            name: 'advisor.name',
            displayName: 'Advisors Name',
            cellTemplate: "<span class='ui-grid-cell-contents'>{{row.entity.advisor.firstName}} {{row.entity.advisor.lastName}}</span>"
        }, {
            name: 'actions',
            width: 150,
            pinnedRight: true,
            cellTemplate: "<a class='edit-action action-icon pointer' title='Edit' ng-click='grid.appScope.showModal(row.entity, row.entity.advisor)'><i></i></a>",
        }],
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;
            /*  gridApi.pagination.on.paginationChanged($scope, function(newPage, pageSize) {
                  setPaginationDataAndGetList(newPage, pageSize);
              });*/
        }
    };

    $scope.showModal = function(client, advisor) {
        $uibModal.open({
                templateUrl: 'changeAdvisorModal.html',
                controller: 'ChangeAdvisorController',
                size: 'md',
                backdrop: 'static',
                resolve: {
                    advisors: function() {
                        return {
                            client: client,
                            assisgnedAdvisor: advisor,
                            advisorList: $scope.masterAdvisors
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
    };
	
	//to show instructions modal
	$scope.showInstructionsModal = function() {
        $uibModal.open({
                templateUrl: 'showInstructions.html',
                controller: 'ShowInstructionsController',
                size: 'md',
                backdrop: 'static'
            })
    };


    function _updateListData() {

        $scope.client_advisors.forEach(function(ca) {
            ca.client.NAME = ca.client.FIRST_NAME + ' ' + ca.client.LAST_NAME;
            if (ca.advisor)
                ca.advisor.NAME = ca.advisor.FIRST_NAME + ' ' + ca.advisor.LAST_NAME;
        });

    }

    $scope.radioModel = 'Middle';

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
        data: 'clientList',
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
            displayName: 'Name',
            cellTemplate: "<span class='ui-grid-cell-contents'>{{row.entity.firstName}} {{row.entity.lastName}}</span>"
        }, {
            name: 'actions',
            width: 150,
            pinnedRight: true,
            cellTemplate: "<input type='file'  name='file' ng-model='file[row.entity._id]' ngf-select='file[row.entity._id] = null; grid.appScope.showUploadFileModel($file, $invalidFiles, row.entity._id)' ngf-max-size='5MB' required ngf-model-invalid='errorFile' style='position: absolute; left: 89%; top: 55%; opacity: 0;'><a class='download-pdf action-icon' title='Download PDF' ng-click='grid.appScope.downloadPdf(row.entity._id)'><i></i></a><a class='upload-word action-icon' title='Upload WORD' ><i></i></a>" /*ng-click='grid.appScope.uploadDoc(row.entity._id)' + "<input type='file'  name='file'  ngf-select='grid.appScope.showUploadFileModel($file, $invalidFiles, row.entity._id)' ngf-max-size='5MB' required ngf-model-invalid='errorFile'>"*/
                //                                "<input type='file' fileread='' id='{{row.entity.CONTACT_ID}}' style='display:none;'>",
        }],
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;
            /*  gridApi.pagination.on.paginationChanged($scope, function(newPage, pageSize) {
                  setPaginationDataAndGetList(newPage, pageSize);
              });*/
        }
    };

    $scope.showUploadFileModel = function(file, invalidFiles, clientId) {
        $uibModal.open({
                templateUrl: 'uploadFileModal.html',
                controller: 'UploadFileModalController',
                size: 'md',
                backdrop: 'static',
                resolve: {
                    file: function() {
                        return file;
                    },
                    clientId: function() {
                        return clientId;
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

    //    $scope.isOpen = false;

    // Data 
    /*Master Client List*/


    $scope.saveTemplateDoc = function() {
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.href = '/download/TEMPLATE_DOC.docx';
        link.target = '_blank';
        link.click();
    }



    $scope.downloadPdf = function(clientId) {
        /*UserService.downloadPdf(clientId).then(function(response) {
            console.log("response downloadPdf", response);
            if (response.status === 200) {
                var url = '/api/v1/file?contact_id=' + id + '&file_format=pdf';
                var link = document.createElement('a');
                document.body.appendChild(link);
                link.href = url;
                link.target = '_blank';
                link.click();
            } else {
                toastr.error("No Pdf to download");
            }

        })*/
        UserService.downloadPdf(clientId).then(function(response) {
            console.log(response)
            saveToDisk(response.data.response.filePath)
        });
        console.log("requsest sent");
    }


    function saveToDisk(fileURL) {
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.href = fileURL;
        link.target = '_blank';
        link.click();
        //$rootScope.isLoading = false;
        // $timeout(0);
    }

    /*$scope.uploadDoc = function(id) {
        console.log(id);
        document.getElementById('' + id).click();
    }*/

    $scope.fileSelected = function(id) {

        console.log("---------------------", document.getElementById('' + id));

    }

    $scope.saveDocForClient = function() {
        //        UserService.downloadDoc(sessionService.get('_id'), 'docx').then(function(data) {
        UserService.downloadDoc(sessionService.get('_id')).then(function(response) {
            console.log("saveDocForClient: ", response);
			saveToDisk(response.data.response.filePath)
           /* if (data.data && data.data.response && data.data.response.file) {
                var url = '/download/' + data.data.response.file;
                var link = document.createElement('a');
                document.body.appendChild(link);
                link.href = url;
                //link.target = '_blank';
                //console.log("link:",link.href);
                link.click();
            }*/
        })
    }


    //to show advisors client list
    $scope.showAdvisorsClientList = function(advisorId, index) {
        console.log("Dddddddddddddddddddddddddd", sessionService.get('auth_token'), advisorId, $scope.openIndex, index);
        if ($scope.openIndex[index]) {
            UserService.advisorsClientList(advisorId).then(clientListObj => {
                console.log("showAdvisorsClientList Response ", clientListObj);
                $scope.advisorsClientList = clientListObj.data.response ? clientListObj.data.response : [];
            }).catch(function(err) {
                console.log(err);
            });
        }
    }
}]);

app.controller("UploadFileModalController", ['$scope', 'file', '$uibModalInstance', 'UserService', 'clientId', '$timeout', 'toastr', function($scope, file, $uibModalInstance, UserService, clientId, $timeout, toastr) {
    $scope.file = file;
    $scope.uploadFile = function() {
        file.upload = UserService.uploadFile(file, clientId)

        file.upload.then(function(response) {
            $timeout(function() {
                $uibModalInstance.close();
                file = null
                if (response.data.error) {
                    toastr.error(response.data.message);
                } else {
                    toastr.success(response.data.message);
                }
            });
        }, function(response) {
            if (response.status > 0)
                toastr.error(response.data.message);
        }, function(evt) {
            // Math.min is to fix IE which reports 200% sometimes
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
    }
    $scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    }

}]);

app.controller("ShowInstructionsController", ['$scope','$uibModalInstance', function($scope, $uibModalInstance) {
  
    $scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    }

}]);

app.controller("HaveFinancialAdvisorController", ['$scope','$uibModalInstance', function($scope, $uibModalInstance) {
  
    $scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    }

}]);
