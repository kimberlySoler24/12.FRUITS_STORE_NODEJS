const express = require('express');
const router = express.Router();
const fruitController = require('../controllers/FruitController');

router.post('/create', fruitController.create);
router.get('/findAll', fruitController.findAll);
router.get('/findById/:id', fruitController.findById);
router.put('/update/:id', fruitController.update);
router.delete('/delete/:id', fruitController.deleteUser);
module.exports = router;