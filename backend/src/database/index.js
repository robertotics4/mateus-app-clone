const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

// Importando Models
const User = require('../app/models/User');
const City = require('../app/models/City');
const State = require('../app/models/State');

// Configurando a conexão com o banco
const connection = new Sequelize(dbconfig);

// Iniciando os Models
User.init(connection);
City.init(connection);
State.init(connection);

// Iniciando associações
City.associate(connection.models);
State.associate(connection.models);

module.exports = connection;