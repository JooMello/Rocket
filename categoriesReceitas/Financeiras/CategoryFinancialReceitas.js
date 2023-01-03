const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryFinancialReceitas = connection.define('categoriesFinancialReceitas', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
//CategoryFinancialReceitas.sync({ force: true });

module.exports = CategoryFinancialReceitas;