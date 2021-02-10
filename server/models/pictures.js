const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const picturesSchema = new Schema({
  name: String,
  lien :String,
});

module.exports = mongoose.model('Pictures', picturesSchema);


