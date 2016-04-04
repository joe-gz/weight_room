
"use strict";

(function(){
  angular
  .module("orgs")
  .factory("OrgFactory", [
    "$resource",
    OrgFactoryFunction
  ]);

  function OrgFactoryFunction($resource){
    return $resource("http://localhost:3000/orgs/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
