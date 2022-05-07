var Upcoming = require("../models/upcoming");
const fs=require("fs");
var uniqid=require('uniqid');
var propertyId=uniqid();

exports.upcoming_create = function(req, res, next) {
   var upcoming = new Upcoming({
    name:req.body.name,
    email:req.body.email,
    contact:req.body.contact,
    propertyId:propertyId,
    propertyName:req.body.propertyName,
    Locality:req.body.Locality,
    areaInSqFt:req.body.areaInSqFt,
    propertyType:req.body.propertyType,
    description:req.body.description,
    parking:req.body.parking,
    swimmingPool:req.body.swimmingPool,
    garden: req.body.garden,
    bedRooms:req.body.bedRooms,
    bathRooms:req.body.bathRooms,
    price:req.body.price,
    electricity:req.body.electricity,
    water:req.body.water,
    drainage:req.body.drainage,
    highlights:req.body.highlights,
    address:req.body.address,
    status:req.body.status,
    approval:req.body.approval,
    propertyImages:req.body.propertyImages,
    posted:req.body.posted
  });
  upcoming.save({ new: true }, function(err, upcoming) {
    if (err) {
      return next(err);
    }
    res.status(200).send("backend prods::::"+JSON.stringify(req.body)+"Response::::"+upcoming);
  });
}; 
exports.upcoming_update = function(req, res, next) {
  Upcoming.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
    function(err, upcoming) {
      if (err) return next(err);
      res.status(200).send(upcoming);
    }
  );
};
 
exports.upcoming_delete = function(req, res, next) {
  Upcoming.findByIdAndRemove(req.params.id, function(err, product) {
    if (err) return next(err);
    res.status(200).send(product);
  });
};
 
exports.upcoming_all = function(req, res, next) {
  Upcoming.find({}, function(err, products) {
    if (err) return next(err);
    res.status(200).send(products);
  });
};