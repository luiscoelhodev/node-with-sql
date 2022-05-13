const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);
const Person = require('../models/person');

try {
    connection.authenticate();
    console.log('Connection has been established successfully!');
} catch (error) {
    console.error('Unable to connect to database: ', error);
}

Person.init(connection);

module.exports = connection;
