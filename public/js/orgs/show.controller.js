"use strict";

(function(){
  angular
  .module("orgs")
  .controller("OrgShowController", [
    "OrgFactory",
    "$stateParams",
    OrgShowControllerFunction
  ]);

  function OrgShowControllerFunction(OrgFactory, $stateParams){
    this.org = OrgFactory.get({id: $stateParams.id});
  }
}());
