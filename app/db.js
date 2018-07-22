const mongoose = require('mongoose')
const ChallengeTemplate = require('./models/ChallengeTemplate')
const TaskTemplate = require('./models/TaskTemplate')
const Challenge = require('./models/Challenge')
const Task = require('./models/Task')

const mongoDB = 'mongodb://127.0.0.1/my_database'
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Delete templates to clear duplicates
ChallengeTemplate.deleteMany(function (err) {
  if (err) return console.error(err)
})

Challenge.deleteMany(function (err) {
  if (err) return console.error(err)
})

TaskTemplate.deleteMany(function (err) {
  if (err) return console.error(err)
})

Task.deleteMany(function (err) {
  if (err) return console.error(err)
})

// TaskTemplate.deleteMany(function (err) {
//   if (err) return console.error(err)
// })

// create an example challenge_template
const nob_hill_challenge_template = new ChallengeTemplate({
  name: 'Nob Hill',
  description: 'A Nob Hill challenge_template',
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

// create an example task_template
const nob_hill_task_template = new TaskTemplate({
  name: 'Nob Hill - Task 1',
  description: 'First task_template of the Nob Hill challenge_template',
  location: [37.792978, -122.415640],
  date_created: '2018-01-01',
  point_value: 10,
  hints: ["Look out for the large orange hot air ballon.", "Turn around, stupid."]
})

// save example challenge_template
nob_hill_challenge_template.save(function(err) {
  if (err) {
    console.error(err)
  }
})

// save example task_template
nob_hill_task_template.save(function(err) {
  if (err) {
    console.error(err)
  }
})

// create an example challenge
const nob_hill_challenge = new Challenge({
  name: nob_hill_challenge_template.name,
  description: nob_hill_challenge_template.description,
  location: nob_hill_challenge_template.location,
  city: nob_hill_challenge_template.city,
  zip: nob_hill_challenge_template.zip,
  // tasks: nob_hill_challenge_template.
  difficulty: nob_hill_challenge_template.difficulty,
  date_created: nob_hill_challenge_template.date_created,
  hint_limit: nob_hill_challenge_template.hint_limit,
  point_value: nob_hill_challenge_template.point_value,
  active: nob_hill_challenge_template.active,
  // completed_tasks: Array,
  date_started: '2018-01-02',
  date_finished: '2018-01-03',
  is_completed: true,
  is_in_progress: false,
  calculated_points: 31
})


// save example challenge
nob_hill_challenge.save(function(err) {
  if (err) {
    console.error(err)
  }
})

// create an example task
const nob_hill_task = new Task({
  name: nob_hill_task_template.name,
  description: nob_hill_task_template.description,
  location: nob_hill_task_template.location,
  date_created: nob_hill_task_template.date_created,
  point_value: nob_hill_task_template.point_value,
  hints: nob_hill_task_template.hints,
  is_completed: false,
  date_started: '2018-01-02',
  date_completed: null
})


// save example task
nob_hill_task.save(function(err) {
  if (err) {
    console.error(err)
  }
})
