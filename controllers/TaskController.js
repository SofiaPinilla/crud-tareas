const Task = require("../models/Task");

const TaskController = {

    async create(req, res) {
        try{

            const task = await Task.create(req.body)

            res.status(201).send({message: "Task created", task})

        } catch(error) {
            console.error(error)
            res.status(500).send({message: "Error creating task", error})
        }
    },
}

module.exports = TaskController