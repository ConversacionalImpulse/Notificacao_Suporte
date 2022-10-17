exports.informacoes = async (req, res) => {
    
    const dataAtual = new Date();

    function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
    }

    function formataData(data) {
        const dia = zeroAEsquerda(data.getDate());
        const mes = zeroAEsquerda(data.getMonth() + 1);
        const ano = zeroAEsquerda(data.getFullYear());
        const hora = zeroAEsquerda(data.getHours());

        return `${dia}/${mes}/${ano}`;
    }

    function formataHora(data) {
        const hora = zeroAEsquerda(data.getHours());
        const minutos = zeroAEsquerda(data.getMinutes());
        const segundos = zeroAEsquerda(data.getSeconds());


        return `${hora}:${minutos}:${segundos}`;
    }
    const Hora = dataAtual.getHours();
    const Minutos = dataAtual.getMinutes();

    const dataBrasil = formataData(dataAtual);
    const horaBrasil = formataHora(dataAtual);
    console.log(dataBrasil, horaBrasil)
   
    return res.json({data: dataBrasil, horario: horaBrasil, hora: Hora, minutos: Minutos });
    
 };