var express = require('express');
var OrgModel = require('../models/orgs');
var router = express.Router();

var orgsController = {};

orgsController.allOrgs = function(req,res){
  console.log('allOrgs');
  OrgModel.find(function(err,org){
    if(org){
      res.json(org)
    } else {
      console.log(err);
    }
  });
}

orgsController.showOrg = function(req,res){
  OrgModel.findById(req.params.id).then(function(org){
    res.json(org);
  })
}

orgsController.updateOrg = function(req,res){
  OrgModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(org){
    console.log(org);
    res.json(org);
  });
};

orgsController.createOrg = function(req,res){
  var org = {
    title:req.body.title,
    personCount:1
  };
  console.log(org);
  new OrgModel(org).save().then(function(org){
    console.log('success');
    res.json(org)
  })
}

orgsController.deleteOrg = function(req,res){
  OrgModel.findById(req.params.id).then(function(org){
    return org.remove();
  }).then(function(){
    console.log("delete");
    res.json({success: true});
  })
}

module.exports = orgsController;
