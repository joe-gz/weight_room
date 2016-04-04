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
        scope.update = function(weight){
          console.log(weight);
          scope.org.weight.push(parseInt(weight));
          scope.org.personCount++
          scope.org.$update({id:scope.org._id},function(response){
            console.log(response);
          });
        }
      }
    }
  }
}())
