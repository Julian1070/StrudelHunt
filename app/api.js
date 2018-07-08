const express = require('express')
const ChallengeTemplate = require('./models/ChallengeTemplate')
const db = require('./db.js')
const app = express()


const base_path = '/api/v1'

app.get(base_path + '/challenges', (req, res) => {
  ChallengeTemplate.find(function (err, challenge_template) {
    if (err) return console.error(err)
    res.send(challenge_template)
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
