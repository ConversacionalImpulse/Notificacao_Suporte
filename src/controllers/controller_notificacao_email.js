const nodemailer = require('nodemailer');

exports.notificacao = async (req, res) => {
    const {cliente, protocol, email} = req.body
    const senha = 'hyatdcyavvnagzof';

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
        await transport.sendMail({
            from: 'Daniel Sarmento <daniel.impulseb@gmail.com>',
            to: ['danielsarmento2@hotmail.com', email],
            subject: 'Novo Suporte Impulse',
            html: `
            <h1>Olá, ${cliente}!</h1> 
            <p>O caso ${protocol}, referente ao assunto <b>Atendimento Chat: WHATSAPP - ${cliente}</b> está resolvido.</p> 
            <h4>Caso entenda que essa demanda ainda não está resolvida, por favor, não hesite em nos contatar.</h4> 
            <p>Orientamos que responda este e-mail em até <b>3 dias úteis</b> ou entrar em contato pelo nosso WhatsApp e informar a nosso atendente o número desse caso para que o chamado seja reaberto. Caso contrário, este chamado será concluído de forma automática.</p> 
            <p>Se precisar de ajuda com outro assunto, por favor, entre em contato através do nosso WhatsApp +55 83 9908-8426</p> 
            <p>Estamos aqui para te ajudar de segunda à sexta-feira, das 8h às 18h (exceto feriados).</p> 
            <h6>Atenciosamente,\n
            Equipe de Atendimento Impulse</h6>`,
            text: `Impulse: O caso número ${protocol} foi atualizado`
        })
        return res.json({sucess: true});

    } catch (error) {
        console.log(error);  
        return res.json({sucess: false, msg: 'Ops! algo deu errado'});
    }
 };