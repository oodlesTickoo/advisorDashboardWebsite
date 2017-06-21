app.directive("fileread", ['$http', function($http) {
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
                    if (files[0].type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                        var uploadUrl = '/api/v1/upload?contact_id=' + $attrs.id;
                        $http.post(uploadUrl, fd, {
                            transformRequest: angular.identity,
                            headers: {
                                'Content-Type': undefined
                            }
                        }).then(function(result) {
                            console.log(result);
                        }).catch(function(err) {
                            console.log(err);
                        });
                    }
                }
            });
        }
    }
}])

.directive("customPopover", [ function() {
    return {
        restrict: 'A',
        template: '<span>{{label}}</span>',
        link: function (scope, el, attrs) {
            scope.label = attrs.popoverLabel;
            $(el).popover({
                trigger: 'hover',
                html: true,
                content: attrs.popoverHtml,
                placement: attrs.popoverPlacement
            });
        }
    };
}]);