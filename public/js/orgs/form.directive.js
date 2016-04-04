"use strict";

(function(){
  angular
  .module("orgs")
  .directive("orgForm",[
    "OrgFactory",
    "$state",
    OrgFormFunction
  ]);

  function OrgFormFunction(OrgFactory,$state){
    return{
      templateUrl:"js/orgs/_form.html",
      scope:{
        org:"="
      },
      link: function(scope){
        scope.create = function(){
          console.log('create!');
          console.log(scope.org);
          scope.org.$save(function(response){
            $state.go("orgIndex", {}, {reload: true});
          });
        },
        scope.update = function(){
          scope.org.$update({id:scope.org._id},function(response){
            console.log(response);
          });
        },
        scope.delete = function(){
          scope.org.$delete({id:scope.org._id},function(response){
            $state.go("orgIndex", {}, {reload: true});
          });
        }
      }
    }
  }
}())
