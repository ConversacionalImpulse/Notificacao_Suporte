const routes = require('express').Router();
const controller = require('../controllers/controller_notificacao');

routes.get('/notificacao', controller.notificacao)

module.exports = routes;