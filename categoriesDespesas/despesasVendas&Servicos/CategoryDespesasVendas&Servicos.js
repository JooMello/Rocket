const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryDespesasVendasEServicos = connection.define('categoriesDespesasVendasEServicos', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
}) 
//CategoryDespesasVendasEServicos.sync({ force: true });

module.exports = CategoryDespesasVendasEServicos;
