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

    try{
        const verifica_cadastro = await dados_clientes.find({telefone})

        if(verifica_cadastro.length > 0){
            res.json({
                verifica_cadastro
            })
        } else {
            res.json({
                clientes: false
            })
        }
    } catch(error) {
        console.log(error)
        res.json({cadatrado: false})
    } 
}