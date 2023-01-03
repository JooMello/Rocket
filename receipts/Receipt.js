const Sequelize = require("sequelize");
const connection = require("../database/database");
const CategoryReceitas = require("../categoriesReceitas/Vendas&Servicos/CategoryReceitas");
const CategoryFinancialReceitas = require("../categoriesReceitas/Financeiras/CategoryFinancialReceitas");
const CategoryOthersReceitas = require("../categoriesReceitas/OutrasReceitas&Entradas/CategoryOthersReceitas")
const CategoryFretesEntregas = require("../categoriesReceitas/FretesEntregas/CategoryFretesEntregas");
const Receipt = connection.define("receipts", {
  data: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  fornecedor: {
    type: Sequelize.STRING,
    allowNull: false,
  }, slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  valor: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  obs: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

CategoryReceitas.hasMany(Receipt);
Receipt.belongsTo(CategoryReceitas);
CategoryOthersReceitas.hasMany(Receipt);
Receipt.belongsTo(CategoryOthersReceitas);
CategoryFinancialReceitas.hasMany(Receipt);
Receipt.belongsTo(CategoryFinancialReceitas);
/////////////////////////////////////////
CategoryFretesEntregas.hasMany(Receipt);
Receipt.belongsTo(CategoryFretesEntregas);

//Receipt.sync({ force: true });

module.exports = Receipt;