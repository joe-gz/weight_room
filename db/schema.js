var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var OrgSchema = new Schema()

OrgSchema.add({
  title: String,
  weight: Array,
  personCount: Number
})

var OrgModel = mongoose.model("Org",OrgSchema)
