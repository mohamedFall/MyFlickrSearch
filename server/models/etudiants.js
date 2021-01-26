const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const etudiantsSchema = new Schema({
  nom: String,
  prenom: String,
  description: String

});

module.exports = mongoose.model('etudiants', etudiantsSchema, 'etudiants');


