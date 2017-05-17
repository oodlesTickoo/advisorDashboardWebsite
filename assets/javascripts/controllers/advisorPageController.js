app.controller("AdvisorPageController", ['$scope', 'Upload', '$timeout', function($scope, Upload, $timeout) {

    $scope.clients = [{
        name: 'Kartik',
        download: '',
        upload: ''
    }, {
        name: 'Milind',
        download: '',
        upload: ''
    }, {
        name: 'Rajat',
        download: '',
        upload: ''
    }, {
        name: 'Rahul',
        download: '',
        upload: ''
    }];
	$scope.files =[];
    $scope.uploadFiles = function(file, errFiles, index) {
		$scope.files[index] = file;
		console.log($scope.files)
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];
        if (file) {
            file.upload = Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {file: file}
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * 
                                         evt.loaded / evt.total));
            });
        }   
    }


}]);