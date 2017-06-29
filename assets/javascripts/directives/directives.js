app.directive("fileread", ['$http', 'toastr', function($http, toastr) {
    return {
        link: function($scope, $elm, $attrs) {
            $elm.on('change', function(changeEvent) {
                console.log("File change", $elm, $attrs);

                var reader = new FileReader();
                var files = changeEvent.target.files;
                console.log(changeEvent.target.files);
                if (files && files.length > 0) {
                    var fd = new FormData();
                    fd.append('file', files[0]);
                    var ext = files[0].type.split('.').pop();
                    //if(=="pdf" || ext=="docx" || ext=="doc"){
                    if (ext=="docx" || ext=="doc" ) {
                        var uploadUrl = '/api/v1/upload?contact_id=' + $attrs.id;
                        $http.post(uploadUrl, fd, {
                            transformRequest: angular.identity,
                            headers: {
                                'Content-Type': undefined
                            }
                        }).then(function(result) {
                            if (result.status === 200) { 
                                toastr.success("File successfully uploaded");
                            }else{
                                console.log(result);
                                toastr.error("File uploading unsuccessful. Please try again");
                            }
                            console.log(result);
                        }).catch(function(err) {
                            console.log(err);
                            toastr.error("File uploading unsuccessful. Please try again");
                        });
                    }
                }
            });
        }
    }
}]);