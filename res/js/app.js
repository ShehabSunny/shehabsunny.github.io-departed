var app = angular.module('sunnyApp',['ngRoute']);

app.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'res/views/home.html',
        controller: 'homeController'
      }).
      when('/about', {
        templateUrl: 'res/views/about-me.html',
        controller: 'aboutController'
      }).
      otherwise({
        redirectTo: '/'
      });
	  $locationProvider.html5Mode(true);
}]);


app.controller('homeController', function($scope,$http){

  swing('.navbar');
  swing('#box');
  var showSkill = true;
  var showProject = true;
  var showEducation = true;

  //scroll
  $(function() {
    var skillTop = $('#skill').offset().top - window.innerHeight;
    var projectTop = $('#project').offset().top - window.innerHeight;
    var educationTop = $('#education').offset().top - window.innerHeight;

    $(window).scroll(function(){
      var pTop = $('body').scrollTop();
      if( pTop > skillTop ){
        show_skill();
      }

      if( pTop > projectTop ){
        show_project();
      }

      if( pTop > educationTop ){
        show_education();
      }
    });
  });

  function show_skill(){
    if(showSkill){
      TweenMax.staggerFrom(".skill", 2, {scale:0.5, opacity:0, delay:0.6, ease:Elastic.easeOut, force3D:true}, 0.2);
    }
    showSkill=false;
  }

  function show_project(){
    if(showProject){
      TweenMax.staggerFrom(".project", 2, {scale:0.5, opacity:0, delay:0.6, ease:Elastic.easeOut, force3D:true}, 0.2);
    }
    showProject=false;
  }

  function show_education(){
    if(showEducation){
      TweenMax.staggerFrom(".education", 3, {scale:0.5, opacity:0, delay:0.6, ease:Elastic.easeOut, force3D:true}, 0.2);
    }
    showEducation=false;
  }
  //scroll end

  // just so you can repeat the effect easily. It's not configured well for replaying while it's in motion though; wait until the animation stops to get the full effect again.
  $('#box').on('mousemove', function() { swing('#box') });
  $('.navbar').on('mousemove', function() { swing('.navbar') });

  var one = document.getElementById('one');
  $('#one').on('mousemove', function() { animate('.col-md-12') });

  function swing(target) {
    // the values in vars can (and should) be tweaked to modify the way the swing works
    // * = affected by power
    var vars = {
      origin: 'top center',   // transformOrigin
      perspective: 2000,       // transformPerspective
      ease: Power1.easeInOut, // an easeInOut should really be used here...
      power: 1,               // multiplier for the effect that is reduced to 0 over the duration
      duration: 5,            // total length of the effect (well, it can be up to vars.speed longer than this)
      rotation: -10,          // start rotation, also stores target rotations during tween
      maxrotation: 30,        // * max rotation after starting
      speed: 0.5,             // minimum duration for each swing
      maxspeed: 0.2           // * extra duration to add to the larger swings (any sort of real physics seems like overkill)
    };

    // target could be a string selector (it will be selected each swing though...), or a DOM or jQuery object
    vars.target = target;

    // starting position
    TweenMax.set(vars.target, {
      rotationX: vars.rotation,
      transformOrigin: vars.origin,
      transformPerspective: vars.perspective
    });

    TweenMax.to(vars, vars.duration, {power: 0, delay: 0, onStart: nextSwing, onStartParams: [vars]});
  }


  function nextSwing(vars) {
    if (vars.power > 0) {
      vars.rotation = (vars.rotation > 0 ? -1 : 1) * vars.maxrotation * vars.power;
      TweenMax.to(vars.target, vars.speed + vars.maxspeed * vars.power, { rotationX: vars.rotation, ease: vars.ease, onComplete: nextSwing, onCompleteParams: [vars] });
    } else {
      TweenMax.to(vars.target, vars.speed, { rotationX: 0, ease: vars.ease, clearProps: 'all' });
    }
  }
});

app.controller('fourofourController', function($scope,$http){
  var path = $location.path();
  $window.location.href = '/#/'+path;
});

app.controller('aboutController', function($scope,$http){
  $scope.name = "SunNy";
});
