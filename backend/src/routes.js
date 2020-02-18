const express = require('express');
const routes = express.Router();

// Importando controllers
const UserController = require('./app/controllers/UserController');
const CityController = require('./app/controllers/CityController');
const StateController = require('./app/controllers/StateController');

// Definindo rotas
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:user_id', UserController.show);
routes.delete('/users/:user_id', UserController.destroy);

routes.get('/cities', CityController.index);
routes.get('/cities/:city_id', CityController.show);
routes.post('/cities', CityController.store);
routes.delete('/cities/:city_id', CityController.destroy);

routes.get('/states', StateController.index);
routes.get('/states/:state_id', StateController.show);
routes.post('/states', StateController.store);
routes.delete('/states/:state_id', StateController.destroy);

module.exports = routes;