const { Model, DataTypes, Sequelize } = require("sequelize");

const ORDER = 'orders';

class Orders extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: ORDER,
            modelName: 'Order',
            timestamps: true
        }
    }
}

const OrderSchema = {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    fruit_list: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'fruit_list'
    },
    total_value: {
        allowNull: false,
        type: DataTypes.DOUBLE,
        field: 'total_value'
    }
}

module.exports = { Orders, OrderSchema };