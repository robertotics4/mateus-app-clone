const Store = require('../models/Store');
const Address = require('../models/Address');
const City = require('../models/City');
const State = require('../models/State');

module.exports = {
    async index(req, res) {
        try {
            const stores = await Store.findAll({
                include: [
                    {
                        attributes: ['neighbourhood', 'place', 'cep'],
                        model: Address,
                        as: 'address',
                        include: [
                            {
                                attributes: ['name'],
                                model: City,
                                as: 'city',
                            },
                        ],
                        include: [
                            {
                                attributes: ['name'],
                                model: State,
                                as: 'state',
                            },
                        ],
                    },
                ],
            });

            return res.status(200).json(stores);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async store(req, res) {
        try {
            const { name } = req.body;

            const [store_info, created] = await Store.findOrCreate({ where: { name } });

            return res.status(200).json(store_info);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async show(req, res) {
        try {
            const { store_id } = req.params;

            const store = await Store.findByPk(store_id, {
                include: [
                    {
                        attributes: ['neighbourhood', 'place', 'cep'],
                        model: Address,
                        as: 'address',
                        include: [
                            {
                                attributes: ['name'],
                                model: City,
                                as: 'city',
                            },
                        ],
                        include: [
                            {
                                attributes: ['name'],
                                model: State,
                                as: 'state',
                            },
                        ],
                    },
                ],
            });

            if (!store)
                res.status(404).json({ msg: 'Store not found' });

            return res.status(200).json(store);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const { store_id } = req.params;

            let store = await Store.findByPk(store_id);

            if (!store)
                res.status(404).json({ msg: 'Store not found' });

            store = await Store.update({ where: { id: store_id } });

            return res.status(200).json(store);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async destroy(req, res) {
        try {
            const { store_id } = req.params;

            let store = await Store.findByPk(store_id);

            if (!store)
                res.status(404).json({ msg: 'Store not found' });

            store = await Store.destroy({ where: { id: store_id } });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },
};