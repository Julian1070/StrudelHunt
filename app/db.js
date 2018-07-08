const mongoose = require('mongoose')
const ChallengeTemplate = require('./models/ChallengeTemplate')
const TaskTemplate = require('./models/TaskTemplate')

const mongoDB = 'mongodb://127.0.0.1/my_database'
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Delete templates to clear duplicates
ChallengeTemplate.deleteMany(function (err) {
  if (err) return console.error(err)
})

// TaskTemplate.deleteMany(function (err) {
//   if (err) return console.error(err)
// })

// create an example challenge
const challenge = new ChallengeTemplate({
  name: 'Nob Hill',
  description: 'A Nob Hill challenge',
  location: [37.792978, -122.415640],
  city: 'San Francisco',
  zip: 94108,
  // tasks: Array,
  difficulty: 'Hard',
  date_created: '2018-01-01',
  hint_limit: 3,
  point_value: 200,
  active: true
})

// save example challenge
challenge.save(function(err) {
  if (err) {
    console.error(err)
  }
})
