'use strict';

/**
 * @ngdoc function
 * @name plannerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the plannerApp
 */
angular.module('plannerApp')
  .controller('MainCtrl', function ($scope) {
            
              this.board = {
              id: 1,
              title: "Test Board",
              lists: [{
                      id: 1,
                      name: "All",
                      cards: [{
                              id: 1,
                              title: "Learn go Language ",
                              description: "I want to learn Go so that I can build applications with it."
                              }, {
                              id: 2,
                              title: "Finish Missing Kids Android application",
                              description: "Work on my Android application"
                              },{
                              id: 3,
                              title: "Blog about Angular Dragula",
                              description: "Write week 25 blog on Angular Dragula"
                              },{
                              id: 3,
                              title: "Blog about Angular Dragula",
                              description: "Write week 25 blog on Angular Dragula"
                              },{
                              id: 5,
                              title: "Blog about Jekyll to WordPress migration",
                              description: "Write week 24 blog on migrating from Jekyll to WordPress"
                              }]
                      },
                      {
                      id: 2,
                      name: "To Do",
                      cards: [{
                              id: 1,
                              title: "Learn go Language ",
                              description: "I want to learn Go so that I can build applications with it."
                              }, {
                              id: 2,
                              title: "Finish Missing Kids Android application",
                              description: "Work on my Android application"
                              }]
                      }, {
                      id: 3,
                      name: "Progress",
                      cards: [{
                              id: 3,
                              title: "Blog about Angular Dragula",
                              description: "Write week 25 blog on Angular Dragula"
                              }]
                      
                      }, {
                      id: 4,
                      name: "Completed",
                      cards: [{
                              id: 4,
                              title: "Blog about Jekyll to WordPress migration",
                              description: "Write week 24 blog on migrating from Jekyll to WordPress"
                              }]
                      }]
              }
              
              
      $scope.$on('bag.drop', function(e, el, target){
                         console.log(`Dropped ${el[0].id} on target ${target[0].id}`);
         });
});
