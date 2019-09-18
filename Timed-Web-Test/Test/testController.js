var app = angular.module('myApp');

var TestController = function($scope, $interval, testOptions, testQuestions){

    var TestLoadingOutput = function(){
        console.log("Test Controller was loaded successfully.");
        return true;
    };
    
    var decrementCounter = function(){
        $scope.counter -= 1;
        if($scope.counter < 1){
            $scope.submitAnswer(0, 1);
        }
    };

    var startCountdown = function(){
        if($scope.counter == 5){
            isCountingDown = $interval(decrementCounter, 1000, $scope.counter);
        }
    };

    $scope.submitAnswer = function(selectedOption){
        console.log(selectedOption + " was selected.");
        $interval.cancel(isCountingDown);
        isCountingDown = null;
        if (selectedOption == 1){
            $scope.score += 1;
        }
        $scope.questionCounter += 1;
        $scope.counter = 5;
        startCountdown();
    };

    var isCountingDown = null;
    $scope.counter = 5; // timer
    $scope.questionCounter = 1; // what question the user is on
    $scope.score = 0; // how many questions have been answered correctly
    var options = testOptions;
    $scope.options = options;
    var questions = testQuestions.questions;
    var question = questions[$scope.questionCounter - 1];
    console.log(question);
    $scope.currentQuestion = question.label;
    console.log($scope.currentQuestion);
    var isTestLoaded = TestLoadingOutput();
    if(isTestLoaded){
        startCountdown();
    }

};

app.controller('TestController', TestController);