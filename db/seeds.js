var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/weight_room");

var OrgModel = require('../models/orgs');

OrgModel.remove({},function(err){
  console.log(err);
})

var org1 = new OrgModel({title:"General Assembly",weight:[150,120,155,210],personCount:4})
var org2 = new OrgModel({title:"The Advisory Board Company",weight:[110,175,250],personCount:3})
var org3 = new OrgModel({title:"Target",weight:[145,130,190,185],personCount:4})

var orgs = [org1,org2,org3]

for (var i = 0; i < orgs.length; i++){
  orgs[i].save(function(err){
    if (err){
      console.log(err);
    } else {
      console.log('Org complete!');
    }
  })
}
