"use strict";

(function(){
  angular
  .module("example", [
    "ui.router",
    "compliments"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("Index", {
      url: "/",
      templateUrl: "js/index.html",
      controller: "IndexController",
      controllerAs: "IndexViewModel"
    });
  }
})();
