const Product = require('../models/Product');
const Department = require('../models/Department');

module.exports = {
    async index(req, res) {
        try {
            const products = await Product.findAll({
                include: [
                    {
                        attributes: ['name'],
                        model: Department,
                        as: 'department',
                    },
                ],
            });

            return res.status(200).json(products);
        } catch (err) {
            return res.status(500).json({ error: err.msg });
        }
    },

    async store(req, res) {
        try {
            const { name, price, department_id } = req.body;

            let product = await Product.findOne({ where: { name } });

            if (product)
                return res.status(302).json({ msg: 'Product already exists' });

            if (!(Department.findByPk(department_id)))
                return res.status(404).json({ msg: 'Department not found' });

            product = await Product.create({
                name,
                price,
                department_id
            });

            return res.status(200).json(product);
        } catch (err) {
            return res.status(500).json({ error: err.msg });
        }
    },

    async show(req, res) {
        try {
            const { product_id } = req.params;

            const product = await Product.findByPk(product_id, {
                include: [
                    {
                        attributes: ['name'],
                        model: Department,
                        as: 'department',
                    },
                ],
            });

            if (!product)
                return res.status(404).json('Product not found');

            return res.status(200).json(product);
        } catch (err) {
            return res.status(500).json({ error: err.msg });
        }
    },

    async update(req, res) {
        try {
            const { product_id } = req.params;
            const { name, price, department_id } = req.body;

            let product = await Product.findByPk(product_id);

            if (!product)
                return res.status(404).json('Product not found');

            product = await Product.update({
                name,
                price,
                department_id
            },
                {
                    where: { id: product_id }
                });

            return res.status(200).json({ msg: 'Product updated successfully' });
        } catch (err) {
            return res.status(500).json({ error: err.msg });
        }
    },

    async destroy(req, res) {
        try {
            const { product_id } = req.params;

            let product = await Product.findByPk(product);

            if (!product)
                return res.status(404).json('Product not found');

            product = await Product.destroy({ where: { id: product_id } });

            return res.status(200).json({ msg: `Product successfully deleted (${product})` });
        } catch (err) {
            return res.status(500).json({ error: err.msg });
        }
    },
};