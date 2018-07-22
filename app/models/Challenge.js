const mongoose = require('mongoose')
const ChallengeTemplateSchema = require('./ChallengeTemplate').schema

const ChallengeSchema = ChallengeTemplateSchema

ChallengeSchema.add({
  date_started: Date,
  date_finished: Date,
  is_completed: Boolean,
  is_in_progress: Boolean,
  calculated_points: Number
})

const Challenge = mongoose.model('Challenge', ChallengeSchema)

module.exports = Challenge
