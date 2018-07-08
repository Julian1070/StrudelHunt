const mongoose = require('mongoose')
const ChallengeTemplate = require('./models/ChallengeTemplate')

const mongoDB = 'mongodb://127.0.0.1/my_database'
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Delete templates to clear duplicates
ChallengeTemplate.deleteMany(function (err) {
  console.log('Deleted')
})

// create an example challenge
const challenge = new ChallengeTemplate({ name: 'Nob Hill' });

// save example challenge
challenge.save(function(err) {
  console.log('Challenge saved')
  if (err) {
    console.error(err)
  }
})
