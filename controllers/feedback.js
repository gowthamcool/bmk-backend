var Feedback = require("../models/feedback");
var uniqid=require('uniqid');
var feedbackId=uniqid();


exports.feedback_create = function(req, res, next) {
   var feedback = new Feedback({
    feedbackId:feedbackId,
    name:req.body.name,
    email:req.body.email,
    description:req.body.description
  });
  feedback.save({ new: true }, function(err, feedback) {
    if (err) {
      return next(err);
    }
    res.status(200).send("backend prods::::"+JSON.stringify(req.body)+"Response::::"+feedback);
  });
};
 
exports.feedback_readone = function(req, res, next) {
    Feedback.findById(req.params.id, function(err, feedback) {
    if (err) {
      return next(err);
    }
    res.status(200).send(feedback);
  });
};
  
exports.feedback_all = function(req, res, next) {
    Feedback.find({}, function(err, feedback) {
    if (err) return next(err);
    res.status(200).send(feedback);
  });
};