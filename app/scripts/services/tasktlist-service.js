'use strict';

/**
 * @ngdoc service
 * @name desktopApp.TasktListService
 * @description
 * # TasktListService
 * Service in the desktopApp.
 */
angular.module('desktopApp')
  .service('TasktListService', function TasktListService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
           var TodoList={
                          {
                            id: 1,
                            title: "Lean Go programming language",
                            description: "I want to learn Go so that I can build applications with it.",
                            status:1
                          },
                          {
                            id: 2,
                            title: "Finish Missing Kids Android application",
                            description: "Work on my Android application",
                            status:1
                         },
                         {
                            id: 3,
                            title: "Blog about Angular Dragula",
                            description: "Write week 25 blog on Angular Dragula",
                            status:2
                        },
                        {
                            id: 5,
                            title: "Blog about Jekyll to WordPress migration",
                            description: "Write week 24 blog on migrating from Jekyll to WordPress",
                            status:3
                        }
           
                     };

           return{
           getTodoList:function(){
           return TodoList;
           }
           
           }
  });
