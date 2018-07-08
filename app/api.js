const express = require('express')
const app = express()

app.get('/api/v1', (req, res) => res.send({
  'name': 'Ben',
  'email': 'ben.imadali@gmail.com'
}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

const string
let string
var string
