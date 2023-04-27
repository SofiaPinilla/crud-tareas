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

    async getAll(req, res) {
        try {
            const tasks = await Task.find()
            res.status(200).send(tasks)

        } catch (error) {
            console.error(error)
            res.status(500).send({message: "Error getting task", error})

        }
    }
}

module.exports = TaskController