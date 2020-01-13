var Pubs = require('../models/pubs')

// Devolve a lista de alunos
module.exports.listar = () => {
    return Pubs
        .find()
        .exec()
}

module.exports.listartype = tipo => {
    return Pubs
        .find({type : tipo})
        .exec()
}

module.exports.listarautor = autor => {
    return Pubs
        .find({authors : autor})
        .exec()
}

module.exports.consultar = id => {
    return Pubs
        .findOne({id: id})
        .exec()
}

module.exports.contar = () => {
    return Pubs
        .countDocuments()
        .exec()
}

module.exports.distincttype = () => {
    return Pubs
        .distinct('type')
        .exec()
}

module.exports.distinctautores = () => {
    return Pubs
        .distinct('authors')
        .exec()
}

module.exports.inserir = pubs => {
    var novo = new Pubs(pubs)
    return novo.save()
}
