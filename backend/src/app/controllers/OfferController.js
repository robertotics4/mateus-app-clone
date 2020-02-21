const Offer = require('../models/Offer');
const Product = require('../models/Product');

module.exports = {
    async index(req, res) {
        try {
            const offers = await Offer.findAll({});

            return res.status(200).json(offers);
        } catch (err) {
            return res.status(500).json({ error: err.msg });
        }
    },

    async store(req, res) {
        try {
            const {
                product_id,
                promotional_price,
                units_limit,
                promotion_validity,
                active
            } = req.body;

            if (!(await Product.findByPk(product_id)))
                return res.status(404).json('Product not found');

            const offer = await Offer.create({
                product_id,
                promotional_price,
                units_limit,
                promotion_validity,
                active
            });

            return res.status(200).json(offer);
        } catch (err) {
            return res.status(500).json({ error: err.msg });
        }
    },

    async show(req, res) {
        try {
            const { offer_id } = req.params;

            const offer = await Offer.findByPk(offer_id);

            if (!offer)
                return res.status(404).json({ msg: 'Offer not found' });

            return res.status(200).json(offer);
        } catch (err) {
            return res.status(500).json({ error: err.msg });
        }
    },

    async update(req, res) {
        try {
            const { offer_id } = req.params;

            let offer = await Offer.findByPk(offer_id);

            if (!offer)
                return res.status(404).json({ msg: 'Offer not found' });

            offer = Offer.update({
                product_id,
                promotional_price,
                units_limit,
                promotion_validity,
                active
            }, {
                where: { ìd: offer_id }
            });

            return res.status(200).json({ msg: 'Offer updated successfuly' });
        } catch (err) {
            return res.status(500).json({ error: err.msg });
        }
    },

    async destroy(req, res) {
        try {
            const { offer_id } = req.params;

            let offer = await Offer.findByPk(offer_id);

            if (!offer)
                return res.status(404).json({ msg: 'Offer not found' });

            offer = await Offer.destroy({ where: { id: offer_id } });

            return res.status(202).json({ msg: `Offer successfully deleted (${offer})` });
        } catch (err) {
            return res.status(500).json({ error: err.msg });
        }
    },
};