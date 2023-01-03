const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryReceitas = connection.define('categoriesreceitas', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
//CategoryReceitas.sync({ force: true });

module.exports = CategoryReceitas;