(function() {
  'use strict';

  angular
  .module('users')
  .controller('UsersController', function ($scope, $stateParams, UsersService, $location){
    UsersService.getPosts().success(function (posts) {
        $scope.posts = posts;
      });

      if($routeParams.userId) {
        UsersService.getSingleUser($routeParams.userId).success(function (singlePost) {
          console.log(singleUser);
          $scope.singleUser = singleUser;
        });
      }

      $scope.newUser = function (user) {
        UsersService.addUser(user);
      };

      $scope.editUser = function (editedUser) {
        UsersService.updateUser(editedUser);
      };
      $scope.deleteUser = function (userId) {
        UsersService.removeUser(userId);
      };

  });

}());
