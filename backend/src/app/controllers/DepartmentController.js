const Department = require('../models/Department');
const Product = require('../models/Product');

module.exports = {
    async index(req, res) {
        try {
            const departments = await Department.findAll({
                include: [
                    {
                        attributes: ['name', 'price'],
                        model: Product,
                        as: 'products',
                    }
                ],
            });

            return res.status(200).json(departments);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async store(req, res) {
        try {
            let { name } = req.body;

            name = name.toUpperCase();

            let department = await Department.findOne({ where: { name } });

            if (department)
                return res.status(302).json({ msg: 'Department already exists' });

            department = await Department.create({ name });

            return res.status(200).json(department);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async show(req, res) {
        try {
            const { department_id } = req.params;

            const department = await Department.findByPk(department_id, {
                include: [
                    {
                        attributes: ['name', 'price'],
                        model: Product,
                        as: 'products',
                    }
                ],
            });

            if (!department)
                return res.status(404).json({ msg: 'Department not found' });

            return res.status(200).json(department);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },

    async destroy(req, res) {
        try {
            const { department_id } = req.params;

            let department = await Department.findByPk(department_id);

            if (!department)
                return res.status(404).json({ msg: 'Department not found' });

            department = await Department.destroy({ where: { id: department_id } });

            return res.status(204).send();
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },
};
