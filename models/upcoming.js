var mongoose = require("mongoose");
var Schema = mongoose.Schema;
 
var UpcomingSchema = new Schema({
  propertyId:{type:String},
  propertyName:{type:String},
  Locality:{type:String},
  areaInSqFt:{type:Number},
  propertyType:{type:String},
  description:{type:String},
  parking:{type:Boolean},
  swimmingPool:{type:Boolean},
  garden: {type:Boolean},
  bedRooms: { type:Number},
  bathRooms: { type:Number},
  price:{type:Number},
  electricity:{type:Boolean},
  water:{type:Boolean},
  drainage:{type:Boolean},
  highlights:{type:Array},
  address:{type:String},
  status:{type:String},
  approval:{type:String},
  propertyImages:{type:Array},
  posted:{type:Boolean}
});
 
// Export the model
module.exports = mongoose.model("Upcoming", UpcomingSchema);