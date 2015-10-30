var app = angular.module('sunnyApp',['ngRoute']);

app.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
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
	  $locationProvider.html5Mode(true);
}]);


app.controller('homeController', function($scope,$http){

});

app.controller('fourofourController', function($scope,$http){
  var path = $location.path();
  $window.location.href = '/#/'+path;
});

app.controller('aboutController', function($scope,$http){
  $scope.name = "SunNy";
});
