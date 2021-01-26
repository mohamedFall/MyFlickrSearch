const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Students = require('../models/students');

const db = 'mongodb://localhost/maodo';
mongoose.Promise = global.Promise;

mongoose.connect(db, function (err){
  if(err){
    console.error("Erreur" + err);
  }

})
router.get('/etudiants', function (req,res){
  console.log('Listes etudiants');
  Students.find({}).exec(function (err, students){
    if(err) {
      console.log("Errreur affichage etudiants");
    }else{ res.json(students);
    console.log(students);}
    }

  );
});

router.get('/students', function (req, res){
  console.log("Post a students");
  var students = new Students();
  students.name = "test1";
  students.status = "1";
  students.save(function (err, insertionStudents){
    if(err){
      console.log('erreur enregistrement students');
    }
    else{
      res.json(insertionStudents);
    }
    }
  );
});

module.exports = router;


