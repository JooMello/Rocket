const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const adminAuth = require("../../../middlewares/adminAuth");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

const CategoryReceitas = require("../../../categoriesReceitas/Vendas&Servicos/CategoryReceitas");
const CategoryOthersReceitas = require("../../../categoriesReceitas/OutrasReceitas&Entradas/CategoryOthersReceitas")
const CategoryFinancialReceitas = require("../../../categoriesReceitas/Financeiras/CategoryFinancialReceitas")
const CategoryDespesasImpostos = require("../../../categoriesDespesas/impostosVendas&Servicos/CategoryDespesasImpostos");
const CategoryDespesasVendasEServicos = require("../../../categoriesDespesas/despesasVendas&Servicos/CategoryDespesasVendas&Servicos");
const CategoryDespesasSalariosEncargos = require("../../../categoriesDespesas/despesasSalarios&Encargos/CategoryDespesasSalariosEncargos");
const CategoryDespesasColaboradores = require("../../../categoriesDespesas/despesasColaboradores/CategoryDespesasColaboradores");
const CategoryDespesasAdministrativas = require("../../../categoriesDespesas/despesasAdministrativas/CategoryDespesasAdministrativas")
const CategoryDespesasComerciais = require("../../../categoriesDespesas/despesasComerciais/CategoryDespesasComerciais")
const CategoryDespesasImovel = require("../../../categoriesDespesas/despesasImovel/CategoryDespesasImovel")
const CategoryDespesasVeiculos = require("../../../categoriesDespesas/veiculos/CategoryDespesasVeiculos")
const CategoryDespesasDiretoria = require("../../../categoriesDespesas/despesasDiretoria/CategoryDespesasDiretoria")
const CategoryDespesasFinanceiras = require("../../../categoriesDespesas/despesasFinanceiras/CategoryDespesasFinanceiras")
const CategoryOutrasDespesas = require("../../../categoriesDespesas/outrasDespesas/CategoryOutrasDespesas")
const CategoryDespesasBensImobilizados = require("../../../categoriesDespesas/bensImobilizados/CategoryDespesasBensImobilizados")
const CategoryDespesasEmprestimosFinanciamentos = require("../../../categoriesDespesas/emprestimos&Financiamentos/CategoryDespesasEmprestimosFinanciamentos")
const CategoryDespesasParcelamentosDividas = require("../../../categoriesDespesas/parcelamentos&Dividas/CategoryDespesasParcelamentosDividas")
const Payment = require("../../../payments/Payment");
const Receipt = require("../../../receipts/Receipt");

module.exports = router;