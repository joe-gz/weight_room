"use strict";

(function(){
  angular
  .module("orgs")

  //camel cased directive name
  //in your HTML, this will be named as bars-chart
  .directive('barChart', function ($parse) {
    //explicitly creating a directive definition variable
    //this may look verbose but is good for clarification purposes
    //in real life you'd want to simply return the object {...}
    var directiveDefinitionObject = {
      //We restrict its use to an element
      //as usually  <bars-chart> is semantically
      //more understandable
      restrict: 'E',
      //this is important,
      //we don't want to overwrite our directive declaration
      //in the HTML mark-up
      replace: false,
      //our data source would be an array
      //passed thru chart-data attribute
      scope: {data: '=chartData'},
      link: function (scope, element, attrs) {

        console.log(scope.data);
        scope.weightTotal = 0
        scope.addData = function(data){
          data.forEach(function(weight){
            console.log(weight.weight);
            console.log(weight.count);
            scope.weightTotal += (parseInt(weight.weight)*parseInt(weight.count))
          })
        }
        scope.addData(scope.data)
        console.log(scope.weightTotal);

        //in D3, any selection[0] contains the group
        //selection[0][0] is the DOM node
        //but we won't need that this time
        var chart = d3.select(element[0]);
        //to our original directive markup bars-chart
        //we add a div with out chart stling and bind each
        //data entry to the chart
        scope.loadChart = function(){
          console.log(scope.data);
          // color    = d3.scale.category10();
          var bar = chart.append("div").attr("class", "chart")
          .selectAll('div')
          .data(scope.data).enter();

          bar.append("div")
          .attr("class", "bar")
          .transition().ease("elastic")
          .style("width", function(d) { return ((d.weight*d.count)/scope.weightTotal)*100 + "%"; })
          .style("background-color", "blue")
          .text(function(d) { return d.title +" "+ Math.round(d.weight); });
          //a little of magic: setting it's width based
          //on the data value (d)
          //and text all with a smooth transition
        };
        scope.loadChart();
      }
    };
    return directiveDefinitionObject;
  });

}());
