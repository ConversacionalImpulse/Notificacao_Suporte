const routes = require('express').Router();
const controller = require('../controllers/controller_notificacao');

routes.post('/notificacao', controller.notificacao)

module.exports = routes;