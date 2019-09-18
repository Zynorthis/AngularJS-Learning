var app = angular.module('myApp');

var RulesController = function($scope, $location, $log){
    $scope.successMessge = "Angular is up and running!";
    $scope.testingBool = true;
    
    $scope.startTest = function(){
        $log.info("Start test button clicked.");
        $location.path("/test");
    };

    var RulesLoadingOutput = function(){
        $log.info("Rules Controller was loaded successfully.");
        return true;
    };
    RulesLoadingOutput();
};

app.controller('RulesController', RulesController);