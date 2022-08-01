require('dotenv').config();
const axios = require('axios');

exports.notificacao = async (req, res) => {
    
    const token = process.env.token;
    const URL = 'https://api.zenvia.com/v2/channels/whatsapp/messages';
    const body = {
        from: '558399088426',
        to: '5583999415087',
        contents: [
            {
                type: 'template',
                templateId: '9c9dd7da-ba49-44a9-a5cb-94cf31beb3c8'
            }
        ]
    }
    try {
        const response = await axios.post(URL, body, {
            headers: {
                'X-API-TOKEN': token,
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data);
        return res.json({sucess: true, data: response.data});
    } catch (error) {
        console.log(error);  
        return res.json({sucess: false, msg: 'Ops! algo deu errado'});
    }
 };