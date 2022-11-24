const routes = require('express').Router();
const controller_notificacao_impulse = require('../controllers/controller_notificacao_impulse.js');
const controller_notificacao_grupoTop = require('../controllers/controller_notificacao_grupoTop.js');
const controller_horario = require('../controllers/controller_horario.js');
const controller_clientes_impulse = require('../controllers/controller_clientes_impulse.js');


//Rotas de Notificação
routes.post('/notificacao', controller_notificacao_impulse.notificacao);
routes.post('/notificacaoGrupoTop', controller_notificacao_grupoTop.notificacao);

//Rota de Data
routes.get('/diaEHora', controller_horario.informacoes);

//Rota de Cadastros do Suporte da Impulse
routes.post('/cadastroClienteImpulse', controller_clientes_impulse.cadastrar_cliente)
routes.post('/buscarClienteImpulse', controller_clientes_impulse.buscar_cliente)
routes.post('/editarClienteImpulse', controller_clientes_impulse.editar_cliente)

module.exports = routes;