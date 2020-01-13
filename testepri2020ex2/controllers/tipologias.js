var Tipologia = require('../models/tipologias')

module.exports.listar = () => {
    return Tipologia
        .find()
        .exec()
}

module.exports.consultar = id => {
    return Tipologia
        .findOne({id: id})
        .exec()
}
