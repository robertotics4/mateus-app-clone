const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

// Importando Models

// Configurando a conexão com o banco
const connection = new Sequelize(dbconfig);

// Iniciando os Models


// Iniciando associações


module.exports = connection;