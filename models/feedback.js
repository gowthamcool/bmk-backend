var mongoose = require("mongoose");
var Schema = mongoose.Schema;
 
var FeedbackSchema = new Schema({
    feedbackId:{type:String},
    name:{type:String},
    email:{type:String},
    description:{type:String},
});

module.exports = mongoose.model("Feedback", FeedbackSchema);