const Address = require('../models/Address');
const Store = require('../models/Store');
const State = require('../models/State');
const City = require('../models/City');

module.exports = {
    async index(req, res) {
        try {
            const addresses = await Address.findAll({
                include: [
                    {
                        attributes: ['name'],
                        model: Store,
                        as: 'store',
                    },
                    {
                        attributes: ['name'],
                        model: City,
                        as: 'city',
                    },
                    {
                        attributes: ['name'],
                        model: State,
                        as: 'state',
                    },
                ],
            });

            return res.status(200).json(addresses);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async store(req, res) {
        try {
            const {
                cep,
                place,
                neighbourhood,
                state_id,
                city_id,
                store_id
            } = req.body;

            if (!(await Store.findByPk(store_id)))
                return res.status(404).json({ msg: 'Store not found' });

            if (!(await State.findByPk(state_id)))
                return res.status(404).json({ msg: 'State not found' });

            if (!(await City.findByPk(city_id)))
                return res.status(404).json({ msg: 'City not found' });

            let address = await Address.findOne({ where: { store_id } });

            if (address)
                return res.status(302).json({ msg: 'Address already exists' });

            address = await Address.create({
                cep,
                place,
                neighbourhood,
                state_id,
                city_id,
                store_id
            });

            return res.status(200).json(address);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async show(req, res) {
        try {
            const { address_id } = req.params;

            const address = await Address.findByPk(address_id, {
                include: [
                    {
                        attributes: ['name'],
                        model: Store,
                        as: 'store',
                    },
                    {
                        attributes: ['name'],
                        model: City,
                        as: 'city',
                    },
                    {
                        attributes: ['name'],
                        model: State,
                        as: 'state',
                    },
                ],
            });

            if (!address)
                return res.status(404).json({ msg: 'Address not found' });

            return res.status(200).json(address);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },
};