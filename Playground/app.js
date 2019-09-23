(function(){
    var app = angular.module("pgApp", []);

    app.controller("playgroundController", function($scope){
        $scope.titleMessage = "Angular is up and running!";
    });
})();