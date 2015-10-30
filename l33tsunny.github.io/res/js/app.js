var app = angular.module('sunnyApp',['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'res/views/home.html',
        controller: 'homeController'
      }).
      when('/about-me', {
        templateUrl: 'res/views/about-me.html',
        controller: 'aboutController'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);


app.controller('homeController', function($scope,$http){
  
});

app.controller('aboutController', function($scope,$http){
  $scope.name = "SunNy";
});