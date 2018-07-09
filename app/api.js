const express = require('express')
const ChallengeTemplate = require('./models/ChallengeTemplate')
const Challenge = require('./models/Challenge')
const db = require('./db')
const app = express()


const base_path = '/api/v1'

app.get(base_path + '/challenges', (req, res) => {
  ChallengeTemplate.find(function (err, challenge_template) {
    if (err) return console.error(err)
    res.send(challenge_template)
  })
})

app.get(base_path + '/challenges2', (req, res) => {
  Challenge.find(function (err, challenge) {
    if (err) return console.error(err)
    res.send(challenge)
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
