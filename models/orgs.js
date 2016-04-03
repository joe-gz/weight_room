require("../db/schema");
var mongoose = require('mongoose');

var OrgModel = mongoose.model('Org')
module.exports = OrgModel
