require('dotenv').config();
const axios = require('axios');
const nodemailer = require('nodemailer');

exports.notificacao = async (req, res) => {
    const {cliente, setor, telefone} = req.body
    const senha = 'hyatdcyavvnagzof';
    
    const token = process.env.token;
    const URL = 'https://api.zenvia.com/v2/channels/whatsapp/messages';

    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user: 'daniel.impulseb@gmail.com',
            pass: senha
        }
    });
    
    try {
        // Daniel
        const response = await axios.post(URL, {
            from: '558399088426',
            to: '5583999415087',
            contents: [
                {
                    type: 'template',
                    templateId: 'eee42c0b-22a6-44aa-a7bf-7fc32e942b5d',
                    fields: {
                        responsavel: `Daniel`,
                        username: `${cliente}`,
                        telefone: `${telefone}`,
                        setor: `${setor}`
                    }
                }
            ]
        }, {
            headers: {
                'X-API-TOKEN': token,
                'Content-Type': 'application/json',
            },
        });
        await transport.sendMail({
            from: 'Daniel Sarmento <daniel.impulseb@gmail.com>',
            to: ['daniel.impulseb@gmail.com','myvson.impulse@gmail.com'],
            subject: 'Novo Suporte Impulse',
            html: `<h1>Suporte Impulse</h1> <p>Acabamos de receber um novo chamado no suporte da Impulse, segue abaixo os dados do solicitante.</p> <h4>Dados do Cliente:</h4> <p>Telefone: ${telefone}</p> <p>Nome do Solicitante: ${cliente}</p> <p>Setor: ${setor}</p> <h6>Verificar o mais rápido possível o Zchat da empresa.</h6>`,
            text: 'Suporte Impulse'
        })
        // Myvson
        
        const response2 = await axios.post(URL, {
            from: '558399088426',
            to: '5583999932745',
            contents: [
                {
                    type: 'template',
                    templateId: 'eee42c0b-22a6-44aa-a7bf-7fc32e942b5d',
                    fields: {
                        responsavel: `Myvson`,
                        username: `${cliente}`,
                        telefone: `${telefone}`,
                        setor: `${setor}`
                    }
                }
            ]
        }, {
            headers: {
                'X-API-TOKEN': token,
                'Content-Type': 'application/json',
            },
        });
        
        return res.json({sucess: true});

    } catch (error) {
        console.log(error);  
        return res.json({sucess: false, msg: 'Ops! algo deu errado'});
    }
 };