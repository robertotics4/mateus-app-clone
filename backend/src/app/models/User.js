const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const environment = require('../../../.env');
const validations = require('../../libs/Validations');

const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            username: DataTypes.STRING,
            cpf: DataTypes.STRING,
            password: DataTypes.VIRTUAL,
            password_hash: DataTypes.STRING,
        }, {
            hooks: {
                beforeSave: async user => {
                    if (user.password) {
                        user.password_hash = await bcrypt.hash(user.password, 8);
                    }
                }
            },
            scopes: {
                withoutPassword: {
                    attributes: { exclude: ['password_hash'] },
                },
            },
            sequelize
        });
    }
}

User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash);
}

User.prototype.generateToken = function () {
    return jwt.sign({ id: this.id }, environment.APP_SECRET, {
        expiresIn: 86400, // expires in 1 day
    });
}

module.exports = User;