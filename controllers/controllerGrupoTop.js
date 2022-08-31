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
            to: '5511915841820', 
            contents: [
                {
                    type: 'template',
                    templateId: '1bbf7596-51c6-4f2d-aaa7-01c3d5adf912',
                    fields: {
                        responsavel: `Beatriz`,
                        username: `${username}`,
                        telefone: `${telefone}`
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