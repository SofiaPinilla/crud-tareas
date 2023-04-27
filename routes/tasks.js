const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController")

router.post("/create", TaskController.create)
router.get("/getAll", TaskController.getAll)
router.get("/getById/:_id", TaskController.getById)
router.put("/taskCompleted/:_id",TaskController.markTaskCompleted)

module.exports = router;