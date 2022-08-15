const routes = require('express').Router();
const controller = require('../controllers/controller_notificacao');
const controllerGrupoTop = require('../controllers/controllerGrupoTop.js')

routes.post('/notificacao', controller.notificacao)
routes.post('/notificacaoGrupoTop', controllerGrupoTop.notificacao)


module.exports = routes;