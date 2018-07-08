var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var ChallengeSchema = new Schema({
    a_string: String,
    a_date: Date
});
