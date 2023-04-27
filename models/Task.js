const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    title: String,
    complete: Boolean
},

{ timestamps: true}
);

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task