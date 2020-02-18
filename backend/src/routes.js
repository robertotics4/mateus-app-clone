const express = require('express');
const routes = express.Router();

// Importando controllers
const UserController = require('./app/controllers/UserController');
const CityController = require('./app/controllers/CityController');

// Definindo rotas
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:user_id', UserController.show);
routes.delete('/users/:user_id', UserController.destroy);

routes.get('/cities', CityController.index);
routes.get('/cities/:city_id', CityController.show);
routes.post('/cities', CityController.store);
routes.delete('/cities/:city_id', CityController.destroy);

module.exports = routes;