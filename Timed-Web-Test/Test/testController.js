var app = angular.module('myApp');

var TestController = function($scope, $location, $interval){

    var TestLoadingOutput = function(){
        console.log("Test Controller was loaded successfully.");
        return true;
    };
    
    var decrementCounter = function(){
        $scope.counter -= 1;
        if($scope.counter > 1){
            // end time and move to next question
        }
    };

    var startCountdown = function(){
        $interval(decrementCounter, 1000, $scope.counter);
    };

    $scope.submitAnswer = function(){
        console.log("This function is being called.");
        $scope.questionCounter += 1;
    };

    $scope.counter = 5; // timer
    $scope.questionCounter = 1; // what question the user is on
    $scope.score = 0; // how many questions have been answered correctly
    var isTestLoaded = TestLoadingOutput();
    if(isTestLoaded){
        startCountdown();
    }

};

app.controller('TestController', TestController);