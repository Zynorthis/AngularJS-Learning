var app = angular.module("myApp");

app.factory('testOptions', function(){
    return {
        options: [
            {
                label: "Option 1",
                value: 1
            },
            {
                label: "Option 2",
                value: 2
            },
            {
                label: "Option 3",
                value: 3
            },
            {
                label: "Option 4",
                value: 4
            }
        ]
    };
});