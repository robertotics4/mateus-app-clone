const { Model, DataTypes } = require('sequelize');

class Product extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            price: DataTypes.DECIMAL,
            department_id: DataTypes.INTEGER,
        },
            { sequelize });
    }

    static associate(models) {
        this.belongsTo(models.Department, { foreignKey: 'department_id', as: 'department' });
        this.hasMany(models.Offer, { foreignKey: 'product_id', as: 'offers' });
    }
}

module.exports = Product;