const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController")

router.post("/create", TaskController.create)
router.get("/getAll", TaskController.getAll)

module.exports = router;