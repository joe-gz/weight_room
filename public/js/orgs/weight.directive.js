"use strict";

(function(){
  angular
  .module("orgs")
  .directive("weightForm",[
    "OrgFactory",
    "$state",
    OrgFormFunction
  ]);

  function OrgFormFunction(OrgFactory,$state){
    return{
      templateUrl:"js/orgs/_weight.html",
      scope:{
        org:"="
      },
      link: function(scope){
        scope.update = function(){
          console.log(scope.org.weight);
          scope.org.$update({id:scope.org._id},function(response){
            console.log(response);
          });
        }
      }
    }
  }
}())
