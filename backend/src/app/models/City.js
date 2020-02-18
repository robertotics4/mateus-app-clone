const { Model, DataTypes } = require('sequelize');

class City extends Model {
    static init(sequelize) {
        super.init({ name: DataTypes.STRING, },
            { sequelize });
    }
}

module.exports = City;