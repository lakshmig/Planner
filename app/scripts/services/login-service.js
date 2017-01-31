'use strict';

/**
 * @ngdoc service
 * @name assignmentApp.LoginService
 * @description
 * # LoginService
 * Service in the assignmentApp.
 */
angular.module('plannerApp')
.service('LoginService', function LoginService($http,$q) {
         // AngularJS will instantiate a singleton by calling "new" on this function
         var usersList=[];
         return {
         Login: function (user) {
         console.log(user);
         var userfound =false;
         var deferred = $q.defer();
         var promise = deferred.promise;
         $http.get("http://swapi.co/api/people/").then(
                        function (data) {
                        usersList = data.data.results;
                        console.log(JSON.stringify(usersList))
                        for (var x in usersList) {
                           if (user.name == usersList[x].name && user.password == usersList[x].birth_year) {
                                userfound = true;
                          }
                        }// end of for
                         if(userfound){
                              console.log("User found")
                              deferred.resolve('Welcome ' + name + '!');
                        }else{
                             console.log("User not found")
                             deferred.reject('Wrong credentials.');
                        }
                                                       
                        })// end of http.
        
         promise.success = function (fn) {
         promise.then(fn);
         return promise;
         }
         promise.error = function (fn) {
         promise.then(null, fn);
         return promise;
         }
         return promise;
         }
         }

});
