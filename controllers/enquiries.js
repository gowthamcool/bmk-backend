var Enquiry = require("../models/enquirie");
var uniqid=require('uniqid');
var enquiryId=uniqid();


exports.enquiry_create = function(req, res, next) {
   var enquiry = new Enquiry({
    enquiryId:enquiryId,
    name:req.body.name,
    email:req.body.email,
    contact:req.body.contact,
    purpose:req.body.purpose,
    areainSqFt:req.body.area,
    locality:req.body.locality,
    price:req.body.price,
    description:req.body.description,
    approval:req.body.approval
  });
  enquiry.save({ new: true }, function(err, enquiry) {
    if (err) {
      return next(err);
    }
    res.status(200).send("backend prods::::"+JSON.stringify(req.body)+"Response::::"+enquiry);
  });
};
 
exports.enquiry_readone = function(req, res, next) {
  Enquiry.findById(req.params.id, function(err, enquiry) {
    if (err) {
      return next(err);
    }
    res.status(200).send(enquiry);
  });
};
 

exports.enquiry_delete = function(req, res, next) {
  Enquiry.findByIdAndRemove(req.params.id, function(err, enquiry) {
    if (err) return next(err);
    res.status(200).send(enquiry);
  });
};
 
exports.enquiry_all = function(req, res, next) {
  Enquiry.find({}, function(err, enquiry) {
    if (err) return next(err);
    res.status(200).send(enquiry);
  });
};