const mongoose = require('mongoose')
const TaskTemplateSchema = require('./TaskTemplate').schema

const TaskSchema = TaskTemplateSchema

TaskSchema.add({
  is_completed: Boolean,
  date_started: Date,
  date_completed: Date
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
