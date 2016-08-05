/**
 * Created by guan on 16/8/4.
 */
app.controller("myNoteCtrl",function($scope) {
   $scope.message = "";
    $scope.left = function() {
        return 100 - $scope.message.length;
    };
    $scope.clear = function() {
        $scope.message = "";
    };
    $scope.save = function() {
        alert("Note Saved");
    };
});