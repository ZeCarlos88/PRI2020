var express = require('express');
var router = express.Router();
var axios = require('axios')
var http = require('http')

var Tipologias = require('../controllers/tipologias')

/* GET home page. */
router.get('/', function(req, res,next) {
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias', {
    params:{
      apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'
    }
  })
      .then(dados => {
        res.render('index', { lista: dados.data});
      })
      .catch(erro => {
        res.render('error', {error: erro})
      })
  });

router.get('/:id', function(req, res,next) {
    axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.id , {
      params:{
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ'
      }
    })
        .then(dados => {
          res.render('tipologia', {title: req.params.id, lista: dados.data});
        })
        .catch(erro => {
          res.render('error', {error: erro})
        })
    });
  


module.exports = router;
