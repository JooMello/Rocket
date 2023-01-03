const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryDespesasSalariosEncargos = connection.define('categoriesDespesasSalariosEncargos',{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
}) 
//CategoryDespesasSalariosEncargos.sync({ force: true });

module.exports = CategoryDespesasSalariosEncargos;
