const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryDespesasDiretoria = connection.define('categoriesDespesasDiretoria', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
}) 
//CategoryDespesasDiretoria.sync({ force: true });

module.exports = CategoryDespesasDiretoria;
