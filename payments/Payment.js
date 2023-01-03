const Sequelize = require("sequelize");
const connection = require("../database/database");
const CategoryDespesasImpostos = require("../categoriesDespesas/impostosVendas&Servicos/CategoryDespesasImpostos")
const CategoryDespesasVendasEServicos = require("../categoriesDespesas/despesasVendas&Servicos/CategoryDespesasVendas&Servicos")
const CategoryDespesasSalariosEncargos = require("../categoriesDespesas/despesasSalarios&Encargos/CategoryDespesasSalariosEncargos")
const CategoryDespesasColaboradores = require("../categoriesDespesas/despesasColaboradores/CategoryDespesasColaboradores")
const CategoryDespesasAdministrativas = require("../categoriesDespesas/despesasAdministrativas/CategoryDespesasAdministrativas")
const CategoryDespesasComerciais = require("../categoriesDespesas/despesasComerciais/CategoryDespesasComerciais")
const CategoryDespesasImovel = require("../categoriesDespesas/despesasImovel/CategoryDespesasImovel")
const CategoryDespesasVeiculos = require("../categoriesDespesas/veiculos/CategoryDespesasVeiculos")
const CategoryDespesasDiretoria = require("../categoriesDespesas/despesasDiretoria/CategoryDespesasDiretoria")
const CategoryDespesasFinanceiras = require("../categoriesDespesas/despesasFinanceiras/CategoryDespesasFinanceiras")
const CategoryOutrasDespesas = require("../categoriesDespesas/outrasDespesas/CategoryOutrasDespesas")
const CategoryDespesasBensImobilizados = require("../categoriesDespesas/bensImobilizados/CategoryDespesasBensImobilizados")
const CategoryDespesasEmprestimosFinanciamentos = require("../categoriesDespesas/emprestimos&Financiamentos/CategoryDespesasEmprestimosFinanciamentos")
const CategoryDespesasParcelamentosDividas = require("../categoriesDespesas/parcelamentos&Dividas/CategoryDespesasParcelamentosDividas")

const Payment = connection.define("payments", {
  data: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  fornecedor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
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




// UMA Categoria tem muitos artigos
// UM Artigo pertence a uma categoria 

CategoryDespesasImpostos.hasMany(Payment);
Payment.belongsTo(CategoryDespesasImpostos);

CategoryDespesasVendasEServicos.hasMany(Payment);
Payment.belongsTo(CategoryDespesasVendasEServicos);

CategoryDespesasSalariosEncargos.hasMany(Payment);
Payment.belongsTo(CategoryDespesasSalariosEncargos);

CategoryDespesasColaboradores.hasMany(Payment);
Payment.belongsTo(CategoryDespesasColaboradores);

CategoryDespesasAdministrativas.hasMany(Payment);
Payment.belongsTo(CategoryDespesasAdministrativas);

CategoryDespesasComerciais.hasMany(Payment);
Payment.belongsTo(CategoryDespesasComerciais);

CategoryDespesasImovel.hasMany(Payment);
Payment.belongsTo(CategoryDespesasImovel);

CategoryDespesasVeiculos.hasMany(Payment);
Payment.belongsTo(CategoryDespesasVeiculos);

CategoryDespesasDiretoria.hasMany(Payment);
Payment.belongsTo(CategoryDespesasDiretoria);

CategoryDespesasFinanceiras.hasMany(Payment);
Payment.belongsTo(CategoryDespesasFinanceiras);

CategoryOutrasDespesas.hasMany(Payment);
Payment.belongsTo(CategoryOutrasDespesas);

CategoryDespesasBensImobilizados.hasMany(Payment);
Payment.belongsTo(CategoryDespesasBensImobilizados);

CategoryDespesasEmprestimosFinanciamentos.hasMany(Payment);
Payment.belongsTo(CategoryDespesasEmprestimosFinanciamentos);

CategoryDespesasParcelamentosDividas.hasMany(Payment);
Payment.belongsTo(CategoryDespesasParcelamentosDividas);





//Payment.sync({ force: true });

module.exports = Payment;