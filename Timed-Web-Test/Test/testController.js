var app = angular.module('myApp');

var TestController = function($scope, $location){

    var TestLoadingOutput = function(){
        console.log("Test Controller was loaded successfully.");
    };
    TestLoadingOutput();
};

app.controller('TestController', TestController);