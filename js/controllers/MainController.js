app.controller('MainController', ['$scope', function($scope) {
  $scope.title = "catstagram";

  $scope.cats = [
    {
      username: "@spoons",
      name: "Spooky",
      age: 13,
      breed: "tuxedo",
      likes: 0
    },
    {
      username: "@beal",
      name: "Bill",
      age: 11,
      breed: "tuxedo",
      likes: 0
    }
  ];

  $scope.addOne = function(index) {
    $scope.cats[index].likes += 1;
  };
}]);
