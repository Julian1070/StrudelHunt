const express = require('express')
const bodyParser = require('body-parser');
const ChallengeTemplate = require('./models/ChallengeTemplate')
const Challenge = require('./models/Challenge')
const TaskTemplate = require('./models/TaskTemplate')
const Task = require('./models/Task')
const db = require('./db')
const app = express()

app.use(bodyParser.json())

const base_path = '/api/v1'

app.get(base_path + '/challenge_templates', (req, res) => {
  ChallengeTemplate.find(function (err, challenge_template) {
    if (err) return console.error(err)
    res.send(challenge_template)
  })
})

app.post(base_path + '/challenge_templates', (req, res) => {
  const challenge_template = new ChallengeTemplate(req.body)
  challenge_template.save(function(err) {
    if (err) return console.error(err)
    res.send(challenge_template)
  })
})

app.get(base_path + '/challenge_templates/:id', (req, res) => {
  ChallengeTemplate.findById(req.params.id, function (err, challenge_template) {
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

app.post(base_path + '/task_templates', (req, res) => {
  const task_template = new TaskTemplate(req.body)
  task_template.save(function(err) {
    if (err) return console.error(err)
    res.send(task_template)
  })
})

app.get(base_path + '/task_templates/:id', (req, res) => {
  TaskTemplate.findById(req.params.id, function (err, task_template) {
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

app.post(base_path + '/challenges', (req, res) => {
  const challenge = new Challenge(req.body)
  challenge.save(function(err) {
    if (err) return console.error(err)
    res.send(challenge)
  })
})

app.get(base_path + '/challenges/:id', (req, res) => {
  Challenge.findById(req.params.id, function (err, challenge) {
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

app.post(base_path + '/tasks', (req, res) => {
  const task = new Task(req.body)
  task.save(function(err) {
    if (err) return console.error(err)
    res.send(task)
  })
})

app.get(base_path + '/tasks/:id', (req, res) => {
  Task.findById(req.params.id, function (err, task) {
    if (err) return console.error(err)
    res.send(task)
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
