const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Pictures = require('../models/pictures');

const db = 'mongodb://localhost/maodo';
mongoose.Promise = global.Promise;

mongoose.connect(db, function (err){
  if(err){
    console.error("Erreur" + err);
  }

})
/*router.get('/etudiants', function (req,res){
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
});*/

router.get('/photos/:name', function (req,res){
  console.log('Liste photos');
  Pictures.find({name: req.params.name}).exec(function (err, pictures){
    if(err) {
      console.log("Errreur affichage photos");
    }else{ res.json(pictures);
    console.log(pictures);}
    }

  );
});

/*router.get('/photos/:nom/:lien', function (req, res){
  var pictures = new Pictures();
  pictures.name = req.params.nom;
  pictures.lien = req.params.lien
  pictures.save(function (err, insertionphoto){
      if(err){
        console.log('erreur enregistrement photos');
      }
      else{
        res.json(insertionphoto);
      }
    }
  );
});*/

router.post('/photos', function (req, res){
  console.log("Enregistrement photos");
  var pictures = new Pictures();
  pictures.name = req.body.name;
  pictures.lien = req.body.lien;
  pictures.save(function (err, insertionphoto){
      if(err){
        console.log('erreur enregistrement photos');
      }
      else{
        res.json(insertionphoto);
      }
    }
  );
});

module.exports = router;


