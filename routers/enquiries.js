var express = require("express");
var router = express.Router();
 
var enquiry_controller = require("../controllers/enquiries");
 
router.post("/", enquiry_controller.enquiry_create);
 
router.get("/:id",enquiry_controller.enquiry_readone);
 
router.delete("/:id",enquiry_controller.enquiry_delete);
 
router.get("/",enquiry_controller.enquiry_all);
 
module.exports = router;