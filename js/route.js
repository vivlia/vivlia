vivliaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/myProfile', {
        templateUrl: 'partials/userProfile.html',
      }).
      when('/postaBook', {
        templateUrl: 'partials/booksGallery.html',
      }).
      when('/postAAdd', {
        templateUrl: 'partials/postBookAd.html',
      }).
      otherwise({
        redirectTo: 'profile.html#/myProfile'
      });
  }]);