require('dotenv').config();
const axios = require('axios');

exports.notificacao = async (req, res) => {
    const {cliente, setor, telefone} = req.body
    console.log(cliente, setor, telefone)
    
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
        /*
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
        // Rafael
        const response3 = await axios.post(URL, {
            from: '558399088426',
            to: '5583999733555',
            contents: [
                {
                    type: 'template',
                    templateId: 'eee42c0b-22a6-44aa-a7bf-7fc32e942b5d',
                    fields: {
                        responsavel: `Rafael`,
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
        // Ígara
        const response4 = await axios.post(URL, {
            from: '558399088426',
            to: '5583988218106',
            contents: [
                {
                    type: 'template',
                    templateId: 'eee42c0b-22a6-44aa-a7bf-7fc32e942b5d',
                    fields: {
                        responsavel: `Ígara`,
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
        // André
        const response5 = await axios.post(URL, {
            from: '558399088426',
            to: '5583996128134',
            contents: [
                {
                    type: 'template',
                    templateId: 'eee42c0b-22a6-44aa-a7bf-7fc32e942b5d',
                    fields: {
                        responsavel: `André`,
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
        */

        console.log("Sucesso com os dados")
        return res.json({sucess: true});

    } catch (error) {
        console.log(error);  
        return res.json({sucess: false, msg: 'Ops! algo deu errado'});
    }
 };