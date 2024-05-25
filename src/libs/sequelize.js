const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('./../infraestructure/models');

const sequelize = new Sequelize(
    'fruitsStore',
    'postgres',
    '12345',
    {
        host: config.dbHost,
        dialect: 'postgresql',
        port: 5454
    }
);

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize; 
