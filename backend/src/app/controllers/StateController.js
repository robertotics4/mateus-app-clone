const State = require('../models/State');
const City = require('../models/City');

module.exports = {
    async index(req, res) {
        try {
            const states = await State.findAll({
                include: [
                    {
                        attributes: ['name'],
                        model: City,
                        as: 'cities',
                    },
                ],
            });

            return res.status(200).json(states);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async store(req, res) {
        try {
            const { name } = req.body;

            const [state, created] = await State.findOrCreate({ where: { name } });

            return res.status(200).json(state);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async show(req, res) {
        try {
            const { state_id } = req.params;

            const state = await State.findByPk(state_id);

            if (!state)
                return res.status(404).json({ msg: 'State not found' });

            return res.status(200).json(state);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }

    },

    async destroy(req, res) {
        try {
            const { state_id } = req.params;

            let state = await State.findByPk(state_id);

            if (!state)
                return res.status(404).json({ msg: 'State not found' });

            state = await State.destroy({ where: { id: state_id } });

            return res.status(202).json({ msg: `State successfully deleted (${state})` });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },
};