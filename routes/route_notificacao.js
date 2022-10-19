const routes = require('express').Router();
const controller = require('../controllers/controller_notificacao');
const controllerGrupoTop = require('../controllers/controllerGrupoTop.js')
const controllerHorario = require('../controllers/controllerHorario.js')

routes.post('/notificacao', controller.notificacao)
routes.post('/notificacaoGrupoTop', controllerGrupoTop.notificacao)
routes.get('/diaEHora', controllerHorario.informacoes)


module.exports = routes;