const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryDespesasVeiculos = connection.define('categoriesDespesasVeiculos', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
}) 
//CategoryDespesasVeiculos.sync({ force: true });

module.exports = CategoryDespesasVeiculos;
