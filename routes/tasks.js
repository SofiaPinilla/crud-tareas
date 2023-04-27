const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController")

router.post("/create", TaskController.create)

module.exports = router;