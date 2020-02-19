const { Model, DataTypes } = require('sequelize');

class Store extends Model {
    static init(sequelize) {
        super.init({ name: DataTypes.STRING, },
            { sequelize });
    }

    static associate(models) {
        this.hasOne(models.Address, { foreignKey: 'store_id', as: 'address' });
    }
}

module.exports = Store;