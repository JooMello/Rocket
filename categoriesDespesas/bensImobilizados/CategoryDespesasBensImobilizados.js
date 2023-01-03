const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryDespesasBensImobilizados = connection.define('categoriesDespesasBensImobilizados', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
}) 
//CategoryDespesasBensImobilizados.sync({ force: true });

module.exports = CategoryDespesasBensImobilizados;
