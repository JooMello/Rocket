const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryDespesasImovel = connection.define('categoriesDespesasImoveis', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
}) 
//CategoryDespesasImovel.sync({ force: true });

module.exports = CategoryDespesasImovel;
