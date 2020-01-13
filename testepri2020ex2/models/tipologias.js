const mongoose = require('mongoose')

var tipologiaSchema = new mongoose.Schema({
    estado: String,
    sigla: String,
    designacao: String,
    id: String
});

module.exports = mongoose.model('tipologias', tipologiaSchema)