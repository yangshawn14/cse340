const routes = require('express').Router();
const simpleDemoController = require('../controllers/simpleDemo');

// ROUTES
routes.get("/", simpleDemoController.simple);

module.exports = routes;