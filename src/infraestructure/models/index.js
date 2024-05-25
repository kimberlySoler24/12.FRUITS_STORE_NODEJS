const { Fruits, FruitSchema } = require('./Fruit');

const { Orders, OrderSchema } = require('./Order');

function setupModels(sequelize) {
    Fruits.init(FruitSchema, Fruits.config(sequelize));
    Orders.init(OrderSchema, Orders.config(sequelize));
}

module.exports = setupModels;