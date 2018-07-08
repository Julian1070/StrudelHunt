const mongoose = require('mongoose')

//Define a schema
const Schema = mongoose.Schema

const ChallengeTemplateSchema = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    description: String,
    location: [Number],
    city: String,
    zip: Number,
    tasks: Array,
    difficulty: String,
    date_created: Date,
    hint_limit: Number,
    point_value: Number
})

const ChallengeTemplate = mongoose.model('ChallengeTemplate', ChallengeTemplateSchema)

module.exports = ChallengeTemplate
