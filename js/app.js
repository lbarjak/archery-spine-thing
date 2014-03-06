var app = angular.module('archeryApp', []);

app.controller('formCtrl', function($scope) {
    $scope.testFn = function() {
        console.log("Hello!");
    }
});