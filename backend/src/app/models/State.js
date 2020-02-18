const { Model, DataTypes } = require('sequelize');

class State extends Model {
    static init(sequelize) {
        super.init({ name: DataTypes.STRING, },
            { sequelize });
    }

    static associate(models) {
        this.hasMany(models.City, { foreignKey: 'state_id', as: 'cities' });
    }
}

module.exports = State;