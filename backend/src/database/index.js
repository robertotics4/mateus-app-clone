const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

// Importando Models
const User = require('../app/models/User');
const City = require('../app/models/City');

// Configurando a conexão com o banco
const connection = new Sequelize(dbconfig);

// Iniciando os Models
User.init(connection);
City.init(connection);

// Iniciando associações


module.exports = connection;