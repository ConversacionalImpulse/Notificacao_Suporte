require('dotenv').config();
const axios = require('axios');

exports.notificacao = async (req, res) => {
    const {responsavel, assunto, username, telefone} = req.body
    console.log(responsavel, assunto, username, telefone)
    
    const token = process.env.tokenTop;
    const URL = 'https://api.zenvia.com/v2/channels/whatsapp/messages';
    

    try {
        // Beatriz
        
        const response = await axios.post(URL, {
            from: '5511992066621',
            to: '5583999415087', 
            contents: [
                {
                    type: 'template',
                    templateId: '1d835a32-a5a2-4796-8937-a2d75dd5d684',
                    fields: {
                        responsavel: `Beatriz`,
                        assunto: `${assunto}`,
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
        /*
        const response1 = await axios.post(URL, {
            from: '5511992066621',
            to: '5583999415087', 
            contents: [
                {
                    type: 'template',
                    templateId: '1bbf7596-51c6-4f2d-aaa7-01c3d5adf912',
                    fields: {
                        responsavel: `Daniel`,
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
        */
        console.log("Sucesso com os dados")
        return res.json({sucess: true});

    } catch (error) {
        console.log(error);  
        return res.json({sucess: false, msg: 'Ops! algo deu errado'});
    }
 };