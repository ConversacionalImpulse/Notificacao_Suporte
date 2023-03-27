exports.create = async (req, res) => {
  const {nome, empresa, nivel, mensagem} = req.body
    const pipeId = "303117720";
    const phaseId = "319199270";
    const dataAtual = new Date();

    function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
    }

    function formataData(data) {
        const dia = zeroAEsquerda(data.getDate());
        const mes = zeroAEsquerda(data.getMonth() + 1);
        const ano = zeroAEsquerda(data.getFullYear());
    
        return `${dia}/${mes}/${ano}`;
    }
    
    try{
        const novoCardEmpresa = await fetch('https://api.pipefy.com/graphql',{
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                          'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNTk5NTQsImVtYWlsIjoiZGFuaWVsLmltcHVsc2ViQGdtYWlsLmNvbSIsImFwcGxpY2F0aW9uIjozMDAyMTcyNTB9fQ.OPT1Bn55gTEq7IMaJdTkdYuGf5vufNlnDKXYGzsnYEXz4Ny1zB6mXQZN5at4EpPbCH_THZXMoAcsyS1eDvOHwA"
                        },
                        body: JSON.stringify({
                              "query": `mutation{ createCard (input: {pipe_id:${pipeId}  phase_id:${phaseId}  fields_attributes: [
                                  {field_id: "nome_do_respons_vel", field_value: "${nome}"},
                                  {field_id: "empresa", field_value: "${empresa}"},
                                  {field_id: "n_vel_do_ticket", field_value: "${nivel}"},
                                  {field_id: "data_da_cria_o_do_ticket", field_value: "${formataData(dataAtual)}"},
                                  {field_id: "detalhes_sobre_o_suporte", field_value: "${mensagem}"}
                                ]
                                  }) 
                                  { card {id title }}}`
                        })
        });
        
        const dataEmpresa = await novoCardEmpresa.json();
        return res.status(200).json(dataEmpresa)

    } catch (err){
        console.error(err)
        return res.status(500).end()
    }
}