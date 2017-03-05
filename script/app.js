angular.module("dev-mt-in", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home',
    {
      url: '/home',
      templateUrl: 'initial/profiledetails.html',
      controller: 'profileDetailsCtrl'
    })
    .state('landing',
    {
      url: '/landing',
      templateUrl: 'landing/landing.html',
      controller: 'landingCtrl'
    })
    .state('friends',
      {
        url: '/friends',
        templateUrl: 'friends/friends.html',
        controller: 'friendCtrl'
      })
      .state('profiles',
        {
          url: '/profiles',
          templateUrl: 'profile/profile.html',
          controller: 'profileCtrl'
        });

    $urlRouterProvider.otherwise('/');
})
