const OrderService = require('../services/OrderServices');
const services = new OrderService();


const create = async ( req, res) => {
    try {
        const response = await services.create(req.body, res);
        res.json({ success: true, data: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = { create };