const mongoose = require('mongoose')
const ChallengeTemplate = require('./ChallengeTemplate')

//Define a schema
const Schema = mongoose.Schema

const Challenge = ChallengeTemplate.discriminator("Challenge",
    new Schema({
      //completed_tasks: Array,
      date_started: Date,
      date_finished: Date,
      is_completed: Boolean,
      is_in_progress: Boolean,
      calculated_points: Number
}))

// const Challenge = mongoose.model('Challenge', ChallengeSchema)

module.exports = Challenge
