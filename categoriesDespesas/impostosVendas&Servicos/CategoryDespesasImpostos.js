const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryDespesasImpostos = connection.define('categoriesDespesasImpostos', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
//CategoryDespesasImpostos.sync({ force: true });

module.exports = CategoryDespesasImpostos;