const express = require('express')
const ChallengeTemplate = require('./models/ChallengeTemplate')
const Challenge = require('./models/Challenge')
const TaskTemplate = require('./models/TaskTemplate')
const Task = require('./models/Task')
const db = require('./db')
const app = express()


const base_path = '/api/v1'

app.get(base_path + '/challenge_templates', (req, res) => {
  ChallengeTemplate.find(function (err, challenge_template) {
    if (err) return console.error(err)
    res.send(challenge_template)
  })
})

app.get(base_path + '/task_templates', (req, res) => {
  TaskTemplate.find(function (err, task_template) {
    if (err) return console.error(err)
    res.send(task_template)
  })
})

app.get(base_path + '/challenges', (req, res) => {
  Challenge.find(function (err, challenge) {
    if (err) return console.error(err)
    res.send(challenge)
  })
})

app.get(base_path + '/tasks', (req, res) => {
  Task.find(function (err, task) {
    if (err) return console.error(err)
    res.send(task)
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
