app.controller("WelcomeController", ['$scope', 'sessionService', '$state', '$uibModal', function($scope, sessionService, $state, $uibModal) {
            'use strict';

            //tab toggle btn group
            $scope.USER_ROLE = {
                ADVISOR: "ADVISOR",
                CLIENT: "CLIENT",
                ADMIN: "ADMINISTRATOR"
            };

            function initialize() {
                $scope.selectedRole = 'ADMINISTRATOR' /*sessionService.get('role')*/ ;

            }
            initialize();

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
                data: 'advisorList',
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
                    name: 'fullName',
                    displayName: 'Name'
                }, {
                    name: 'actions',
                    width: 150,
                    pinnedRight: true,
                    cellTemplate: "<a class='download-pdf action-icon' title='Download PDF' href='#'><i></i></a><a class='upload-word action-icon' title='Upload WORD' href='#'><i></i></a>"
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

            $scope.administratorCLientListData = {
                data: 'administratorCLientList',
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
                    name: 'fullName',
                    displayName: 'Name'
                }],
                onRegisterApi: function(gridApi) {
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
                data: 'administratorMasterClientList',
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
                    name: 'fullName',
                    displayName: 'Name'
                }, {
                    name: 'advisorName',
                    displayName: 'Advisors Name'
                }, {
                    name: 'actions',
                    width: 150,
                    pinnedRight: true,
                    cellTemplate: "<a class='edit-action action-icon pointer' title='Edit' ng-click='grid.appScope.showModal()'><i></i></a>",
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