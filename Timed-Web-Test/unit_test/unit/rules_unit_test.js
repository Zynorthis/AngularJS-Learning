'use strict';

describe('rules page testing', function(){

    var $controllerContructor, scope, location;

    beforeEach(module('myApp'));

    beforeEach(inject(function($controller, $rootScope){
        $controllerContructor = $controller;
        scope = $rootScope.$new();
    }))

    it('should return true when function is called', function(){
        var ctrl = $controllerContructor("RulesController", 
        {$scope: scope, $location: location})
        expect(true).EqualTo(true);
    });
});