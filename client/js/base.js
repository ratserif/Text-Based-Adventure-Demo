'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/game', {
            templateUrl: 'templates/game.html',
            controller: 'MyController'
        })
        .otherwise({
            redirectTo: '/game'
        })

}])

.controller('MyController', function($scope, $http) {

    $scope.Scene = [];
    var sceneId = 0;

    $scope.getData = function() {
        $http.get('/api/v1/getData').then(function(response) {
            $scope.Scene = response.data;
            $scope.currentScene = $scope.Scene[0];
        });
    };

    $scope.selectChoice = function(answerid) {
        sceneId = $scope.currentScene.choices[answerid].transition;
        $scope.currentScene = $scope.Scene[sceneId];
    };
});
