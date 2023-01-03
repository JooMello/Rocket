const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryDespesasColaboradores = connection.define('categoriesDespesasColaboradores', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
}) 
//CategoryDespesasColaboradores.sync({ force: true });

module.exports = CategoryDespesasColaboradores;
