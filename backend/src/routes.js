const express = require('express');
const routes = express.Router();

// Importando controllers
const UserController = require('./app/controllers/UserController');
const CityController = require('./app/controllers/CityController');
const StateController = require('./app/controllers/StateController');
const StoreController = require('./app/controllers/StoreController');
const AddressController = require('./app/controllers/AddressController');


// Definindo rotas
routes.get('/users', UserController.index);
routes.get('/users/:user_id', UserController.show);
routes.post('/users', UserController.store);
routes.delete('/users/:user_id', UserController.destroy);

routes.get('/cities', CityController.index);
routes.get('/cities/:city_id', CityController.show);
routes.post('/cities', CityController.store);
routes.delete('/cities/:city_id', CityController.destroy);

routes.get('/states', StateController.index);
routes.get('/states/:state_id', StateController.show);
routes.post('/states', StateController.store);
routes.delete('/states/:state_id', StateController.destroy);

routes.get('/stores', StoreController.index);
routes.get('/stores/:store_id', StoreController.show);
routes.post('/stores', StoreController.store);
routes.put('/stores/:store_id', StoreController.update);
routes.delete('/stores/:store_id', StoreController.destroy);

module.exports = routes;