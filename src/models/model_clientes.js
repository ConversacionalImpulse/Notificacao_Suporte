const mongoose = require("mongoose");

const estrutura_dados = new mongoose.Schema({
    nome: {type: String, required: true},
    telefone: {type: String, required: true},
    email: {type: String, required: true},
    empresa: {type: String, required: true}
})
const dados_clientes = mongoose.model('clientes', estrutura_dados);

module.exports = dados_clientes