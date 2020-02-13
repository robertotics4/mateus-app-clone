const express = require('express');
const routes = express.Router();

// Importando controllers
const UserController = require('./app/controllers/UserController');

// Definindo rotas
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:user_id', UserController.show);
routes.delete('/users/:user_id', UserController.destroy);

module.exports = routes;