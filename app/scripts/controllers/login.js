'use strict';

/**
 * @ngdoc function
 * @name assignmentApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the assignmentApp
 */
angular.module('plannerApp')
  .controller('LoginCtrl', function ($scope,$rootScope,$location,LoginService,FlashService) {
              $scope.user=[];
              $scope.user.name="";
              $scope.user.password="";
              $scope.attemptLogin = function() {
              LoginService.Login($scope.user).then(
                    function handleResolve( value ) {
                    console.log( "Resolved!" );
                    $location.path( "/main" );
              },
                    function handleReject( error ) {
                    FlashService.Error("Username or password is incorrect.");
                    
             });
    }
              
              
});
