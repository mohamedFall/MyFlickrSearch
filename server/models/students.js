const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentsSchema = new Schema({
  name: String,
  status:String,
});

module.exports = mongoose.model('Students', studentsSchema);


