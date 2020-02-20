const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

// Importando Models
const User = require('../app/models/User');
const City = require('../app/models/City');
const State = require('../app/models/State');
const Store = require('../app/models/Store');
const Address = require('../app/models/Address');
const Department = require('../app/models/Department');
const Product = require('../app/models/Product');

// Configurando a conexão com o banco
const connection = new Sequelize(dbconfig);

// Iniciando os Models
User.init(connection);
City.init(connection);
State.init(connection);
Store.init(connection);
Address.init(connection);
Department.init(connection);
Product.init(connection);

// Iniciando associações
City.associate(connection.models);
State.associate(connection.models);
Address.associate(connection.models);
Store.associate(connection.models);
Product.associate(connection.models);
Department.associate(connection.models);

module.exports = connection;