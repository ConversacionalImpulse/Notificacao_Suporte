require('dotenv').config();
const axios = require('axios');

exports.notificacaoComercial = async (req, res) => {
    const {cliente, setor, telefone} = req.body
    console.log(cliente, setor, telefone)
    
    const token = process.env.token;
    const URL = 'https://api.zenvia.com/v2/channels/whatsapp/messages';
    
    
    try {
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

        console.log("Sucesso com os dados")
        return res.json({sucess: true});

    } catch (error) {
        console.log(error);  
        return res.json({sucess: false, msg: 'Ops! algo deu errado'});
    }
 };