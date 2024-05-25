const FruitService = require('../services/FruitServices');
const services = new FruitService();


const create = async ( req, res) => {
    try {
        const response = await services.create(req.body);
        res.json({ success: true, data: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const findAll = async ( req, res) => {
    try {
        const response = await services.find();
        res.json({ success: true, data: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const findById = async ( req, res) => {
    try {
        const { id } = req.params;
        const response = await services.findById(id);
        res.json({ success: true, data: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}


const update = async ( req, res) => {
    try {
        const { id } = req.params;
        const { body } = req.body;
        const response = await services.update(id, body);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}


const deleteUser = async ( req, res) => {
    try {
        const { id } = req.params;
        const response = await services.deleteUser(id);
        res.json({ success: true, data: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = { create, findAll, findById, update, deleteUser };