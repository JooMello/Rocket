const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryDespesasEmprestimosFinanciamentos = connection.define('categoriesDespesasEmprestimosFinanciamentos', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
}) 
//CategoryDespesasEmprestimosFinanciamentos.sync({ force: true });

module.exports = CategoryDespesasEmprestimosFinanciamentos;
