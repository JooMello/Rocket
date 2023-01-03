const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryDespesasComerciais = connection.define('categoriesDespesasComerciais', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
}) 
//CategoryDespesasComerciais.sync({ force: true });

module.exports = CategoryDespesasComerciais;
