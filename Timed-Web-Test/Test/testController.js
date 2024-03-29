var app = angular.module('myApp');

var TestController = function($scope, $interval, $log, testOptions, testQuestions){

    var TestLoadingOutput = function(){
        $log.info("Test Controller was loaded successfully.");
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

    $scope.submitAnswer = function(){
        $log.info($scope.selectedOption + " was selected.");
        $interval.cancel(isCountingDown);
        isCountingDown = null;
        if ($scope.selectedOption == 1){
            $scope.score += 1;
        }
        $scope.questionCounter += 1;
        $scope.counter = 5;
        startCountdown();
    };

    var isCountingDown = null;
    $scope.selectedOption = 0;
    $scope.counter = 5; // timer
    $scope.questionCounter = 1; // what question the user is on
    $scope.score = 0; // how many questions have been answered correctly
    var options = testOptions;
    $scope.options = options;
    var questions = testQuestions.questions;
    var question = questions[$scope.questionCounter - 1];
    $log.debug("Question: " + question);
    $scope.currentQuestion = question.label;
    $log.debug("Current Question: " + $scope.currentQuestion);
    var isTestLoaded = TestLoadingOutput();
    if(isTestLoaded){
        startCountdown();
    }

};

app.controller('TestController', TestController);