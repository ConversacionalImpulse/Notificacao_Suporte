const nodemailer = require('nodemailer');

exports.notificacao = async (req, res) => {
    const {cliente, protocol, email} = req.body
    const crypt = 'hyatdcyavvnagzof';

    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user: 'daniel.impulseb@gmail.com',
            pass: crypt
        }
    });
    
    try {
        await transport.sendMail({
            from: 'Impulse Tecnologia <daniel.impulseb@gmail.com>',
            to: [email],
            subject: `Impulse: caso ${protocol}`,
            html: `
            <h1>Olá, ${cliente}!</h1> 
            <p>O caso <b>${protocol}</b>, referente ao assunto <b>Atendimento Chat: WHATSAPP - ${cliente}</b> está em resolução.</p> 
            <p>Caso desejae acrescentar novas informações a essa demanda, por favor, não hesite em nos contatar.<p> 
            <p>Orientamos que responda este e-mail em até <b>3 dias úteis</b> ou entrar em contato pelo nosso WhatsApp e informar a nosso atendente o número desse caso para que o chamado seja identificado.</p> 
            <p>Se precisar de ajuda com outro assunto, por favor, entre em contato através do nosso <b>WhatsApp +55 83 9908-8426</b></p> 
            <p>Estamos aqui para te ajudar de <b>segunda à sexta-feira, das 8h às 18h (exceto feriados)</b>.</p> 
            <h4>Atenciosamente, Equipe de Atendimento Impulse</h4>`,
            text: `Impulse: O caso número ${protocol} foi atualizado`
        })
        return res.json({sucess: true});

    } catch (error) {
        console.log(error);  
        return res.json({sucess: false, msg: 'Ops! algo deu errado'});
    }
 };