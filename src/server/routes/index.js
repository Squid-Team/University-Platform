const routes = require('express').Router();
const controller = require('../../controller/index');


routes.get('/', controller.get_index);

module.exports = routes;