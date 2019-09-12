(function () {
    var app = angular.module('myApp', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/rules', {
            templateUrl: 'Rules/rules.html',
            controller: 'RulesController'
        }).when('/test', {
            templateUrl: 'Test/test.html',
            controller: 'TestController'
        }).otherwise({ redirectTo: "/test" });
        $locationProvider.html5Mode(true);
    });
    var AppLoadingOutput = function(){
        console.log("App.js was loaded successfully.");
    };
    AppLoadingOutput();
})();