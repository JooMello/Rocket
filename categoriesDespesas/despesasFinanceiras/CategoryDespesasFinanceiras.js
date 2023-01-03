const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryDespesasFinanceiras = connection.define('categoriesDespesasFinanceiras', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
}) 
//CategoryDespesasFinanceiras.sync({ force: true });

module.exports = CategoryDespesasFinanceiras;
