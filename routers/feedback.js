var express = require("express");
var router = express.Router();
 
var feedback_controller = require("../controllers/feedback");
 
router.post("/", feedback_controller.feedback_create);
 
router.get("/:id",feedback_controller.feedback_readone);
 
router.get("/",feedback_controller.feedback_all);
 
module.exports = router;