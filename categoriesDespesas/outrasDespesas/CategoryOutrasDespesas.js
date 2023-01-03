const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryOutrasDespesas = connection.define('categoriesOutrasDespesas', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
}) 
//CategoryOutrasDespesas.sync({ force: true });

module.exports = CategoryOutrasDespesas;
