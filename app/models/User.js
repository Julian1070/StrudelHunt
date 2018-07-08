const mongoose = require('mongoose')
const Challenge = require('./Challenge.js')
const ChallengeSchema = mongoose.model('Challenge').schema

const Schema = mongoose.Schema

const UserSchema = new Schema({
    id: Schema.Types.ObjectId,
    username: String,
    email: String,
    password_hash: String,
    challenges: [ChallengeSchema],
    points: Number
})

const User = mongoose.model('User', UserSchema)

module.exports = User
