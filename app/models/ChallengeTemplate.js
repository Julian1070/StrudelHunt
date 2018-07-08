const mongoose = require('mongoose')
const TaskTemplate = require('./TaskTemplate.js')
// const TaskTemplateSchema = mongoose.model('TaskTemplate').schema

const Schema = mongoose.Schema

const ChallengeTemplateSchema = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    description: String,
    location: [Number],
    city: String,
    zip: Number,
    // tasks: [TaskTemplateSchema],
    difficulty: String,
    date_created: Date,
    hint_limit: Number,
    point_value: Number,
    active: Boolean
})

const ChallengeTemplate = mongoose.model('ChallengeTemplate', ChallengeTemplateSchema)

module.exports = ChallengeTemplate
