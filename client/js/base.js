'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
        'ngRoute'
    ])

    .config(['$routeProvider', function($routeProvider) {
        console.log('test');

        $routeProvider.when('/game', {
            templateUrl: 'templates/game.html',
            controller: 'MyController'
        })
        .otherwise({redirectTo: '/game'})

    }])

    .controller('MyController', function($scope, $http) {

    $scope.Scene = [];
    $scope.color = '';
    $scope.message = '';
    var sceneId = 0;

    $scope.postData = function() {
        $http.post('/api/v1/postData', {
            color: $scope.color
        }).then(function(response) {
            $scope.message = response.data.message;
        });
        $scope.color = '';
    };

    $scope.getData = function() {
        $http.get('/api/v1/getData').then(function(response) {
            $scope.Scene = response.data;
            $scope.currentScene = $scope.Scene[0];
            console.log($scope.currentScene);
        });
    };

    $scope.selectChoice = function(answerid) {
        console.log('answerScene: ' + answerid);
        //if ($scope.currentScene.choices[answerid].transition) {
            sceneId = $scope.currentScene.choices[answerid].transition;
            $scope.currentScene = $scope.Scene[sceneId]
       // }
    };
});
