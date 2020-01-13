const express = require('express');
const router = express.Router();

var Tipologias = require('../controllers/tipologias')

/*Get lista de alunos*/ 
router.get('/',function(req,res){
    Tipologias.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})
