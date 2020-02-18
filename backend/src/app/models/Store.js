const { Model, DataTypes } = require('sequelize');

class Store extends Model {
    static init(sequelize) {
        super.init({ name: DataTypes.STRING, },
            { sequelize });
    }
}

module.exports = Store;