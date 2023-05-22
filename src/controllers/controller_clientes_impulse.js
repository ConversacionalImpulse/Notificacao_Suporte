const dados_clientes = require('../models/model_clientes.js')

exports.cadastrar_cliente = async (req, res) =>{
    const { nome, telefone, email, empresa} = req.body;

    try{
        const cliente = await dados_clientes.create({
                nome: nome,
                telefone: telefone,
                email: email,
                empresa: empresa
        })
        res.json({cadastrado: true, msg: "Cliente cadastrado com sucesso", dados: cliente})
    } catch(error) {
        console.log(error)
        res.json({cadatrado: false})
    }   
}


exports.buscar_cliente = async (req, res) => {
    const {telefone} = req.body;
    let telefoneEditado = telefone.replace(/\+/g, '')

    try{
        const verifica_cadastro = await dados_clientes.findOne({telefoneEditado})

        if(!verifica_cadastro){
            res.json({
                cadastrado: false
            })
        } else {
            res.json({
                cadastrado: true,
                verifica_cadastro
            })
        }
    } catch(error) {
        console.log(error)
        res.json({cadatrado: false})
    } 
}

exports.editar_cliente = async (req, res) => {
    const {nome, telefone, email, empresa } = req.body;
    try{
        const dados_editados = await dados_clientes.updateOne({telefone: telefone}, {nome: nome, email: email, empresa: empresa})
        res.json({
            update: true
        })
    } catch (error){
        console.log(error)
        res.json({update: false})
    }
}