var app = angular.module("toDoApp", []);

app.controller("toDoApp", function($scope, $log){
    $scope.title = "To Do App";
    $log.info("Angular is up and running!");
});

app.directive("toDo", function(){
    return {
        templateUrl: "todo.html",
        transclude: true,
        scrope: {
            
        },
        link: function(scope, el, attrs){

        }
    };
});