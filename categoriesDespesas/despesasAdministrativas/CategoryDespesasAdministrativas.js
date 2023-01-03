const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryDespesasAdministrativas = connection.define('categoriesDespesasAdministrativas', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
}) 
//CategoryDespesasAdministrativas.sync({ force: true });

module.exports = CategoryDespesasAdministrativas;
