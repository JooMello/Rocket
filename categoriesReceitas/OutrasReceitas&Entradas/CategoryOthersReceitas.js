const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryOthersReceitas = connection.define('categoriesOthersReceitas', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
//CategoryOthersReceitas.sync({ force: true });

module.exports = CategoryOthersReceitas;