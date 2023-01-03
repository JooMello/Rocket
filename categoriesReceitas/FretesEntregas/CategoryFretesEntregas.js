const Sequelize = require("sequelize");
const connection = require("../../database/database");

const CategoryFretesEntregas = connection.define('categoriesFretesEntregas', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
//CategoryFretesEntregas.sync({ force: true });

module.exports = CategoryFretesEntregas;