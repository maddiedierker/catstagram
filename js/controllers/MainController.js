app.controller('MainController', ['$scope', 'posts', function($scope, posts) {

  $scope.posts = posts.posts;

  $scope.addLike = function(index) {
    $scope.posts[index].likes += 1;
  };

  $scope.addPost = function() {
    if (!$scope.url || $scope.url === '') { return; }

    $scope.posts.push({
      username: "@madelynkasula",
      url: $scope.url,
      postContent: $scope.postContent,
      likes: 0
    });

    $scope.url = '';
    $scope.postContent = '';
  };
}]);
