"use strict";

(function(){
  angular
  .module("orgs")
  .controller("OrgIndexController", [
    "OrgFactory",
    OrgIndexControllerFunction
  ]);

  function OrgIndexControllerFunction(OrgFactory){
    this.orgs = OrgFactory.query();
    this.newOrg = new OrgFactory();
  }
}());
