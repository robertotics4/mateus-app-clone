const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            cep: DataTypes.STRING,
            place: DataTypes.STRING,
            neighbourhood: DataTypes.STRING,
            city_id: DataTypes.INTEGER,
            state_id: DataTypes.INTEGER,
            store_id: DataTypes.INTEGER,
        },
            { sequelize });
    }

    static associate(models) {
        this.belongsTo(models.Store, { foreignKey: 'store_id', as: 'store' });
    }
}

module.exports = Address;