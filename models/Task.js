const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    title: String,
    complete: {
        type: Boolean,
        default: false
    }
},

{ timestamps: true}
);

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task