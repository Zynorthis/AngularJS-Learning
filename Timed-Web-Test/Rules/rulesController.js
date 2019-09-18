var app = angular.module('myApp');

var RulesController = function($scope, $location){
    $scope.successMessge = "Angular is up and running!";
    $scope.testingBool = true;
    
    $scope.startTest = function(){
        console.log("Start test button clicked.");
        $location.path("/test");
    };

    var RulesLoadingOutput = function(){
        console.log("Rules Controller was loaded successfully.");
        return true;
    };
    RulesLoadingOutput();
};

app.controller('RulesController', RulesController);