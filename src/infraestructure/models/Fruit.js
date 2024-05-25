const { Model, DataTypes, Sequelize } = require("sequelize");

const FRUIT = 'fruits';

class Fruits extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: FRUIT,
            modelName: 'Fruit',
            timestamps: true
        }
    }
}

const FruitSchema = {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    type: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'type'
    },
    quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'quantity'
    },
    price: {
        allowNull: false,
        type: DataTypes.DOUBLE,
        field: 'price'
    }
}

module.exports = { Fruits, FruitSchema };