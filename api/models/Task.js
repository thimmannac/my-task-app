const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true,
        maxLength: [20, 'Name cannot be more than 20 characters']

    },
    status: {
        type: String,
        enum: ['PENDING', "IN_PROGRESS", "COMPLETED",],
        default: 'PENDING'
    }
})

const model = mongoose.model("Task", TaskSchema)
module.exports = model