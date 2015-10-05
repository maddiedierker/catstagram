var app = angular.module("catstagram", ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainController'
    });
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsController'
    });

  $urlRouterProvider.otherwise('home');

}]);
