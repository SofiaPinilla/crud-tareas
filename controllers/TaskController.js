const Task = require("../models/Task");

const TaskController = {

    async create(req, res) {
        try {

            const task = await Task.create(req.body)

            res.status(201).send({ message: "Task created", task })

        } catch (error) {
            console.error(error)
            res.status(500).send({ message: "Error creating task", error })
        }
    },

    async getAll(req, res) {
        try {
            const tasks = await Task.find()

            res.status(200).send(tasks)

        } catch (error) {
            console.error(error)
            res.status(500).send({ message: "Error getting tasks", error })

        }
    },

    async getById(req, res) {
        try {
            const task = await Task.findById(req.params._id)
            if (!task) {
                return res.status(404).send({ message: 'Task not found' })
            };
            res.status(200).send(task)

        } catch (error) {
            console.error(error)
            res.status(500).send({ message: "Error getting task", error })
        }
    },
    async markTaskCompleted(req,res){
        try {
            const task = await Task.findByIdAndUpdate(req.params._id,{
                complete:true
            },
            {new:true})
            res.status(200).send({message:'Task completed',task})
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: "Error marking task as completed", error })
        
        }
    },

    async updateTask(req, res) {
        try {
            const task = await Task.findByIdAndUpdate(req.params._id, {title: req.body.title}, {new:true})
            res.status(200).send({message: "Task updated", task})
        }catch(error){
            console.error(error);
            res.status(500).send({message: "Error updating task", error})
        }
    },
    
    async deleteTask(req, res){
        try {
            const task = await Task.findByIdAndDelete(req.params._id)
            if(!task){
                return res.status(404).send({message: 'Task not found'})
            }
            res.status(200).send({message: 'Task deleted successfully', task})
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "Error deleting task", error})
        }
    }
}

module.exports = TaskController