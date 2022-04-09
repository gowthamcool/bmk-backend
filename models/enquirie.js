var mongoose = require("mongoose");
var Schema = mongoose.Schema;
 
var EnquirySchema = new Schema({
    enquiryId:{type:String},
    name:{type:String},
    email:{type:String},
    contact:{type:String},
    purpose:{type:String},
    areainSqFt:{type:Number},
    locality:{type:String},
    price:{type:String},
    description:{type:String},
    approval:{type:String}
});

module.exports = mongoose.model("Enquiry", EnquirySchema);