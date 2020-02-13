const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const environment = require('../../../.env');
const validations = require('../../libs/Validations');

const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            username: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: 'Name field cannot be empty' },
                },
            },
            cpf: {
                type: DataTypes.STRING,
                validate: {
                    isCPF: function(value) {
                        validations.isCPF(value);
                    },
                    len: [11, 11],
                    notEmpty: { msg: 'CPF field cannot be empty' },
                },
            },
            password: DataTypes.VIRTUAL,
            password_hash: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: { msg: 'Password field cannot be empty' },
                },
            }
        }, {
            getterMethods: {
                formatedCPF() {
                    return this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
                }
            },
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