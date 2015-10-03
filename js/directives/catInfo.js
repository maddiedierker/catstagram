app.directive('catInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/catInfo.html'
  };
});
