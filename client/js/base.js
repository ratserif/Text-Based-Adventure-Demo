function MyController($scope, $http) {
    
    $scope.Scene = [];
    $scope.color = '';
    $scope.message = '';
    var sceneId = 0;
    
    $scope.postData = function() {
        $http.post('/api/v1/postData', {color: $scope.color}).then(function(response) {
            $scope.message = response.data.message;
        });
        $scope.color = '';
    };
    
    $scope.getData = function() {
        $http.get('/api/v1/getData').then(function(response) {
            $scope.Scene = response.data;
            $scope.currentScene =  $scope.Scene[0];
            console.log($scope.currentScene);
        });
    };

 $scope.selectChoice = function(answerid) {
        console.log('answerScene: ' + answerid);
        if (!$scope.currentScene.choices [answerid].transition)
        sceneId = answerid;
        $scope.currentScene = $scope.Scene[sceneId]
         if (sceneId == $scope.Scene.length) {
            $scope.done = true;
            console.log("You are done");
        }
    };
}
