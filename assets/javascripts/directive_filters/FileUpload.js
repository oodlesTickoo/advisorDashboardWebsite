app.directive("fileread", [function () {
  return {
    link: function ($scope, $elm, $attrs) {
      $elm.on('change', function (changeEvent) {
        console.log("File change");
        
        var reader = new FileReader();
        
        reader.onload = function (evt) {
          var data = evt.target.result;
          console.log('data', data, changeEvent.target.files[0])
        };
        
        reader.readAsBinaryString(changeEvent.target.files[0]);
      });
    }
  }
}]);