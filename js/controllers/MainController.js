app.controller('MainController', ['$scope', function($scope) {

  $scope.posts = [
    {
      username: "@spoons",
      url: 'https://scontent-ord1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/10170878_10203754165722864_842340749_n.jpg?oh=75879aba092835f49a79982e860176c5&oe=568FF573',
      postContent: "sleeping on the couch",
      likes: 0
    },
    {
      username: "@blt",
      url: 'https://scontent-ord1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/14816_10200575407575897_751433425_n.jpg?oh=e0c3368dd3a14dbf55fcd6175683940e&oe=568A011D',
      postContent: "greeting the fam",
      likes: 0
    }
  ];

  $scope.addLike = function(index) {
    $scope.posts[index].likes += 1;
  };

  $scope.addPost = function() {
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
