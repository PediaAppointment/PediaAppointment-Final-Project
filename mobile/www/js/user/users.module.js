
angular
  .module('users', [
    'ui.router'
  ])

.config(function($stateProvider) {
  $stateProvider

  // all users
    .state('app.users', {
      url: '/users',

      views: {
        'menuContent': {
          templateUrl: 'templates/user/users.html',
          controller: 'UsersController'
        }
      }
    })

    // user profile page
    .state('app.userprofile', {
      url: '/userprofile',
      views: {
        'menuContent': {
          templateUrl: 'templates/user/userprofile.html',
          controller: 'UsersController',
          resolve: {
            userId: function ($q, UsersService) {
              var deferred = $q.defer();
              UsersService.getSingleUser().success(function (singleUser) {
                deferred.resolve(singleUser._id);
              });
              return deferred.promise;
            }
          }
        }
      }
    })
    // edit user
    .state('app.edituser', {
      url: '/users/:userId/edit',

      views: {
        'menuContent': {
          templateUrl: 'templates/user/edituser.html',
          controller: 'UsersController',
          resolve: {
            userId: function ($q, UsersService) {
              var deferred = $q.defer();
              UsersService.getSingleUser().success(function (singleUser) {
                deferred.resolve(singleUser._id);
              });
              return deferred.promise;
            }
          }
        }
      }
    })

      // addUser
    .state('auth.newuser', {
      url: '/newuser',

      views: {
        'login': {
          templateUrl: 'templates/user/newuser.html',
          controller: 'LoginController'
        }
      }
    });









  });
