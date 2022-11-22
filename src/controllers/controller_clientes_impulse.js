const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.buscar_usuario = async (req, res) => {
    const {telefone} = req.body;
    await prisma.$connect()
    const verifica_cadastro = await prisma.usuarios.findMany({
        where:{
            telefone: telefone
        }
    })
    
    if(verifica_cadastro.length > 0){
        res.json({
            cadastrado: true,
            verifica_cadastro
        })
    } else {
        res.json({
            cadastrado: false
        })
    } 
}

exports.cadastrar_usuario = async (req, res) => {
    const { nome, telefone } = req.body;
    await prisma.$connect()
    const usuario_cadastrado = await prisma.usuarios.create({
        data: {
            nome: nome,
            telefone: telefone
        }
    })
    res.json({cadastrado: true, usuario_cadastrado})
}

exports.cadastrar_cliente = async (req, res) =>{
    const { nome, email, telefone, empresa} = req.body;
    await prisma.$connect()
    const verifica_cadastro = await prisma.clientes.findMany({
        where: {
            telefone: telefone
        }
    })

    if(verifica_cadastro.length > 0){
        res.json({cadastrado: false, msg: "Cliente já cadastrado no sistema", dados: verifica_cadastro})
    } else {
        const cliente = await prisma.clientes.create({
            data: {
                nome: nome,
                email: email,
                telefone: telefone,
                empresa: empresa
            }
        })
        res.json({cadastrado: true, msg: "Cliente cadastrado com sucesso", dados: cliente})
    }
}

exports.buscar_cliente = async (req, res) => {
    const {telefone} = req.body;
    await prisma.$connect()
    const verifica_cadastro = await prisma.clientes.findMany({
        where: {
            telefone: telefone
        }
    })
    
    if(verifica_cadastro.length > 0){
        res.json({
            cadastrado: true,
            verifica_cadastro
        })
    } else {
        res.json({
            cadastrado: false
        })
    }
    
}