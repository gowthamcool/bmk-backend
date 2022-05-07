var express = require("express");
var router = express.Router();
 
var upcoming_controller = require("../controllers/upcoming");
 
router.post("/", upcoming_controller.upcoming_create);
  
router.put("/:id", upcoming_controller.upcoming_update);
 
router.delete("/:id", upcoming_controller.upcoming_delete);
 
router.get("/", upcoming_controller.upcoming_all);
 
module.exports = router;