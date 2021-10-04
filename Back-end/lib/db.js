const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("lms", 'masood', 'root', {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    define: {
        paranoid: true
    }
});

module.exports = {sequelize};