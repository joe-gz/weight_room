"use strict";

(function(){
  angular
  .module("weightRoom", [
    "ui.router",
    "orgs"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("orgIndex", {
      url: "/",
      templateUrl: "js/orgs/index.html",
      controller: "OrgIndexController",
      controllerAs: "OrgIndexViewModel"
    })
    .state("orgShow", {
      url: "/orgs/:id",
      templateUrl: "js/orgs/show.html",
      controller: "OrgShowController",
      controllerAs: "OrgShowViewModel"
    });
  }
}());
