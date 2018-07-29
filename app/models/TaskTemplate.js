const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TaskTemplateSchema = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    description: String,
    location: [Number],
    date_created: Date,
    point_value: Number,
    hints: [String]
})

const TaskTemplate = mongoose.model('TaskTemplate', TaskTemplateSchema)

module.exports = TaskTemplate
