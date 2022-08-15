require('dotenv').config();
const axios = require('axios');

exports.notificacao = async (req, res) => {
    const {username, telefone, setor} = req.body
    
    const token = process.env.token;
    const URL = 'https://api.zenvia.com/v2/channels/whatsapp/messages';
    
    
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
                        username: `${username}`,
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

        console.log("Sucesso com os dados")
        return res.json({sucess: true});

    } catch (error) {
        console.log(error);  
        return res.json({sucess: false, msg: 'Ops! algo deu errado'});
    }
 };