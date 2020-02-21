const { Model, DataTypes } = require('sequelize');

class Offer extends Model {
    static init(sequelize) {
        super.init({
            product_id: DataTypes.INTEGER,
            promotional_price: DataTypes.DECIMAL,
            units_limit: DataTypes.INTEGER,
            promotion_validity: DataTypes.DATE,
            active: DataTypes.BOOLEAN,
        },
            { sequelize });
    }

    static associate(models) {
        this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
    }
}

module.exports = Offer;