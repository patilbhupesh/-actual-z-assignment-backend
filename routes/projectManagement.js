var express = require("express");
const projectController = require("../controllers/projectController");
const auth = require("../middleware/auth");

var router = express.Router();

router.get("/", auth, projectController.getProjects);

router.post("/upload", auth, projectController.addProjects);

module.exports = router;
