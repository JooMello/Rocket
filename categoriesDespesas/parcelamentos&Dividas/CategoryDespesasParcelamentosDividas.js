const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryDespesasParcelamentosDividas = connection.define('categoriesDespesasParcelamentosDividas', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
}) 
//CategoryDespesasParcelamentosDividas.sync({ force: true });

module.exports = CategoryDespesasParcelamentosDividas;
