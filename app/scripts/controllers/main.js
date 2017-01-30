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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
            
              this.board = [{
              id: 1,
              title: "Test Board",
              lists: [{
                      id: 1,
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
                      id: 2,
                      name: "Progress",
                      cards: [{
                              id: 3,
                              title: "Blog about Angular Dragula",
                              description: "Write week 25 blog on Angular Dragula"
                              }]
                      
                      }, {
                      id: 3,
                      name: "Completed",
                      cards: [{
                              id: 5,
                              title: "Blog about Jekyll to WordPress migration",
                              description: "Write week 24 blog on migrating from Jekyll to WordPress"
                              }]
                      }]
              }]
              
              this.alllist = [];
              conaole.log(board.lists);
              board.lists.forEach(function(cards, columnIndex){
                                  consol.log("lists"+lists)
                                     cards.forEach(function (card, rowIndex){
                                                          if (!this.alllist[rowIndex])
                                                          this.alllist[rowIndex] = [];
                                                          this.alllist[rowIndex][columnIndex] = card;
                                                          });
                                     });
              console.log(this.alllist);
      $scope.$on('bag.drop', function(e, el, target){
                         console.log(`Dropped ${el[0].id} on target ${target[0].id}`);
         });
              $scope.RemoveTask = function(id){
              
              }
  });
