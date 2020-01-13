const express = require('express');
const router = express.Router();

var Pubs = require('../controllers/pubs')

/* GET: lista de alunos */
router.get('/pubs', function(req, res) {
  if(!req.query){
  Pubs.listar()
  .then(dados => res.render(res.jsonp(dados)))
  .catch(erro => res.status(500).jsonp(erro))
}
  
      if (req.query.type!=null){
      Pubs.listartype(req.query.type)
        .then(dados =>res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  
    }
    if(req.query.autor!=null){
      var autors=req.query.autor.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")
      Pubs.listarautor(autors)
      .then(dados =>res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))

  }


})

/* GET: recupera a informação de um aluno */
router.get('/pubs/:id', function(req, res) {
  Pubs.consultar(req.params.id)
    .then(dados => res.render('lista-alunos', { lista: dados }))
    .catch(erro => {
      res.render('error', {error: erro})
  })
})



router.get('/types', function(req, res) {
  Pubs.distincttype()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

router.get('/autores', function(req, res) {
  Pubs.distinctautores()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})


module.exports = router