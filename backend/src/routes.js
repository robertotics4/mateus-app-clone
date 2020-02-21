const express = require('express');
const routes = express.Router();

// Importando controllers
const UserController = require('./app/controllers/UserController');
const CityController = require('./app/controllers/CityController');
const StateController = require('./app/controllers/StateController');
const StoreController = require('./app/controllers/StoreController');
const AddressController = require('./app/controllers/AddressController');
const DepartmentController = require('./app/controllers/DepartmentController');
const ProductController = require('./app/controllers/ProductController');
const OfferController = require('./app/controllers/OfferController');

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

routes.get('/addresses', AddressController.index);
routes.post('/addresses', AddressController.store);
routes.get('/addresses/:address_id', AddressController.show);

routes.get('/departments', DepartmentController.index);
routes.get('/departments/:department_id', DepartmentController.show);
routes.post('/departments', DepartmentController.store);
routes.delete('/departments/:department_id', DepartmentController.destroy);

routes.get('/products', ProductController.index);
routes.get('/products/:product_id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:product_id', ProductController.update);
routes.delete('/products/:product_id', ProductController.destroy);

routes.get('/offers', OfferController.index);
routes.get('/offers/:offer_id', OfferController.show);
routes.post('/offers', OfferController.store);
routes.put('/offers/:offer_id', OfferController.update);
routes.delete('/offers/:offer_id', OfferController.destroy);

module.exports = routes;