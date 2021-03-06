const User = require('../models/User');

module.exports = {
    async index(req, res) {
        try {
            const users = await User.scope('withoutPassword').findAll();

            return res.json(users);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async store(req, res) {
        try {
            const { username, cpf, password } = req.body;

            let user = await User.findOne({ where: { cpf } });

            if (user)
                return res.status(302).json({ error: 'CPF already user' });

            user = await User.create({ username, cpf, password });
            user.password_hash = undefined;

            return res.status(200).json({ user, token: user.generateToken() });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async show(req, res) {
        try {
            const { user_id } = req.params;

            const user = await User.scope('withoutPassword').findByPk(user_id);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            return res.status(200).json(user);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async destroy(req, res) {
        try {
            const { user_id } = req.params;

            const user = await User.destroy({ where: { id: user_id } });

            if (user !== 1) {
                return res.status(404).json({ error: 'User not found' });
            } else {
                return res.status(204).send();
            }
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },
};