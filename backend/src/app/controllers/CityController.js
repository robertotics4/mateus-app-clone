const City = require('../models/City');
const State = require('../models/State');

module.exports = {
    async index(req, res) {
        try {
            const cities = await City.findAll({
                include: [
                    {
                        attributes: ['name'],
                        model: State,
                        as: 'state',
                    },
                ],
            });

            return res.status(200).json(cities);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async store(req, res) {
        try {
            const { name, state_id } = req.body;

            let city = await City.findOne({ where: { name } });

            if (city)
                return res.status(302).json({ msg: 'City already exists' });

            const state = await State.findByPk(state_id);

            if (!state)
                return res.status(404).json({ msg: ' State not found' });

            city = await City.create({ name, state_id });

            return res.status(200).json(city);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async show(req, res) {
        try {
            const { city_id } = req.params;

            const city = await City.findByPk(city_id, {
                include: [
                    {
                        attributes: ['name'],
                        model: State,
                        as: 'state',
                    },
                ],
            });

            if (!city)
                return res.status(404).json({ msg: 'City not found' });

            return res.status(200).json(city);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async destroy(req, res) {
        try {
            const { city_id } = req.params;

            let city = await City.findByPk(city_id);

            if (!city)
                return res.status(404).json({ msg: 'City not found' });

            city = await City.destroy({ where: { id: city_id } });

            return res.status(202).json({ msg: `City successfully deleted (${city})` });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },
};