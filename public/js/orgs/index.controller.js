"use strict";

(function(){
  angular
  .module("orgs")
  .controller("OrgIndexController", [
    "OrgFactory",
    OrgIndexControllerFunction
  ]);

  function OrgIndexControllerFunction(OrgFactory){
    var vm = this
    this.orgs = OrgFactory.query();
    this.weights = []
    this.orgs.$promise.then(function(data){
      data.forEach(function(org){
        vm.averageWeights = function(weights){
          var sum = 0
          weights.forEach(function(weight){
            sum += weight
          })
          return (sum/weights.length);
        };
        vm.weights.push({
          title:org.title,
          weight:vm.averageWeights(org.weight),
          count:org.personCount})
        })
        console.log(vm.weights);
        vm.contentDone = true;
      })
      this.newOrg = new OrgFactory();
    }
  }());
