var app = angular.module('archeryApp', []);

app.controller('formCtrl', function($scope) {
    $scope.deflection = null;
    
    $scope.calculate = function() {
        var pd = $scope.pound,
            draw = $scope.draw,
            pt = $scope.point,
            ptDiff = pt - 125,
            drawDiff = draw - 28,
            divisor = pd,
            deflection = 0;

        // account for heavier field points
        if (ptDiff > 0) {
            var rem = ptDiff /  25;
            divisor += (rem * 5);
        }

        // account for longer / shorter draws
        // < 28' draws generated a negative drawDiff
        if (drawDiff > 0) {
            divisor += drawDiff * 5;
        }

        $scope.deflection = (26 / divisor).toFixed(3);
    }

    $scope.clear = function() {
        $scope.deflection = null;
        $scope.pound = '';
        $scope.draw = '';
        $scope.point = '';
    }
});