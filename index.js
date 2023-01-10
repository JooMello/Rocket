const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const connection = require("./database/database");
const slugify = require("slugify");
const adminAuth = require("./middlewares/adminAuth");


const categoriesReceitasController = require("./categoriesReceitas/Vendas&Servicos/CategoriesReceitasController")
const CategoriesOthersController = require("./categoriesReceitas/OutrasReceitas&Entradas/CategoriesOthersController")
const CategoriesFinancialController = require("./categoriesReceitas/Financeiras/CategoriesFinancialController")
const categoriesDespesasImpostosController = require("./categoriesDespesas/impostosVendas&Servicos/CategoriesDespesasImpostosController");
const CategoriesDespesasVendasEServicosController = require("./categoriesDespesas/despesasVendas&Servicos/CategoriesDespesasVendasEServicosController");
const CategoriesDespesasSalariosEncargosController = require("./categoriesDespesas/despesasSalarios&Encargos/CategoriesDespesasSalariosEncargosController");
const CategoriesDespesasColaboradoresController = require("./categoriesDespesas/despesasColaboradores/CategoriesDespesasColaboradoresController");
const CategoriesDespesasAdministrativasController = require("./categoriesDespesas/despesasAdministrativas/CategoriesDespesasAdministrativasController")
const CategoriesDespesasComerciaisController = require("./categoriesDespesas/despesasComerciais/CategoriesDespesasComerciaisController")
const CategoriesDespesasImovelController = require("./categoriesDespesas/despesasImovel/CategoriesDespesasImovelController")
const CategoriesDespesasVeiculosController = require("./categoriesDespesas/veiculos/CategoriesDespesasVeiculosController")
const CategoriesDespesasDiretoriaController = require("./categoriesDespesas/despesasDiretoria/CategoriesDespesasDiretoriaController")
const CategoriesDespesasFinanceirasController = require("./categoriesDespesas/despesasFinanceiras/CategoriesDespesasFinanceirasController")
const CategoriesOutrasDespesasController = require("./categoriesDespesas/outrasDespesas/CategoriesOutrasDespesasController")
const CategoriesDespesasBensImobilizadosController = require("./categoriesDespesas/bensImobilizados/CategoriesDespesasBensImobilizadosController")
const CategoriesDespesasEmprestimosFinanciamentosController = require("./categoriesDespesas/emprestimos&Financiamentos/CategoriesDespesasEmprestimosFinanciamentoController")
const CategoriesDespesasParcelamentosDividasController = require("./categoriesDespesas/parcelamentos&Dividas/CategoriesDespesasParcelamentosDividasController")
const CategoriesFretesEntregasController = require("./categoriesReceitas/FretesEntregas/CategoriesFretesEntregasController")
const usersController = require("./users/UsersController");
const paymentsController = require("./payments/PaymentsController");
const receiptsController = require("./receipts/ReceiptsController");
const CategoryReceitas = require("./categoriesReceitas/Vendas&Servicos/CategoryReceitas");
const CategoryOthersReceitas = require("./categoriesReceitas/OutrasReceitas&Entradas/CategoryOthersReceitas")
const CategoryFinancialReceitas = require("./categoriesReceitas/Financeiras/CategoryFinancialReceitas")
const CategoryDespesasImpostos = require("./categoriesDespesas/impostosVendas&Servicos/CategoryDespesasImpostos");
const CategoryDespesasVendasEServicos = require("./categoriesDespesas/despesasVendas&Servicos/CategoryDespesasVendas&Servicos");
const CategoryDespesasSalariosEncargos = require("./categoriesDespesas/despesasSalarios&Encargos/CategoryDespesasSalariosEncargos");
const CategoryDespesasColaboradores = require("./categoriesDespesas/despesasColaboradores/CategoryDespesasColaboradores");
const CategoryDespesasAdministrativas = require("./categoriesDespesas/despesasAdministrativas/CategoryDespesasAdministrativas")
const CategoryDespesasComerciais = require("./categoriesDespesas/despesasComerciais/CategoryDespesasComerciais")
const CategoryDespesasImovel = require("./categoriesDespesas/despesasImovel/CategoryDespesasImovel")
const CategoryDespesasVeiculos = require("./categoriesDespesas/veiculos/CategoryDespesasVeiculos")
const CategoryDespesasDiretoria = require("./categoriesDespesas/despesasDiretoria/CategoryDespesasDiretoria")
const CategoryDespesasFinanceiras = require("./categoriesDespesas/despesasFinanceiras/CategoryDespesasFinanceiras")
const CategoryOutrasDespesas = require("./categoriesDespesas/outrasDespesas/CategoryOutrasDespesas")
const CategoryDespesasBensImobilizados = require("./categoriesDespesas/bensImobilizados/CategoryDespesasBensImobilizados")
const CategoryDespesasEmprestimosFinanciamentos = require("./categoriesDespesas/emprestimos&Financiamentos/CategoryDespesasEmprestimosFinanciamentos")
const CategoryDespesasParcelamentosDividas = require("./categoriesDespesas/parcelamentos&Dividas/CategoryDespesasParcelamentosDividas")
const CategoryFretesEntregas = require("./categoriesReceitas/FretesEntregas/CategoryFretesEntregas")
const User = require("./users/User");
const Payment = require("./payments/Payment");
const Receipt = require("./receipts/Receipt");

const port = process.env.PORT || 8080;

// View engine
app.set("view engine", "ejs");
// Sessions 
app.use(
  session({
    secret: "qualquercoisa",
    cookie: {
      maxAge: 3000234433240000
    },
  })
);

// Static
app.use(express.static("public"));

//Body parser
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Database

connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });



app.use("/", categoriesReceitasController);
app.use("/", CategoriesOthersController);
app.use("/", CategoriesFinancialController);
app.use("/", categoriesDespesasImpostosController);
app.use("/", CategoriesDespesasVendasEServicosController);
app.use("/", CategoriesDespesasSalariosEncargosController);
app.use("/", CategoriesDespesasColaboradoresController);
app.use("/", CategoriesDespesasAdministrativasController);
app.use("/", CategoriesDespesasComerciaisController);
app.use("/", CategoriesDespesasImovelController);
app.use("/", CategoriesDespesasVeiculosController);
app.use("/", CategoriesDespesasDiretoriaController);
app.use("/", CategoriesDespesasFinanceirasController);
app.use("/", CategoriesOutrasDespesasController);
app.use("/", CategoriesDespesasBensImobilizadosController);
app.use("/", CategoriesDespesasEmprestimosFinanciamentosController);
app.use("/", CategoriesDespesasParcelamentosDividasController);
app.use("/", CategoriesFretesEntregasController);
app.use("/", usersController);
app.use("/", paymentsController);
app.use("/", receiptsController)
const {
  addDays,
  eachDayOfInterval,
  format,
  parseISO
} = require('date-fns');


app.get("/", adminAuth, async (req, res) => {

    //formatar numeros em valores decimais (.toLocaleFixed(2))
    Number.prototype.toLocaleFixed = function (n) {
      return this.toLocaleString(undefined, {
        minimumFractionDigits: n,
        maximumFractionDigits: n
      });
    };

  var totalPayments = 0;
  var totalReceipts = 0;
  var soma = 0;

  var amountP = await Payment.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var amountPayments = (Number(amountP['sum(`valor`)']));
  var totalPayments = (Number(amountP['sum(`valor`)'])).toLocaleFixed(2);

  var amountR = await Receipt.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var amountReceipts = (Number(amountR['sum(`valor`)']));
  var totalReceipts = (Number(amountR['sum(`valor`)'])).toLocaleFixed(2);

  var soma = (Number(-amountPayments) + Number(amountReceipts)).toLocaleFixed(2);

  Receipt.findAll({
    order: [
      ["id", "DESC"]
    ],
    include: [{
      model: CategoryReceitas,
    }, {
      model: CategoryOthersReceitas,
    }, {
      model: CategoryFinancialReceitas,
    }, ],
    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {

    Payment.findAll({
      order: [
        ["id", "DESC"]
      ],
      limit: 20,
    }).then((payments) => {
      CategoryReceitas.findAll().then((categoriesreceitas) => {
        CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
          CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
            res.render("index", {
              payments: payments,
              receipts: receipts,
              categoriesreceitas: categoriesreceitas,
              categoriesOthersReceitas: categoriesOthersReceitas,
              categoriesFinancialReceitas: categoriesFinancialReceitas,
              amountP: amountP,
              totalPayments: totalPayments,
              amountR: amountR,
              totalReceipts: totalReceipts,
              soma: soma,
            });
          });
        })
      })
    })
  })
});


app.get("/admin/categories", adminAuth, (req, res) => {
  CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
    CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
      CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
        CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
          CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
            CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
              CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                  CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                    CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdminstrativas) => {
                      CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                        CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
                          CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
                            CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
                              CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
                                CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
                                  CategoryReceitas.findAll().then((categoriesreceitas) => {
                                    CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
                                      res.render("admin/categories/index", {
                                        categoriesreceitas: categoriesreceitas,
                                        categoriesOthersReceitas: categoriesOthersReceitas,
                                        categoriesFinancialReceitas: categoriesFinancialReceitas,
                                        categoriesFretesEntregas: categoriesFretesEntregas,
                                        categoriesDespesasImpostos: categoriesDespesasImpostos,
                                        categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                        categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                        categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                        categoriesDespesasAdminstrativas: categoriesDespesasAdminstrativas,
                                        categoriesDespesasComerciais: categoriesDespesasComerciais,
                                        categoriesDespesasImoveis: categoriesDespesasImoveis,
                                        categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                        categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                        categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                        categoriesOutrasDespesas: categoriesOutrasDespesas,
                                        categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                        categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                        categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,

                                      })
                                    })
                                  })
                                })
                              })
                            });
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})


app.get("/admin/fluxoCaixa", adminAuth, async (req, res) => {

  const January = new Date('2022/01/01');
  const daysOfJanuary = addDays(January, 31);
  const thisJanuaryDays = eachDayOfInterval({
    start: January,
    end: daysOfJanuary
  }, ).map(d => format(d, 'dd-MM-yyyy'));



  const February = new Date('2022/02/01');
  const daysOfFebruary = addDays(February, 28);
  const thisFebruaryDays = eachDayOfInterval({
    start: February,
    end: daysOfFebruary
  }, ).map(d => format(d, 'dd-MM-yyyy'))

  const March = new Date('2022/03/01');
  const daysOfMarch = addDays(March, 31);
  const thisMarchDays = eachDayOfInterval({
    start: March,
    end: daysOfMarch
  }, ).map(d => format(d, 'dd-MM-yyyy'));

  const April = new Date('2022/04/01');
  const daysOfApril = addDays(April, 30);
  const thisAprilDays = eachDayOfInterval({
    start: April,
    end: daysOfApril
  }, ).map(d => format(d, 'dd-MM-yyyy'));

  const May = new Date('2022/05/01');
  const daysOfMay = addDays(May, 31);
  const thisMayDays = eachDayOfInterval({
    start: May,
    end: daysOfMay
  }, ).map(d => format(d, 'dd-MM-yyyy'));


  const June = new Date('2022/06/01');
  const daysOfJune = addDays(June, 30);
  const thisJuneDays = eachDayOfInterval({
    start: June,
    end: daysOfJune
  }, ).map(d => format(d, 'dd-MM-yyyy'));

  const July = new Date('2022/07/01');
  const daysOfJuly = addDays(July, 30);
  const thisJulyDays = eachDayOfInterval({
    start: July,
    end: daysOfJuly
  }, ).map(d => format(d, 'dd-MM-yyyy'));


  const August = new Date('2022/08/01');
  const daysOfAugust = addDays(August, 31);
  const thisAugustDays = eachDayOfInterval({
    start: August,
    end: daysOfAugust
  }, ).map(d => format(d, 'dd-MM-yyyy'));

  const September = new Date('2022/09/01');
  const daysOfSeptember = addDays(September, 30);
  const thisSeptemberDays = eachDayOfInterval({
    start: September,
    end: daysOfSeptember
  }, ).map(d => format(d, 'dd-MM-yyyy'));

  const October = new Date('2022/10/01');
  const daysOfOctober = addDays(October, 31);
  const thisOctoberDays = eachDayOfInterval({
    start: October,
    end: daysOfOctober
  }, ).map(d => format(d, 'dd-MM-yyyy'));


  const November = new Date('2022/11/01');
  const daysOfNovember = addDays(November, 30);
  const thisNovemberDays = eachDayOfInterval({
    start: November,
    end: daysOfNovember
  }, ).map(d => format(d, 'dd-MM-yyyy'));


  const December = new Date('2022/12/01');
  const daysOfDecember = addDays(December, 31);
  const thisDecemberDays = eachDayOfInterval({
    start: December,
    end: daysOfDecember
  }, ).map(d => format(d, 'dd-MM-yyyy'));




  var totalPayments = 0;
  var totalReceipts = 0;
  var soma = 0;
  //filtragem de dados, por peridodo que eles foram adicionados no BD
  //formatar numeros em valores decimais (.toLocaleFixed(2))
  Number.prototype.toLocaleFixed = function (n) {
    return this.toLocaleString(undefined, {
      minimumFractionDigits: n,
      maximumFractionDigits: n
    });
  };
  //////////////////////total
  var amountP = await Payment.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  var amountPayments = (Number(amountP['sum(`valor`)']))
  var totalPayments = (-Number(amountP['sum(`valor`)'])).toLocaleFixed(2)

  var amountR = await Receipt.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  var amountReceipts = (Number(amountR['sum(`valor`)']))
  var totalReceipts = (Number(amountR['sum(`valor`)'])).toLocaleFixed(2)

  var soma = (Number(-amountPayments) + Number(amountReceipts)).toLocaleFixed(2);

  ////////////////////////////////////////getAmountMonth
  const getAmountMonth = async (table, month, year) => {
    const dt1 = new Date(year, month - 1, 1);
    const dt2 = new Date(year, month, 0);

    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],
      where: {
        data: {
          [Op.between]: [dt1, dt2],
        },
      },
      raw: true
    });

    return Number(row['sum(`valor`)']);
  };


  var paymentsJ = (await getAmountMonth(Payment, 1, 2022));
  var paymentsF = (await getAmountMonth(Payment, 2, 2022));
  var paymentsMar = (await getAmountMonth(Payment, 3, 2022));
  var paymentsAp = (await getAmountMonth(Payment, 4, 2022));
  var paymentsMa = (await getAmountMonth(Payment, 5, 2022));
  var paymentsJn = (await getAmountMonth(Payment, 6, 2022));
  var paymentsJl = (await getAmountMonth(Payment, 7, 2022));
  var paymentsAg = (await getAmountMonth(Payment, 8, 2022));
  var paymentsSt = (await getAmountMonth(Payment, 9, 2022));
  var paymentsOt = (await getAmountMonth(Payment, 10, 2022));
  var paymentsNv = (await getAmountMonth(Payment, 11, 2022));
  var paymentsDz = (await getAmountMonth(Payment, 12, 2022));
  //////////////////////////////////////////
  var receiptsJ = (await getAmountMonth(Receipt, 1, 2022));
  var receiptsF = (await getAmountMonth(Receipt, 2, 2022));
  var receiptsMar = (await getAmountMonth(Receipt, 3, 2022));
  var receiptsAp = (await getAmountMonth(Receipt, 4, 2022));
  var receiptsMa = (await getAmountMonth(Receipt, 5, 2022));
  var receiptsJn = (await getAmountMonth(Receipt, 6, 2022));
  var receiptsJl = (await getAmountMonth(Receipt, 7, 2022));
  var receiptsAg = (await getAmountMonth(Receipt, 8, 2022));
  var receiptsSt = (await getAmountMonth(Receipt, 9, 2022));
  var receiptsOt = (await getAmountMonth(Receipt, 10, 2022));
  var receiptsNv = (await getAmountMonth(Receipt, 11, 2022));
  var receiptsDz = (await getAmountMonth(Receipt, 12, 2022));


  const getTotalMonth = async (month, year) => {
    const payments = await getAmountMonth(Payment, month, year);
    const receipts = await getAmountMonth(Receipt, month, year);

    return Number(-payments) + Number(receipts);
  };

  var somaJ = (await getTotalMonth(1, 2022));
  var somaF = (await getTotalMonth(2, 2022));
  var somaMar = (await getTotalMonth(3, 2022));
  var somaAp = (await getTotalMonth(4, 2022));
  var somaMa = (await getTotalMonth(5, 2022));
  var somaJn = (await getTotalMonth(6, 2022));
  var somaJl = (await getTotalMonth(7, 2022));
  var somaAg = (await getTotalMonth(8, 2022));
  var somaSt = (await getTotalMonth(9, 2022));
  var somaOt = (await getTotalMonth(10, 2022));
  var somaNv = (await getTotalMonth(11, 2022));
  var somaDz = (await getTotalMonth(12, 2022));
  ////////////////////////////////// variaveis com F no final, recebe formatação numerica 
  var somaJF = (somaJ).toLocaleFixed(2)
  var somaFF = (somaF).toLocaleFixed(2)
  var somaMarF = (somaMar).toLocaleFixed(2) 
  var somaApF = (somaAp).toLocaleFixed(2)
  var somaMaF = (somaMa).toLocaleFixed(2)
  var somaJnF = (somaJn).toLocaleFixed(2)
  var somaJlF = (somaJl).toLocaleFixed(2)
  var somaAgF = (somaAg).toLocaleFixed(2)
  var somaStF = (somaSt).toLocaleFixed(2)
  var somaOtF = (somaOt).toLocaleFixed(2)
  var somaNvF = (somaNv).toLocaleFixed(2)
  var somaDzF = (somaDz).toLocaleFixed(2)
  var paymentsJF = (-paymentsJ).toLocaleFixed(2)
  var paymentsFF = (-paymentsF).toLocaleFixed(2)
  var paymentsMarF = (-paymentsMar).toLocaleFixed(2)
  var paymentsApF = (-paymentsAp).toLocaleFixed(2)
  var paymentsMaF = (-paymentsMa).toLocaleFixed(2)
  var paymentsJnF = (-paymentsJn).toLocaleFixed(2)
  var paymentsJlF = (-paymentsJl).toLocaleFixed(2)
  var paymentsAgF = (-paymentsAg).toLocaleFixed(2)
  var paymentsStF = (-paymentsSt).toLocaleFixed(2)
  var paymentsOtF = (-paymentsOt).toLocaleFixed(2)
  var paymentsNvF = (-paymentsNv).toLocaleFixed(2)
  var paymentsDzF = (-paymentsDz).toLocaleFixed(2)
  var receiptsJF = (receiptsJ).toLocaleFixed(2)
  var receiptsFF = (receiptsF).toLocaleFixed(2)
  var receiptsMarF = (receiptsMar).toLocaleFixed(2)
  var receiptsApF = (receiptsAp).toLocaleFixed(2)
  var receiptsMaF = (receiptsMa).toLocaleFixed(2)
  var receiptsJnF = (receiptsJn).toLocaleFixed(2)
  var receiptsJlF = (receiptsJl).toLocaleFixed(2)
  var receiptsAgF = (receiptsAg).toLocaleFixed(2)
  var receiptsStF = (receiptsSt).toLocaleFixed(2)
  var receiptsOtF = (receiptsOt).toLocaleFixed(2)
  var receiptsNvF = (receiptsNv).toLocaleFixed(2)
  var receiptsDzF = (receiptsDz).toLocaleFixed(2)

  //filtragem de dados, por peridodo que eles foram adicionados no BD e por categorias(DespesasVendasEServicoId)
  ///////////////////////////////////////getAmountMonth
  const getAmountCategoriesDespesasVendasEServicoId = async (table, month, year) => {
    const dt1 = new Date(year, month - 1, 1);
    const dt2 = new Date(year, month, 0);

    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],

      where: {
        categoriesDespesasVendasEServicoId: [200, 201, 202, 203, 204, 205],
        data: {
          [Op.between]: [dt1, dt2],
        },
      },
      raw: true
    });
    return -Number(row['sum(`valor`)']);
  }

  var DespesasVendasEServicoJ = (await getAmountCategoriesDespesasVendasEServicoId(Payment, 1, 2022)).toLocaleFixed(2);
  var DespesasVendasEServicoF = (await getAmountCategoriesDespesasVendasEServicoId(Payment, 2, 2022)).toLocaleFixed(2);
  var DespesasVendasEServicoMar = (await getAmountCategoriesDespesasVendasEServicoId(Payment, 3, 2022)).toLocaleFixed(2);
  var DespesasVendasEServicoAp = (await getAmountCategoriesDespesasVendasEServicoId(Payment, 4, 2022)).toLocaleFixed(2);
  var DespesasVendasEServicoMa = (await getAmountCategoriesDespesasVendasEServicoId(Payment, 5, 2022)).toLocaleFixed(2);
  var DespesasVendasEServicoJn = (await getAmountCategoriesDespesasVendasEServicoId(Payment, 6, 2022)).toLocaleFixed(2);
  var DespesasVendasEServicoJl = (await getAmountCategoriesDespesasVendasEServicoId(Payment, 7, 2022)).toLocaleFixed(2);
  var DespesasVendasEServicoAg = (await getAmountCategoriesDespesasVendasEServicoId(Payment, 8, 2022)).toLocaleFixed(2);
  var DespesasVendasEServicoSt = (await getAmountCategoriesDespesasVendasEServicoId(Payment, 9, 2022)).toLocaleFixed(2);
  var DespesasVendasEServicoOt = (await getAmountCategoriesDespesasVendasEServicoId(Payment, 10, 2022)).toLocaleFixed(2);
  var DespesasVendasEServicoNv = (await getAmountCategoriesDespesasVendasEServicoId(Payment, 11, 2022)).toLocaleFixed(2);
  var DespesasVendasEServicoDz = (await getAmountCategoriesDespesasVendasEServicoId(Payment, 12, 2022)).toLocaleFixed(2);
  //////////////////////////////////////////
  //////////////////////total  DespesasVendasEServico
  var amountPDespesasVendasEServico = await Payment.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasVendasEServicoId: [200, 201, 202, 203, 204, 205],
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  var totalPaymentsDespesasVendasEServico = (-Number(amountPDespesasVendasEServico['sum(`valor`)'])).toLocaleFixed(2)

  //filtragem de dados, por peridodo que eles foram adicionados no BD e por categorias(categoriesDespesasSalariosEncargoId)
  ///////////////////////////////////////getAmountMonth
  const getAmountCategoriesDespesasSalariosEncargoId = async (table, month, year) => {
    const dt1 = new Date(year, month - 1, 1);
    const dt2 = new Date(year, month, 0);

    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],

      where: {
        categoriesDespesasSalariosEncargoId: [400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413],
        data: {
          [Op.between]: [dt1, dt2],
        },
      },

      raw: true
    });

    return -Number(row['sum(`valor`)']);
  }

  var DespesasSalariosEncargoJ = (await getAmountCategoriesDespesasSalariosEncargoId(Payment, 1, 2022)).toLocaleFixed(2);
  var DespesasSalariosEncargoF = (await getAmountCategoriesDespesasSalariosEncargoId(Payment, 2, 2022)).toLocaleFixed(2);
  var DespesasSalariosEncargoMar = (await getAmountCategoriesDespesasSalariosEncargoId(Payment, 3, 2022)).toLocaleFixed(2);
  var DespesasSalariosEncargoAp = (await getAmountCategoriesDespesasSalariosEncargoId(Payment, 4, 2022)).toLocaleFixed(2);
  var DespesasSalariosEncargoMa = (await getAmountCategoriesDespesasSalariosEncargoId(Payment, 5, 2022)).toLocaleFixed(2);
  var DespesasSalariosEncargoJn = (await getAmountCategoriesDespesasSalariosEncargoId(Payment, 6, 2022)).toLocaleFixed(2);
  var DespesasSalariosEncargoJl = (await getAmountCategoriesDespesasSalariosEncargoId(Payment, 7, 2022)).toLocaleFixed(2);
  var DespesasSalariosEncargoAg = (await getAmountCategoriesDespesasSalariosEncargoId(Payment, 8, 2022)).toLocaleFixed(2);
  var DespesasSalariosEncargoSt = (await getAmountCategoriesDespesasSalariosEncargoId(Payment, 9, 2022)).toLocaleFixed(2);
  var DespesasSalariosEncargoOt = (await getAmountCategoriesDespesasSalariosEncargoId(Payment, 10, 2022)).toLocaleFixed(2);
  var DespesasSalariosEncargoNv = (await getAmountCategoriesDespesasSalariosEncargoId(Payment, 11, 2022)).toLocaleFixed(2);
  var DespesasSalariosEncargoDz = (await getAmountCategoriesDespesasSalariosEncargoId(Payment, 12, 2022)).toLocaleFixed(2);
  //////////////////////////////////////////
  //////////////////////total  categoriesDespesasSalariosEncargoId
  var amountPDespesasSalariosEncargo = await Payment.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasSalariosEncargoId:  [400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413],
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  var totalPaymentsDespesasSalariosEncargo = (-Number(amountPDespesasSalariosEncargo['sum(`valor`)'])).toLocaleFixed(2)


  //filtragem de dados, por peridodo que eles foram adicionados no BD e por categorias(categoriesDespesasColaboradoreId)
  ///////////////////////////////////////getAmountMonth
  const getAmountCategoriesDespesasColaboradoreId = async (table, month, year) => {
    const dt1 = new Date(year, month - 1, 1);
    const dt2 = new Date(year, month, 0);

    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],

      where: {
        categoriesDespesasColaboradoreId: [300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313],
        data: {
          [Op.between]: [dt1, dt2],
        },
      },

      raw: true
    });

    return -Number(row['sum(`valor`)']);
  }

  var DespesasColaboradoresJ = (await getAmountCategoriesDespesasColaboradoreId(Payment, 1, 2022)).toLocaleFixed(2);
  var DespesasColaboradoresF = (await getAmountCategoriesDespesasColaboradoreId(Payment, 2, 2022)).toLocaleFixed(2);
  var DespesasColaboradoresMar = (await getAmountCategoriesDespesasColaboradoreId(Payment, 3, 2022)).toLocaleFixed(2);
  var DespesasColaboradoresAp = (await getAmountCategoriesDespesasColaboradoreId(Payment, 4, 2022)).toLocaleFixed(2);
  var DespesasColaboradoresMa = (await getAmountCategoriesDespesasColaboradoreId(Payment, 5, 2022)).toLocaleFixed(2);
  var DespesasColaboradoresJn = (await getAmountCategoriesDespesasColaboradoreId(Payment, 6, 2022)).toLocaleFixed(2);
  var DespesasColaboradoresJl = (await getAmountCategoriesDespesasColaboradoreId(Payment, 7, 2022)).toLocaleFixed(2);
  var DespesasColaboradoresAg = (await getAmountCategoriesDespesasColaboradoreId(Payment, 8, 2022)).toLocaleFixed(2);
  var DespesasColaboradoresSt = (await getAmountCategoriesDespesasColaboradoreId(Payment, 9, 2022)).toLocaleFixed(2);
  var DespesasColaboradoresOt = (await getAmountCategoriesDespesasColaboradoreId(Payment, 10, 2022)).toLocaleFixed(2);
  var DespesasColaboradoresNv = (await getAmountCategoriesDespesasColaboradoreId(Payment, 11, 2022)).toLocaleFixed(2);
  var DespesasColaboradoresDz = (await getAmountCategoriesDespesasColaboradoreId(Payment, 12, 2022)).toLocaleFixed(2);
  //////////////////////////////////////////
  //////////////////////total  categoriesDespesasColaboradoreId
  var amountPDespesasColaboradores = await Payment.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasColaboradoreId: [300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313],
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  var totalPaymentsDespesasColaboradores = (-Number(amountPDespesasColaboradores['sum(`valor`)'])).toLocaleFixed(2)

  //filtragem de dados, por peridodo que eles foram adicionados no BD e por categorias(categoriesDespesasAdministrativaId)
  ///////////////////////////////////////getAmountMonth
  const getAmountCategoriesDespesasAdministrativaId = async (table, month, year) => {
    const dt1 = new Date(year, month - 1, 1);
    const dt2 = new Date(year, month, 0);

    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],

      where: {
        categoriesDespesasAdministrativaId: [500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537],
        data: {
          [Op.between]: [dt1, dt2],
        },
      },

      raw: true
    });

    return -Number(row['sum(`valor`)']);
  }

  var DespesasAdministrativaJ = (await getAmountCategoriesDespesasAdministrativaId(Payment, 1, 2022)).toLocaleFixed(2);
  var DespesasAdministrativaF = (await getAmountCategoriesDespesasAdministrativaId(Payment, 2, 2022)).toLocaleFixed(2);
  var DespesasAdministrativaMar = (await getAmountCategoriesDespesasAdministrativaId(Payment, 3, 2022)).toLocaleFixed(2);
  var DespesasAdministrativaAp = (await getAmountCategoriesDespesasAdministrativaId(Payment, 4, 2022)).toLocaleFixed(2);
  var DespesasAdministrativaMa = (await getAmountCategoriesDespesasAdministrativaId(Payment, 5, 2022)).toLocaleFixed(2);
  var DespesasAdministrativaJn = (await getAmountCategoriesDespesasAdministrativaId(Payment, 6, 2022)).toLocaleFixed(2);
  var DespesasAdministrativaJl = (await getAmountCategoriesDespesasAdministrativaId(Payment, 7, 2022)).toLocaleFixed(2);
  var DespesasAdministrativaAg = (await getAmountCategoriesDespesasAdministrativaId(Payment, 8, 2022)).toLocaleFixed(2);
  var DespesasAdministrativaSt = (await getAmountCategoriesDespesasAdministrativaId(Payment, 9, 2022)).toLocaleFixed(2);
  var DespesasAdministrativaOt = (await getAmountCategoriesDespesasAdministrativaId(Payment, 10, 2022)).toLocaleFixed(2);
  var DespesasAdministrativaNv = (await getAmountCategoriesDespesasAdministrativaId(Payment, 11, 2022)).toLocaleFixed(2);
  var DespesasAdministrativaDz = (await getAmountCategoriesDespesasAdministrativaId(Payment, 12, 2022)).toLocaleFixed(2);
  //////////////////////////////////////////
  //////////////////////total  categoriesDespesasColaboradoreId
  var amountPDespesasAdministrativa = await Payment.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasAdministrativaId: [500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537],
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  var totalPaymentsDespesasAdministrativa = (-Number(amountPDespesasAdministrativa['sum(`valor`)'])).toLocaleFixed(2)


  //filtragem de dados, por peridodo que eles foram adicionados no BD e por categorias(categoriesDespesasImoveiId)
  ///////////////////////////////////////getAmountMonth
  const getAmountCategoriesDespesasImoveiId = async (table, month, year) => {
    const dt1 = new Date(year, month - 1, 1);
    const dt2 = new Date(year, month, 0);

    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],

      where: {
        categoriesDespesasImoveiId: [700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712],
        data: {
          [Op.between]: [dt1, dt2],
        },
      },

      raw: true
    });

    return -Number(row['sum(`valor`)']);
  }

  var DespesasImoveisJ = (await getAmountCategoriesDespesasImoveiId(Payment, 1, 2022)).toLocaleFixed(2);
  var DespesasImoveisF = (await getAmountCategoriesDespesasImoveiId(Payment, 2, 2022)).toLocaleFixed(2);
  var DespesasImoveisMar = (await getAmountCategoriesDespesasImoveiId(Payment, 3, 2022)).toLocaleFixed(2);
  var DespesasImoveisAp = (await getAmountCategoriesDespesasImoveiId(Payment, 4, 2022)).toLocaleFixed(2);
  var DespesasImoveisMa = (await getAmountCategoriesDespesasImoveiId(Payment, 5, 2022)).toLocaleFixed(2);
  var DespesasImoveisJn = (await getAmountCategoriesDespesasImoveiId(Payment, 6, 2022)).toLocaleFixed(2);
  var DespesasImoveisJl = (await getAmountCategoriesDespesasImoveiId(Payment, 7, 2022)).toLocaleFixed(2);
  var DespesasImoveisAg = (await getAmountCategoriesDespesasImoveiId(Payment, 8, 2022)).toLocaleFixed(2);
  var DespesasImoveisSt = (await getAmountCategoriesDespesasImoveiId(Payment, 9, 2022)).toLocaleFixed(2);
  var DespesasImoveisOt = (await getAmountCategoriesDespesasImoveiId(Payment, 10, 2022)).toLocaleFixed(2);
  var DespesasImoveisNv = (await getAmountCategoriesDespesasImoveiId(Payment, 11, 2022)).toLocaleFixed(2);
  var DespesasImoveisDz = (await getAmountCategoriesDespesasImoveiId(Payment, 12, 2022)).toLocaleFixed(2);
  //////////////////////////////////////////
  //////////////////////total  categoriesDespesasColaboradoreId
  var amountPDespesasImoveis = await Payment.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasImoveiId: [700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712],
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  var totalPaymentsDespesasImoveis = (-Number(amountPDespesasImoveis['sum(`valor`)'])).toLocaleFixed(2)

  //filtragem de dados, por peridodo que eles foram adicionados no BD e por categorias(categoriesDespesasVeiculoId)
  ///////////////////////////////////////getAmountMonth
  const getAmountCategoriesDespesasVeiculoId = async (table, month, year) => {
    const dt1 = new Date(year, month - 1, 1);
    const dt2 = new Date(year, month, 0);

    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],

      where: {
        categoriesDespesasVeiculoId: [800, 801, 802, 803, 804, 805, 806, 807, 808],
        data: {
          [Op.between]: [dt1, dt2],
        },
      },

      raw: true
    });

    return -Number(row['sum(`valor`)']);
  }

  var DespesasVeiculosJ = (await getAmountCategoriesDespesasVeiculoId(Payment, 1, 2022)).toLocaleFixed(2);
  var DespesasVeiculosF = (await getAmountCategoriesDespesasVeiculoId(Payment, 2, 2022)).toLocaleFixed(2);
  var DespesasVeiculosMar = (await getAmountCategoriesDespesasVeiculoId(Payment, 3, 2022)).toLocaleFixed(2);
  var DespesasVeiculosAp = (await getAmountCategoriesDespesasVeiculoId(Payment, 4, 2022)).toLocaleFixed(2);
  var DespesasVeiculosMa = (await getAmountCategoriesDespesasVeiculoId(Payment, 5, 2022)).toLocaleFixed(2);
  var DespesasVeiculosJn = (await getAmountCategoriesDespesasVeiculoId(Payment, 6, 2022)).toLocaleFixed(2);
  var DespesasVeiculosJl = (await getAmountCategoriesDespesasVeiculoId(Payment, 7, 2022)).toLocaleFixed(2);
  var DespesasVeiculosAg = (await getAmountCategoriesDespesasVeiculoId(Payment, 8, 2022)).toLocaleFixed(2);
  var DespesasVeiculosSt = (await getAmountCategoriesDespesasVeiculoId(Payment, 9, 2022)).toLocaleFixed(2);
  var DespesasVeiculosOt = (await getAmountCategoriesDespesasVeiculoId(Payment, 10, 2022)).toLocaleFixed(2);
  var DespesasVeiculosNv = (await getAmountCategoriesDespesasVeiculoId(Payment, 11, 2022)).toLocaleFixed(2);
  var DespesasVeiculosDz = (await getAmountCategoriesDespesasVeiculoId(Payment, 12, 2022)).toLocaleFixed(2);
  //////////////////////////////////////////
  //////////////////////total  categoriesDespesasColaboradoreId
  var amountPDespesasVeiculos = await Payment.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasVeiculoId: [800, 801, 802, 803, 804, 805, 806, 807, 808],
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  var totalPaymentsDespesasVeiculos = (-Number(amountPDespesasVeiculos['sum(`valor`)'])).toLocaleFixed(2)

  //filtragem de dados, por peridodo que eles foram adicionados no BD e por categorias(categoriesDespesasBensImobilizadoId)
  ///////////////////////////////////////getAmountMonth
  const getAmountCategoriesDespesasBensImobilizadoId = async (table, month, year) => {
    const dt1 = new Date(year, month - 1, 1);
    const dt2 = new Date(year, month, 0);

    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],

      where: {
        categoriesDespesasBensImobilizadoId: [1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1220, 1221],
        data: {
          [Op.between]: [dt1, dt2],
        },
      },

      raw: true
    });

    return -Number(row['sum(`valor`)']);
  }

  var DespesasBensImobilizadosJ = (await getAmountCategoriesDespesasBensImobilizadoId(Payment, 1, 2022)).toLocaleFixed(2);
  var DespesasBensImobilizadosF = (await getAmountCategoriesDespesasBensImobilizadoId(Payment, 2, 2022)).toLocaleFixed(2);
  var DespesasBensImobilizadosMar = (await getAmountCategoriesDespesasBensImobilizadoId(Payment, 3, 2022)).toLocaleFixed(2);
  var DespesasBensImobilizadosAp = (await getAmountCategoriesDespesasBensImobilizadoId(Payment, 4, 2022)).toLocaleFixed(2);
  var DespesasBensImobilizadosMa = (await getAmountCategoriesDespesasBensImobilizadoId(Payment, 5, 2022)).toLocaleFixed(2);
  var DespesasBensImobilizadosJn = (await getAmountCategoriesDespesasBensImobilizadoId(Payment, 6, 2022)).toLocaleFixed(2);
  var DespesasBensImobilizadosJl = (await getAmountCategoriesDespesasBensImobilizadoId(Payment, 7, 2022)).toLocaleFixed(2);
  var DespesasBensImobilizadosAg = (await getAmountCategoriesDespesasBensImobilizadoId(Payment, 8, 2022)).toLocaleFixed(2);
  var DespesasBensImobilizadosSt = (await getAmountCategoriesDespesasBensImobilizadoId(Payment, 9, 2022)).toLocaleFixed(2);
  var DespesasBensImobilizadosOt = (await getAmountCategoriesDespesasBensImobilizadoId(Payment, 10, 2022)).toLocaleFixed(2);
  var DespesasBensImobilizadosNv = (await getAmountCategoriesDespesasBensImobilizadoId(Payment, 11, 2022)).toLocaleFixed(2);
  var DespesasBensImobilizadosDz = (await getAmountCategoriesDespesasBensImobilizadoId(Payment, 12, 2022)).toLocaleFixed(2);
  //////////////////////////////////////////
  //////////////////////total  categoriesDespesasColaboradoreId
  var amountPDespesasBensImobilizados = await Payment.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasBensImobilizadoId: [1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1220, 1221],
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  var totalPaymentsDespesasBensImobilizados = (-Number(amountPDespesasBensImobilizados['sum(`valor`)'])).toLocaleFixed(2)

  //filtragem de dados, por peridodo que eles foram adicionados no (getAmount) Janeiro
  ///////////////////////////////////////getAmount
  const getAmount = async (table, day, month, year) => {
    const dt1 = new Date(year, month, day - 1, 1);
    const dt2 = new Date(year, month, day, 0);

    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],
      where: {
        data: {
          [Op.between]: [dt1, dt2],
        },
      },
      raw: true
    });
    return Number(row['sum(`valor`)']);
  }

  var ReceiptsJanuary2022 = ([
    (Number(await getAmount(Receipt, 1, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 2, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 3, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 4, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 5, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 6, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 7, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 8, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 9, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 10, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 11, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 12, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 13, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 14, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 15, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 16, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 17, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 18, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 19, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 20, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 21, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 22, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 23, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 24, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 25, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 26, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 27, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 28, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 29, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 30, 0, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 31, 0, 2022))).toLocaleFixed(2)
  ]);

  var PaymentsJanuary2022 = ([
    (-Number(await getAmount(Payment, 1, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 2, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 3, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 4, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 5, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 6, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 7, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 8, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 9, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 10, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 11, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 12, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 13, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 14, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 15, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 16, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 17, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 18, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 19, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 20, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 21, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 22, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 23, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 24, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 25, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 26, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 27, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 28, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 29, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 30, 0, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 31, 0, 2022))).toLocaleFixed(2)
  ]);


  var somaJanuary1 = (Number(await getAmount(Receipt, 1, 0, 2022)) - Number(await getAmount(Payment, 1, 0, 2022)));
  var somaJanuary2 = (Number(await getAmount(Receipt, 2, 0, 2022)) - Number(await getAmount(Payment, 2, 0, 2022)));
  var somaJanuary3 = (Number(await getAmount(Receipt, 3, 0, 2022)) - Number(await getAmount(Payment, 3, 0, 2022)));
  var somaJanuary4 = (Number(await getAmount(Receipt, 4, 0, 2022)) - Number(await getAmount(Payment, 4, 0, 2022)));
  var somaJanuary5 = (Number(await getAmount(Receipt, 5, 0, 2022)) - Number(await getAmount(Payment, 5, 0, 2022)));
  var somaJanuary6 = (Number(await getAmount(Receipt, 6, 0, 2022)) - Number(await getAmount(Payment, 6, 0, 2022)));
  var somaJanuary7 = (Number(await getAmount(Receipt, 7, 0, 2022)) - Number(await getAmount(Payment, 7, 0, 2022)));
  var somaJanuary8 = (Number(await getAmount(Receipt, 8, 0, 2022)) - Number(await getAmount(Payment, 8, 0, 2022)));
  var somaJanuary9 = (Number(await getAmount(Receipt, 9, 0, 2022)) - Number(await getAmount(Payment, 9, 0, 2022)));
  var somaJanuary10 = (Number(await getAmount(Receipt, 10, 0, 2022)) - Number(await getAmount(Payment, 10, 0, 2022)));
  var somaJanuary11 = (Number(await getAmount(Receipt, 11, 0, 2022)) - Number(await getAmount(Payment, 11, 0, 2022)));
  var somaJanuary12 = (Number(await getAmount(Receipt, 12, 0, 2022)) - Number(await getAmount(Payment, 12, 0, 2022)));
  var somaJanuary13 = (Number(await getAmount(Receipt, 13, 0, 2022)) - Number(await getAmount(Payment, 13, 0, 2022)));
  var somaJanuary14 = (Number(await getAmount(Receipt, 14, 0, 2022)) - Number(await getAmount(Payment, 14, 0, 2022)));
  var somaJanuary15 = (Number(await getAmount(Receipt, 15, 0, 2022)) - Number(await getAmount(Payment, 15, 0, 2022)));
  var somaJanuary16 = (Number(await getAmount(Receipt, 16, 0, 2022)) - Number(await getAmount(Payment, 16, 0, 2022)));
  var somaJanuary17 = (Number(await getAmount(Receipt, 17, 0, 2022)) - Number(await getAmount(Payment, 17, 0, 2022)));
  var somaJanuary18 = (Number(await getAmount(Receipt, 18, 0, 2022)) - Number(await getAmount(Payment, 18, 0, 2022)));
  var somaJanuary19 = (Number(await getAmount(Receipt, 19, 0, 2022)) - Number(await getAmount(Payment, 19, 0, 2022)));
  var somaJanuary20 = (Number(await getAmount(Receipt, 20, 0, 2022)) - Number(await getAmount(Payment, 20, 0, 2022)));
  var somaJanuary21 = (Number(await getAmount(Receipt, 21, 0, 2022)) - Number(await getAmount(Payment, 21, 0, 2022)));
  var somaJanuary22 = (Number(await getAmount(Receipt, 22, 0, 2022)) - Number(await getAmount(Payment, 22, 0, 2022)));
  var somaJanuary23 = (Number(await getAmount(Receipt, 23, 0, 2022)) - Number(await getAmount(Payment, 23, 0, 2022)));
  var somaJanuary24 = (Number(await getAmount(Receipt, 24, 0, 2022)) - Number(await getAmount(Payment, 24, 0, 2022)));
  var somaJanuary25 = (Number(await getAmount(Receipt, 25, 0, 2022)) - Number(await getAmount(Payment, 25, 0, 2022)));
  var somaJanuary26 = (Number(await getAmount(Receipt, 26, 0, 2022)) - Number(await getAmount(Payment, 26, 0, 2022)));
  var somaJanuary27 = (Number(await getAmount(Receipt, 27, 0, 2022)) - Number(await getAmount(Payment, 27, 0, 2022)));
  var somaJanuary28 = (Number(await getAmount(Receipt, 28, 0, 2022)) - Number(await getAmount(Payment, 28, 0, 2022)));
  var somaJanuary29 = (Number(await getAmount(Receipt, 29, 0, 2022)) - Number(await getAmount(Payment, 29, 0, 2022)));
  var somaJanuary30 = (Number(await getAmount(Receipt, 30, 0, 2022)) - Number(await getAmount(Payment, 30, 0, 2022)));
  var somaJanuary31 = (Number(await getAmount(Receipt, 31, 0, 2022)) - Number(await getAmount(Payment, 31, 0, 2022)));
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var amountJanuary1 = somaJanuary1;
  var amountJanuary2 = (parseInt(somaJanuary1) + parseInt(somaJanuary2));
  var amountJanuary3 = (parseInt(amountJanuary2) + parseInt(somaJanuary3));
  var amountJanuary4 = (parseInt(amountJanuary3) + parseInt(somaJanuary4));
  var amountJanuary5 = (parseInt(amountJanuary4) + parseInt(somaJanuary5));
  var amountJanuary6 = (parseInt(amountJanuary5) + parseInt(somaJanuary6));
  var amountJanuary7 = (parseInt(amountJanuary6) + parseInt(somaJanuary7));
  var amountJanuary8 = (parseInt(amountJanuary7) + parseInt(somaJanuary8));
  var amountJanuary9 = (parseInt(amountJanuary8) + parseInt(somaJanuary9));
  var amountJanuary10 = (parseInt(amountJanuary9) + parseInt(somaJanuary10));
  var amountJanuary11 = (parseInt(amountJanuary10) + parseInt(somaJanuary11));
  var amountJanuary12 = (parseInt(amountJanuary11) + parseInt(somaJanuary12));
  var amountJanuary13 = (parseInt(amountJanuary12) + parseInt(somaJanuary13));
  var amountJanuary14 = (parseInt(amountJanuary13) + parseInt(somaJanuary14));
  var amountJanuary15 = (parseInt(amountJanuary14) + parseInt(somaJanuary15));
  var amountJanuary16 = (parseInt(amountJanuary15) + parseInt(somaJanuary16));
  var amountJanuary17 = (parseInt(amountJanuary16) + parseInt(somaJanuary17));
  var amountJanuary18 = (parseInt(amountJanuary17) + parseInt(somaJanuary18));
  var amountJanuary19 = (parseInt(amountJanuary18) + parseInt(somaJanuary19));
  var amountJanuary20 = (parseInt(amountJanuary19) + parseInt(somaJanuary20));
  var amountJanuary21 = (parseInt(amountJanuary20) + parseInt(somaJanuary21));
  var amountJanuary22 = (parseInt(amountJanuary21) + parseInt(somaJanuary22));
  var amountJanuary23 = (parseInt(amountJanuary22) + parseInt(somaJanuary23));
  var amountJanuary24 = (parseInt(amountJanuary23) + parseInt(somaJanuary24));
  var amountJanuary25 = (parseInt(amountJanuary24) + parseInt(somaJanuary25));
  var amountJanuary26 = (parseInt(amountJanuary25) + parseInt(somaJanuary26));
  var amountJanuary27 = (parseInt(amountJanuary26) + parseInt(somaJanuary27));
  var amountJanuary28 = (parseInt(amountJanuary27) + parseInt(somaJanuary28));
  var amountJanuary29 = (parseInt(amountJanuary28) + parseInt(somaJanuary29));
  var amountJanuary30 = (parseInt(amountJanuary29) + parseInt(somaJanuary30));
  var amountJanuary31 = (parseInt(amountJanuary30) + parseInt(somaJanuary31));


  var amountDaysJanuary = ([
    amountJanuary1.toLocaleFixed(2), amountJanuary2.toLocaleFixed(2), amountJanuary3.toLocaleFixed(2),
    amountJanuary4.toLocaleFixed(2), amountJanuary5.toLocaleFixed(2), amountJanuary6.toLocaleFixed(2),
    amountJanuary7.toLocaleFixed(2), amountJanuary8.toLocaleFixed(2), amountJanuary9.toLocaleFixed(2),
    amountJanuary10.toLocaleFixed(2), amountJanuary11.toLocaleFixed(2), amountJanuary12.toLocaleFixed(2),
    amountJanuary13.toLocaleFixed(2), amountJanuary14.toLocaleFixed(2), amountJanuary15.toLocaleFixed(2),
    amountJanuary16.toLocaleFixed(2), amountJanuary17.toLocaleFixed(2), amountJanuary18.toLocaleFixed(2),
    amountJanuary19.toLocaleFixed(2), amountJanuary20.toLocaleFixed(2), amountJanuary21.toLocaleFixed(2),
    amountJanuary22.toLocaleFixed(2), amountJanuary23.toLocaleFixed(2), amountJanuary24.toLocaleFixed(2),
    amountJanuary25.toLocaleFixed(2), amountJanuary26.toLocaleFixed(2), amountJanuary27.toLocaleFixed(2),
    amountJanuary28.toLocaleFixed(2), amountJanuary29.toLocaleFixed(2), amountJanuary30.toLocaleFixed(2),
    amountJanuary31.toLocaleFixed(2),
  ]);

  var somaDaysJanuary = ([
    somaJanuary1, somaJanuary2, somaJanuary3,
    somaJanuary4, somaJanuary5, somaJanuary6,
    somaJanuary7, somaJanuary8, somaJanuary9,
    somaJanuary10, somaJanuary11, somaJanuary12,
    somaJanuary13, somaJanuary14, somaJanuary15,
    somaJanuary16, somaJanuary17, somaJanuary18,
    somaJanuary19, somaJanuary20, somaJanuary21,
    somaJanuary22, somaJanuary23, somaJanuary24,
    somaJanuary25, somaJanuary26, somaJanuary27,
    somaJanuary28, somaJanuary29, somaJanuary30,
    somaJanuary31,
  ]);
  var ReceiptsJanuary2022ChartJS = ([
    (Number(await getAmount(Receipt, 1, 0, 2022))),
    (Number(await getAmount(Receipt, 2, 0, 2022))),
    (Number(await getAmount(Receipt, 3, 0, 2022))),
    (Number(await getAmount(Receipt, 4, 0, 2022))),
    (Number(await getAmount(Receipt, 5, 0, 2022))),
    (Number(await getAmount(Receipt, 6, 0, 2022))),
    (Number(await getAmount(Receipt, 7, 0, 2022))),
    (Number(await getAmount(Receipt, 8, 0, 2022))),
    (Number(await getAmount(Receipt, 9, 0, 2022))),
    (Number(await getAmount(Receipt, 10, 0, 2022))),
    (Number(await getAmount(Receipt, 11, 0, 2022))),
    (Number(await getAmount(Receipt, 12, 0, 2022))),
    (Number(await getAmount(Receipt, 13, 0, 2022))),
    (Number(await getAmount(Receipt, 14, 0, 2022))),
    (Number(await getAmount(Receipt, 15, 0, 2022))),
    (Number(await getAmount(Receipt, 16, 0, 2022))),
    (Number(await getAmount(Receipt, 17, 0, 2022))),
    (Number(await getAmount(Receipt, 18, 0, 2022))),
    (Number(await getAmount(Receipt, 19, 0, 2022))),
    (Number(await getAmount(Receipt, 20, 0, 2022))),
    (Number(await getAmount(Receipt, 21, 0, 2022))),
    (Number(await getAmount(Receipt, 22, 0, 2022))),
    (Number(await getAmount(Receipt, 23, 0, 2022))),
    (Number(await getAmount(Receipt, 24, 0, 2022))),
    (Number(await getAmount(Receipt, 25, 0, 2022))),
    (Number(await getAmount(Receipt, 26, 0, 2022))),
    (Number(await getAmount(Receipt, 27, 0, 2022))),
    (Number(await getAmount(Receipt, 28, 0, 2022))),
    (Number(await getAmount(Receipt, 29, 0, 2022))),
    (Number(await getAmount(Receipt, 30, 0, 2022))),
    (Number(await getAmount(Receipt, 31, 0, 2022)))
  ]);

  var PaymentsJanuary2022ChartJS = ([
    (-Number(await getAmount(Payment, 1, 0, 2022))),
    (-Number(await getAmount(Payment, 2, 0, 2022))),
    (-Number(await getAmount(Payment, 3, 0, 2022))),
    (-Number(await getAmount(Payment, 4, 0, 2022))),
    (-Number(await getAmount(Payment, 5, 0, 2022))),
    (-Number(await getAmount(Payment, 6, 0, 2022))),
    (-Number(await getAmount(Payment, 7, 0, 2022))),
    (-Number(await getAmount(Payment, 8, 0, 2022))),
    (-Number(await getAmount(Payment, 9, 0, 2022))),
    (-Number(await getAmount(Payment, 10, 0, 2022))),
    (-Number(await getAmount(Payment, 11, 0, 2022))),
    (-Number(await getAmount(Payment, 12, 0, 2022))),
    (-Number(await getAmount(Payment, 13, 0, 2022))),
    (-Number(await getAmount(Payment, 14, 0, 2022))),
    (-Number(await getAmount(Payment, 15, 0, 2022))),
    (-Number(await getAmount(Payment, 16, 0, 2022))),
    (-Number(await getAmount(Payment, 17, 0, 2022))),
    (-Number(await getAmount(Payment, 18, 0, 2022))),
    (-Number(await getAmount(Payment, 19, 0, 2022))),
    (-Number(await getAmount(Payment, 20, 0, 2022))),
    (-Number(await getAmount(Payment, 21, 0, 2022))),
    (-Number(await getAmount(Payment, 22, 0, 2022))),
    (-Number(await getAmount(Payment, 23, 0, 2022))),
    (-Number(await getAmount(Payment, 24, 0, 2022))),
    (-Number(await getAmount(Payment, 25, 0, 2022))),
    (-Number(await getAmount(Payment, 26, 0, 2022))),
    (-Number(await getAmount(Payment, 27, 0, 2022))),
    (-Number(await getAmount(Payment, 28, 0, 2022))),
    (-Number(await getAmount(Payment, 29, 0, 2022))),
    (-Number(await getAmount(Payment, 30, 0, 2022))),
    (-Number(await getAmount(Payment, 31, 0, 2022)))
  ]);
  /////////////////////////////////////////////////////////Fevereiro
  //filtragem de dados, por peridodo que eles foram adicionados no (getAmount)
  ///////////////////////////////////////getAmount

  var ReceiptsFebruary2022 = ([
    (Number(await getAmount(Receipt, 1, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 2, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 3, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 4, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 5, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 6, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 7, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 8, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 9, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 10, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 11, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 12, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 13, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 14, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 15, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 16, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 17, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 18, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 19, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 20, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 21, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 22, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 23, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 24, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 25, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 26, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 27, 1, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 28, 1, 2022))).toLocaleFixed(2),
  ]);

  var PaymentsFebruary2022 = ([
    (-Number(await getAmount(Payment, 1, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 2, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 3, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 4, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 5, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 6, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 7, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 8, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 9, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 10, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 11, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 12, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 13, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 14, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 15, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 16, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 17, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 18, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 19, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 20, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 21, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 22, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 23, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 24, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 25, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 26, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 27, 1, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 28, 1, 2022))).toLocaleFixed(2),
  ]);

  var somaFebruary1 = (Number(await getAmount(Receipt, 1, 1, 2022)) - Number(await getAmount(Payment, 1, 1, 2022)));
  var somaFebruary2 = (Number(await getAmount(Receipt, 2, 1, 2022)) - Number(await getAmount(Payment, 2, 1, 2022)));
  var somaFebruary3 = (Number(await getAmount(Receipt, 3, 1, 2022)) - Number(await getAmount(Payment, 3, 1, 2022)));
  var somaFebruary4 = (Number(await getAmount(Receipt, 4, 1, 2022)) - Number(await getAmount(Payment, 4, 1, 2022)));
  var somaFebruary5 = (Number(await getAmount(Receipt, 5, 1, 2022)) - Number(await getAmount(Payment, 5, 1, 2022)));
  var somaFebruary6 = (Number(await getAmount(Receipt, 6, 1, 2022)) - Number(await getAmount(Payment, 6, 1, 2022)));
  var somaFebruary7 = (Number(await getAmount(Receipt, 7, 1, 2022)) - Number(await getAmount(Payment, 7, 1, 2022)));
  var somaFebruary8 = (Number(await getAmount(Receipt, 8, 1, 2022)) - Number(await getAmount(Payment, 8, 1, 2022)));
  var somaFebruary9 = (Number(await getAmount(Receipt, 9, 1, 2022)) - Number(await getAmount(Payment, 9, 1, 2022)));
  var somaFebruary10 = (Number(await getAmount(Receipt, 10, 1, 2022)) - Number(await getAmount(Payment, 10, 1, 2022)));
  var somaFebruary11 = (Number(await getAmount(Receipt, 11, 1, 2022)) - Number(await getAmount(Payment, 11, 1, 2022)));
  var somaFebruary12 = (Number(await getAmount(Receipt, 12, 1, 2022)) - Number(await getAmount(Payment, 12, 1, 2022)));
  var somaFebruary13 = (Number(await getAmount(Receipt, 13, 1, 2022)) - Number(await getAmount(Payment, 13, 1, 2022)));
  var somaFebruary14 = (Number(await getAmount(Receipt, 14, 1, 2022)) - Number(await getAmount(Payment, 14, 1, 2022)));
  var somaFebruary15 = (Number(await getAmount(Receipt, 15, 1, 2022)) - Number(await getAmount(Payment, 15, 1, 2022)));
  var somaFebruary16 = (Number(await getAmount(Receipt, 16, 1, 2022)) - Number(await getAmount(Payment, 16, 1, 2022)));
  var somaFebruary17 = (Number(await getAmount(Receipt, 17, 1, 2022)) - Number(await getAmount(Payment, 17, 1, 2022)));
  var somaFebruary18 = (Number(await getAmount(Receipt, 18, 1, 2022)) - Number(await getAmount(Payment, 18, 1, 2022)));
  var somaFebruary19 = (Number(await getAmount(Receipt, 19, 1, 2022)) - Number(await getAmount(Payment, 19, 1, 2022)));
  var somaFebruary20 = (Number(await getAmount(Receipt, 20, 1, 2022)) - Number(await getAmount(Payment, 20, 1, 2022)));
  var somaFebruary21 = (Number(await getAmount(Receipt, 21, 1, 2022)) - Number(await getAmount(Payment, 21, 1, 2022)));
  var somaFebruary22 = (Number(await getAmount(Receipt, 22, 1, 2022)) - Number(await getAmount(Payment, 22, 1, 2022)));
  var somaFebruary23 = (Number(await getAmount(Receipt, 23, 1, 2022)) - Number(await getAmount(Payment, 23, 1, 2022)));
  var somaFebruary24 = (Number(await getAmount(Receipt, 24, 1, 2022)) - Number(await getAmount(Payment, 24, 1, 2022)));
  var somaFebruary25 = (Number(await getAmount(Receipt, 25, 1, 2022)) - Number(await getAmount(Payment, 25, 1, 2022)));
  var somaFebruary26 = (Number(await getAmount(Receipt, 26, 1, 2022)) - Number(await getAmount(Payment, 26, 1, 2022)));
  var somaFebruary27 = (Number(await getAmount(Receipt, 27, 1, 2022)) - Number(await getAmount(Payment, 27, 1, 2022)));
  var somaFebruary28 = (Number(await getAmount(Receipt, 28, 1, 2022)) - Number(await getAmount(Payment, 28, 1, 2022)));
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  var amountFebruary1 = somaFebruary1;
  var amountFebruary2 = (parseInt(somaFebruary1) + parseInt(somaFebruary2));
  var amountFebruary3 = (parseInt(amountFebruary2) + parseInt(somaFebruary3));
  var amountFebruary4 = (parseInt(amountFebruary3) + parseInt(somaFebruary4));
  var amountFebruary5 = (parseInt(amountFebruary4) + parseInt(somaFebruary5));
  var amountFebruary6 = (parseInt(amountFebruary5) + parseInt(somaFebruary6));
  var amountFebruary7 = (parseInt(amountFebruary6) + parseInt(somaFebruary7));
  var amountFebruary8 = (parseInt(amountFebruary7) + parseInt(somaFebruary8));
  var amountFebruary9 = (parseInt(amountFebruary8) + parseInt(somaFebruary9));
  var amountFebruary10 = (parseInt(amountFebruary9) + parseInt(somaFebruary10));
  var amountFebruary11 = (parseInt(amountFebruary10) + parseInt(somaFebruary11));
  var amountFebruary12 = (parseInt(amountFebruary11) + parseInt(somaFebruary12));
  var amountFebruary13 = (parseInt(amountFebruary12) + parseInt(somaFebruary13));
  var amountFebruary14 = (parseInt(amountFebruary13) + parseInt(somaFebruary14));
  var amountFebruary15 = (parseInt(amountFebruary14) + parseInt(somaFebruary15));
  var amountFebruary16 = (parseInt(amountFebruary15) + parseInt(somaFebruary16));
  var amountFebruary17 = (parseInt(amountFebruary16) + parseInt(somaFebruary17));
  var amountFebruary18 = (parseInt(amountFebruary17) + parseInt(somaFebruary18));
  var amountFebruary19 = (parseInt(amountFebruary18) + parseInt(somaFebruary19));
  var amountFebruary20 = (parseInt(amountFebruary19) + parseInt(somaFebruary20));
  var amountFebruary21 = (parseInt(amountFebruary20) + parseInt(somaFebruary21));
  var amountFebruary22 = (parseInt(amountFebruary21) + parseInt(somaFebruary22));
  var amountFebruary23 = (parseInt(amountFebruary22) + parseInt(somaFebruary23));
  var amountFebruary24 = (parseInt(amountFebruary23) + parseInt(somaFebruary24));
  var amountFebruary25 = (parseInt(amountFebruary24) + parseInt(somaFebruary25));
  var amountFebruary26 = (parseInt(amountFebruary25) + parseInt(somaFebruary26));
  var amountFebruary27 = (parseInt(amountFebruary26) + parseInt(somaFebruary27));
  var amountFebruary28 = (parseInt(amountFebruary27) + parseInt(somaFebruary28));


  var amountDaysFebruary = ([
    amountFebruary1.toLocaleFixed(2), amountFebruary2.toLocaleFixed(2), amountFebruary3.toLocaleFixed(2),
    amountFebruary4.toLocaleFixed(2), amountFebruary5.toLocaleFixed(2), amountFebruary6.toLocaleFixed(2),
    amountFebruary7.toLocaleFixed(2), amountFebruary8.toLocaleFixed(2), amountFebruary9.toLocaleFixed(2),
    amountFebruary10.toLocaleFixed(2), amountFebruary11.toLocaleFixed(2), amountFebruary12.toLocaleFixed(2),
    amountFebruary13.toLocaleFixed(2), amountFebruary14.toLocaleFixed(2), amountFebruary15.toLocaleFixed(2),
    amountFebruary16.toLocaleFixed(2), amountFebruary17.toLocaleFixed(2), amountFebruary18.toLocaleFixed(2),
    amountFebruary19.toLocaleFixed(2), amountFebruary20.toLocaleFixed(2), amountFebruary21.toLocaleFixed(2),
    amountFebruary22.toLocaleFixed(2), amountFebruary23.toLocaleFixed(2), amountFebruary24.toLocaleFixed(2),
    amountFebruary25.toLocaleFixed(2), amountFebruary26.toLocaleFixed(2), amountFebruary27.toLocaleFixed(2),
    amountFebruary28.toLocaleFixed(2),
  ]);

  var somaDaysFebruary = ([
    somaFebruary1, somaFebruary2, somaFebruary3,
    somaFebruary4, somaFebruary5, somaFebruary6,
    somaFebruary7, somaFebruary8, somaFebruary9,
    somaFebruary10, somaFebruary11, somaFebruary12,
    somaFebruary13, somaFebruary14, somaFebruary15,
    somaFebruary16, somaFebruary17, somaFebruary18,
    somaFebruary19, somaFebruary20, somaFebruary21,
    somaFebruary22, somaFebruary23, somaFebruary24,
    somaFebruary25, somaFebruary26, somaFebruary27,
    somaFebruary28,
  ]);

  var ReceiptsFebruary2022ChartJS = ([
    (Number(await getAmount(Receipt, 1, 1, 2022))),
    (Number(await getAmount(Receipt, 2, 1, 2022))),
    (Number(await getAmount(Receipt, 3, 1, 2022))),
    (Number(await getAmount(Receipt, 4, 1, 2022))),
    (Number(await getAmount(Receipt, 5, 1, 2022))),
    (Number(await getAmount(Receipt, 6, 1, 2022))),
    (Number(await getAmount(Receipt, 7, 1, 2022))),
    (Number(await getAmount(Receipt, 8, 1, 2022))),
    (Number(await getAmount(Receipt, 9, 1, 2022))),
    (Number(await getAmount(Receipt, 10, 1, 2022))),
    (Number(await getAmount(Receipt, 11, 1, 2022))),
    (Number(await getAmount(Receipt, 12, 1, 2022))),
    (Number(await getAmount(Receipt, 13, 1, 2022))),
    (Number(await getAmount(Receipt, 14, 1, 2022))),
    (Number(await getAmount(Receipt, 15, 1, 2022))),
    (Number(await getAmount(Receipt, 16, 1, 2022))),
    (Number(await getAmount(Receipt, 17, 1, 2022))),
    (Number(await getAmount(Receipt, 18, 1, 2022))),
    (Number(await getAmount(Receipt, 19, 1, 2022))),
    (Number(await getAmount(Receipt, 20, 1, 2022))),
    (Number(await getAmount(Receipt, 21, 1, 2022))),
    (Number(await getAmount(Receipt, 22, 1, 2022))),
    (Number(await getAmount(Receipt, 23, 1, 2022))),
    (Number(await getAmount(Receipt, 24, 1, 2022))),
    (Number(await getAmount(Receipt, 25, 1, 2022))),
    (Number(await getAmount(Receipt, 26, 1, 2022))),
    (Number(await getAmount(Receipt, 27, 1, 2022))),
    (Number(await getAmount(Receipt, 28, 1, 2022))),
  ]);

  var PaymentsFebruary2022ChartJS = ([
    (-Number(await getAmount(Payment, 1, 1, 2022))),
    (-Number(await getAmount(Payment, 2, 1, 2022))),
    (-Number(await getAmount(Payment, 3, 1, 2022))),
    (-Number(await getAmount(Payment, 4, 1, 2022))),
    (-Number(await getAmount(Payment, 5, 1, 2022))),
    (-Number(await getAmount(Payment, 6, 1, 2022))),
    (-Number(await getAmount(Payment, 7, 1, 2022))),
    (-Number(await getAmount(Payment, 8, 1, 2022))),
    (-Number(await getAmount(Payment, 9, 1, 2022))),
    (-Number(await getAmount(Payment, 10, 1, 2022))),
    (-Number(await getAmount(Payment, 11, 1, 2022))),
    (-Number(await getAmount(Payment, 12, 1, 2022))),
    (-Number(await getAmount(Payment, 13, 1, 2022))),
    (-Number(await getAmount(Payment, 14, 1, 2022))),
    (-Number(await getAmount(Payment, 15, 1, 2022))),
    (-Number(await getAmount(Payment, 16, 1, 2022))),
    (-Number(await getAmount(Payment, 17, 1, 2022))),
    (-Number(await getAmount(Payment, 18, 1, 2022))),
    (-Number(await getAmount(Payment, 19, 1, 2022))),
    (-Number(await getAmount(Payment, 20, 1, 2022))),
    (-Number(await getAmount(Payment, 21, 1, 2022))),
    (-Number(await getAmount(Payment, 22, 1, 2022))),
    (-Number(await getAmount(Payment, 23, 1, 2022))),
    (-Number(await getAmount(Payment, 24, 1, 2022))),
    (-Number(await getAmount(Payment, 25, 1, 2022))),
    (-Number(await getAmount(Payment, 26, 1, 2022))),
    (-Number(await getAmount(Payment, 27, 1, 2022))),
    (-Number(await getAmount(Payment, 28, 1, 2022))),

  ]);

  /////////////////////////////////////////////////////////Março
  //filtragem de dados, por peridodo que eles foram adicionados no (getAmount)
  ///////////////////////////////////////getAmount

  var ReceiptsMarch2022 = ([
    (Number(await getAmount(Receipt, 1, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 2, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 3, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 4, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 5, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 6, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 7, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 8, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 9, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 10, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 11, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 12, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 13, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 14, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 15, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 16, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 17, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 18, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 19, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 20, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 21, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 22, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 23, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 24, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 25, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 26, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 27, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 28, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 29, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 30, 2, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 31, 2, 2022))).toLocaleFixed(2),
  ]);

  var PaymentsMarch2022 = ([
    (-Number(await getAmount(Payment, 1, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 2, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 3, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 4, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 5, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 6, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 7, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 8, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 9, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 10, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 11, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 12, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 13, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 14, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 15, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 16, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 17, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 18, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 19, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 20, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 21, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 22, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 23, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 24, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 25, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 26, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 27, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 28, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 29, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 30, 2, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 31, 2, 2022))).toLocaleFixed(2),
  ]);

  var somaMarch1 = (Number(await getAmount(Receipt, 1, 2, 2022)) - Number(await getAmount(Payment, 1, 2, 2022)));
  var somaMarch2 = (Number(await getAmount(Receipt, 2, 2, 2022)) - Number(await getAmount(Payment, 2, 2, 2022)));
  var somaMarch3 = (Number(await getAmount(Receipt, 3, 2, 2022)) - Number(await getAmount(Payment, 3, 2, 2022)));
  var somaMarch4 = (Number(await getAmount(Receipt, 4, 2, 2022)) - Number(await getAmount(Payment, 4, 2, 2022)));
  var somaMarch5 = (Number(await getAmount(Receipt, 5, 2, 2022)) - Number(await getAmount(Payment, 5, 2, 2022)));
  var somaMarch6 = (Number(await getAmount(Receipt, 6, 2, 2022)) - Number(await getAmount(Payment, 6, 2, 2022)));
  var somaMarch7 = (Number(await getAmount(Receipt, 7, 2, 2022)) - Number(await getAmount(Payment, 7, 2, 2022)));
  var somaMarch8 = (Number(await getAmount(Receipt, 8, 2, 2022)) - Number(await getAmount(Payment, 8, 2, 2022)));
  var somaMarch9 = (Number(await getAmount(Receipt, 9, 2, 2022)) - Number(await getAmount(Payment, 9, 2, 2022)));
  var somaMarch10 = (Number(await getAmount(Receipt, 10, 2, 2022)) - Number(await getAmount(Payment, 10, 2, 2022)));
  var somaMarch11 = (Number(await getAmount(Receipt, 11, 2, 2022)) - Number(await getAmount(Payment, 11, 2, 2022)));
  var somaMarch12 = (Number(await getAmount(Receipt, 12, 2, 2022)) - Number(await getAmount(Payment, 12, 2, 2022)));
  var somaMarch13 = (Number(await getAmount(Receipt, 13, 2, 2022)) - Number(await getAmount(Payment, 13, 2, 2022)));
  var somaMarch14 = (Number(await getAmount(Receipt, 14, 2, 2022)) - Number(await getAmount(Payment, 14, 2, 2022)));
  var somaMarch15 = (Number(await getAmount(Receipt, 15, 2, 2022)) - Number(await getAmount(Payment, 15, 2, 2022)));
  var somaMarch16 = (Number(await getAmount(Receipt, 16, 2, 2022)) - Number(await getAmount(Payment, 16, 2, 2022)));
  var somaMarch17 = (Number(await getAmount(Receipt, 17, 2, 2022)) - Number(await getAmount(Payment, 17, 2, 2022)));
  var somaMarch18 = (Number(await getAmount(Receipt, 18, 2, 2022)) - Number(await getAmount(Payment, 18, 2, 2022)));
  var somaMarch19 = (Number(await getAmount(Receipt, 19, 2, 2022)) - Number(await getAmount(Payment, 19, 2, 2022)));
  var somaMarch20 = (Number(await getAmount(Receipt, 20, 2, 2022)) - Number(await getAmount(Payment, 20, 2, 2022)));
  var somaMarch21 = (Number(await getAmount(Receipt, 21, 2, 2022)) - Number(await getAmount(Payment, 21, 2, 2022)));
  var somaMarch22 = (Number(await getAmount(Receipt, 22, 2, 2022)) - Number(await getAmount(Payment, 22, 2, 2022)));
  var somaMarch23 = (Number(await getAmount(Receipt, 23, 2, 2022)) - Number(await getAmount(Payment, 23, 2, 2022)));
  var somaMarch24 = (Number(await getAmount(Receipt, 24, 2, 2022)) - Number(await getAmount(Payment, 24, 2, 2022)));
  var somaMarch25 = (Number(await getAmount(Receipt, 25, 2, 2022)) - Number(await getAmount(Payment, 25, 2, 2022)));
  var somaMarch26 = (Number(await getAmount(Receipt, 26, 2, 2022)) - Number(await getAmount(Payment, 26, 2, 2022)));
  var somaMarch27 = (Number(await getAmount(Receipt, 27, 2, 2022)) - Number(await getAmount(Payment, 27, 2, 2022)));
  var somaMarch28 = (Number(await getAmount(Receipt, 28, 2, 2022)) - Number(await getAmount(Payment, 28, 2, 2022)));
  var somaMarch29 = (Number(await getAmount(Receipt, 29, 2, 2022)) - Number(await getAmount(Payment, 29, 2, 2022)));
  var somaMarch30 = (Number(await getAmount(Receipt, 30, 2, 2022)) - Number(await getAmount(Payment, 30, 2, 2022)));
  var somaMarch31 = (Number(await getAmount(Receipt, 31, 2, 2022)) - Number(await getAmount(Payment, 31, 2, 2022)));
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  var amountMarch1 = somaMarch1;
  var amountMarch2 = (parseInt(somaMarch1) + parseInt(somaMarch2));
  var amountMarch3 = (parseInt(amountMarch2) + parseInt(somaMarch3));
  var amountMarch4 = (parseInt(amountMarch3) + parseInt(somaMarch4));
  var amountMarch5 = (parseInt(amountMarch4) + parseInt(somaMarch5));
  var amountMarch6 = (parseInt(amountMarch5) + parseInt(somaMarch6));
  var amountMarch7 = (parseInt(amountMarch6) + parseInt(somaMarch7));
  var amountMarch8 = (parseInt(amountMarch7) + parseInt(somaMarch8));
  var amountMarch9 = (parseInt(amountMarch8) + parseInt(somaMarch9));
  var amountMarch10 = (parseInt(amountMarch9) + parseInt(somaMarch10));
  var amountMarch11 = (parseInt(amountMarch10) + parseInt(somaMarch11));
  var amountMarch12 = (parseInt(amountMarch11) + parseInt(somaMarch12));
  var amountMarch13 = (parseInt(amountMarch12) + parseInt(somaMarch13));
  var amountMarch14 = (parseInt(amountMarch13) + parseInt(somaMarch14));
  var amountMarch15 = (parseInt(amountMarch14) + parseInt(somaMarch15));
  var amountMarch16 = (parseInt(amountMarch15) + parseInt(somaMarch16));
  var amountMarch17 = (parseInt(amountMarch16) + parseInt(somaMarch17));
  var amountMarch18 = (parseInt(amountMarch17) + parseInt(somaMarch18));
  var amountMarch19 = (parseInt(amountMarch18) + parseInt(somaMarch19));
  var amountMarch20 = (parseInt(amountMarch19) + parseInt(somaMarch20));
  var amountMarch21 = (parseInt(amountMarch20) + parseInt(somaMarch21));
  var amountMarch22 = (parseInt(amountMarch21) + parseInt(somaMarch22));
  var amountMarch23 = (parseInt(amountMarch22) + parseInt(somaMarch23));
  var amountMarch24 = (parseInt(amountMarch23) + parseInt(somaMarch24));
  var amountMarch25 = (parseInt(amountMarch24) + parseInt(somaMarch25));
  var amountMarch26 = (parseInt(amountMarch25) + parseInt(somaMarch26));
  var amountMarch27 = (parseInt(amountMarch26) + parseInt(somaMarch27));
  var amountMarch28 = (parseInt(amountMarch27) + parseInt(somaMarch28));
  var amountMarch29 = (parseInt(amountMarch28) + parseInt(somaMarch29));
  var amountMarch30 = (parseInt(amountMarch28) + parseInt(somaMarch30));
  var amountMarch31 = (parseInt(amountMarch29) + parseInt(somaMarch31));


  var amountDaysMarch = ([
    amountMarch1.toLocaleFixed(2), amountMarch2.toLocaleFixed(2), amountMarch3.toLocaleFixed(2),
    amountMarch4.toLocaleFixed(2), amountMarch5.toLocaleFixed(2), amountMarch6.toLocaleFixed(2),
    amountMarch7.toLocaleFixed(2), amountMarch8.toLocaleFixed(2), amountMarch9.toLocaleFixed(2),
    amountMarch10.toLocaleFixed(2), amountMarch11.toLocaleFixed(2), amountMarch12.toLocaleFixed(2),
    amountMarch13.toLocaleFixed(2), amountMarch14.toLocaleFixed(2), amountMarch15.toLocaleFixed(2),
    amountMarch16.toLocaleFixed(2), amountMarch17.toLocaleFixed(2), amountMarch18.toLocaleFixed(2),
    amountMarch19.toLocaleFixed(2), amountMarch20.toLocaleFixed(2), amountMarch21.toLocaleFixed(2),
    amountMarch22.toLocaleFixed(2), amountMarch23.toLocaleFixed(2), amountMarch24.toLocaleFixed(2),
    amountMarch25.toLocaleFixed(2), amountMarch26.toLocaleFixed(2), amountMarch27.toLocaleFixed(2),
    amountMarch28.toLocaleFixed(2), amountMarch29.toLocaleFixed(2), amountMarch30.toLocaleFixed(2),
    amountMarch31.toLocaleFixed(2),
  ]);

  var somaDaysMarch = ([
    somaMarch1, somaMarch2, somaMarch3,
    somaMarch4, somaMarch5, somaMarch6,
    somaMarch7, somaMarch8, somaMarch9,
    somaMarch10, somaMarch11, somaMarch12,
    somaMarch13, somaMarch14, somaMarch15,
    somaMarch16, somaMarch17, somaMarch18,
    somaMarch19, somaMarch20, somaMarch21,
    somaMarch22, somaMarch23, somaMarch24,
    somaMarch25, somaMarch26, somaMarch27,
    somaMarch28, somaMarch29, somaMarch30, somaMarch31,
  ]);

  var ReceiptsMarch2022ChartJS = ([
    (Number(await getAmount(Receipt, 1, 2, 2022))),
    (Number(await getAmount(Receipt, 2, 2, 2022))),
    (Number(await getAmount(Receipt, 3, 2, 2022))),
    (Number(await getAmount(Receipt, 4, 2, 2022))),
    (Number(await getAmount(Receipt, 5, 2, 2022))),
    (Number(await getAmount(Receipt, 6, 2, 2022))),
    (Number(await getAmount(Receipt, 7, 2, 2022))),
    (Number(await getAmount(Receipt, 8, 2, 2022))),
    (Number(await getAmount(Receipt, 9, 2, 2022))),
    (Number(await getAmount(Receipt, 10, 2, 2022))),
    (Number(await getAmount(Receipt, 11, 2, 2022))),
    (Number(await getAmount(Receipt, 12, 2, 2022))),
    (Number(await getAmount(Receipt, 13, 2, 2022))),
    (Number(await getAmount(Receipt, 14, 2, 2022))),
    (Number(await getAmount(Receipt, 15, 2, 2022))),
    (Number(await getAmount(Receipt, 16, 2, 2022))),
    (Number(await getAmount(Receipt, 17, 2, 2022))),
    (Number(await getAmount(Receipt, 18, 2, 2022))),
    (Number(await getAmount(Receipt, 19, 2, 2022))),
    (Number(await getAmount(Receipt, 20, 2, 2022))),
    (Number(await getAmount(Receipt, 21, 2, 2022))),
    (Number(await getAmount(Receipt, 22, 2, 2022))),
    (Number(await getAmount(Receipt, 23, 2, 2022))),
    (Number(await getAmount(Receipt, 24, 2, 2022))),
    (Number(await getAmount(Receipt, 25, 2, 2022))),
    (Number(await getAmount(Receipt, 26, 2, 2022))),
    (Number(await getAmount(Receipt, 27, 2, 2022))),
    (Number(await getAmount(Receipt, 28, 2, 2022))),
    (Number(await getAmount(Receipt, 29, 2, 2022))),
    (Number(await getAmount(Receipt, 30, 2, 2022))),
    (Number(await getAmount(Receipt, 31, 2, 2022))),
  ]);

  var PaymentsMarch2022ChartJS = ([
    (-Number(await getAmount(Payment, 1, 2, 2022))),
    (-Number(await getAmount(Payment, 2, 2, 2022))),
    (-Number(await getAmount(Payment, 3, 2, 2022))),
    (-Number(await getAmount(Payment, 4, 2, 2022))),
    (-Number(await getAmount(Payment, 5, 2, 2022))),
    (-Number(await getAmount(Payment, 6, 2, 2022))),
    (-Number(await getAmount(Payment, 7, 2, 2022))),
    (-Number(await getAmount(Payment, 8, 2, 2022))),
    (-Number(await getAmount(Payment, 9, 2, 2022))),
    (-Number(await getAmount(Payment, 10, 2, 2022))),
    (-Number(await getAmount(Payment, 11, 2, 2022))),
    (-Number(await getAmount(Payment, 12, 2, 2022))),
    (-Number(await getAmount(Payment, 13, 2, 2022))),
    (-Number(await getAmount(Payment, 14, 2, 2022))),
    (-Number(await getAmount(Payment, 15, 2, 2022))),
    (-Number(await getAmount(Payment, 16, 2, 2022))),
    (-Number(await getAmount(Payment, 17, 2, 2022))),
    (-Number(await getAmount(Payment, 18, 2, 2022))),
    (-Number(await getAmount(Payment, 19, 2, 2022))),
    (-Number(await getAmount(Payment, 20, 2, 2022))),
    (-Number(await getAmount(Payment, 21, 2, 2022))),
    (-Number(await getAmount(Payment, 22, 2, 2022))),
    (-Number(await getAmount(Payment, 23, 2, 2022))),
    (-Number(await getAmount(Payment, 24, 2, 2022))),
    (-Number(await getAmount(Payment, 25, 2, 2022))),
    (-Number(await getAmount(Payment, 26, 2, 2022))),
    (-Number(await getAmount(Payment, 27, 2, 2022))),
    (-Number(await getAmount(Payment, 28, 2, 2022))),
    (-Number(await getAmount(Payment, 29, 2, 2022))),
    (-Number(await getAmount(Payment, 30, 2, 2022))),
    (-Number(await getAmount(Payment, 31, 2, 2022))),

  ]);

  /////////////////////////////////////////////////////////Abril
  //filtragem de dados, por peridodo que eles foram adicionados no (getAmount)
  ///////////////////////////////////////getAmount

  var ReceiptsApril2022 = ([
    (Number(await getAmount(Receipt, 1, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 2, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 3, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 4, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 5, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 6, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 7, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 8, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 9, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 10, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 11, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 12, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 13, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 14, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 15, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 16, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 17, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 18, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 19, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 20, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 21, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 22, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 23, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 24, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 25, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 26, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 27, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 28, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 29, 3, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 30, 3, 2022))).toLocaleFixed(2),
  ]);

  var PaymentsApril2022 = ([
    (-Number(await getAmount(Payment, 1, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 2, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 3, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 4, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 5, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 6, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 7, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 8, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 9, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 10, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 11, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 12, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 13, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 14, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 15, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 16, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 17, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 18, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 19, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 20, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 21, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 22, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 23, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 24, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 25, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 26, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 27, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 28, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 29, 3, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 30, 3, 2022))).toLocaleFixed(2),
  ]);

  var somaApril1 = (Number(await getAmount(Receipt, 1, 3, 2022)) - Number(await getAmount(Payment, 1, 3, 2022)));
  var somaApril2 = (Number(await getAmount(Receipt, 2, 3, 2022)) - Number(await getAmount(Payment, 2, 3, 2022)));
  var somaApril3 = (Number(await getAmount(Receipt, 3, 3, 2022)) - Number(await getAmount(Payment, 3, 3, 2022)));
  var somaApril4 = (Number(await getAmount(Receipt, 4, 3, 2022)) - Number(await getAmount(Payment, 4, 3, 2022)));
  var somaApril5 = (Number(await getAmount(Receipt, 5, 3, 2022)) - Number(await getAmount(Payment, 5, 3, 2022)));
  var somaApril6 = (Number(await getAmount(Receipt, 6, 3, 2022)) - Number(await getAmount(Payment, 6, 3, 2022)));
  var somaApril7 = (Number(await getAmount(Receipt, 7, 3, 2022)) - Number(await getAmount(Payment, 7, 3, 2022)));
  var somaApril8 = (Number(await getAmount(Receipt, 8, 3, 2022)) - Number(await getAmount(Payment, 8, 3, 2022)));
  var somaApril9 = (Number(await getAmount(Receipt, 9, 3, 2022)) - Number(await getAmount(Payment, 9, 3, 2022)));
  var somaApril10 = (Number(await getAmount(Receipt, 10, 3, 2022)) - Number(await getAmount(Payment, 10, 3, 2022)));
  var somaApril11 = (Number(await getAmount(Receipt, 11, 3, 2022)) - Number(await getAmount(Payment, 11, 3, 2022)));
  var somaApril12 = (Number(await getAmount(Receipt, 12, 3, 2022)) - Number(await getAmount(Payment, 12, 3, 2022)));
  var somaApril13 = (Number(await getAmount(Receipt, 13, 3, 2022)) - Number(await getAmount(Payment, 13, 3, 2022)));
  var somaApril14 = (Number(await getAmount(Receipt, 14, 3, 2022)) - Number(await getAmount(Payment, 14, 3, 2022)));
  var somaApril15 = (Number(await getAmount(Receipt, 15, 3, 2022)) - Number(await getAmount(Payment, 15, 3, 2022)));
  var somaApril16 = (Number(await getAmount(Receipt, 16, 3, 2022)) - Number(await getAmount(Payment, 16, 3, 2022)));
  var somaApril17 = (Number(await getAmount(Receipt, 17, 3, 2022)) - Number(await getAmount(Payment, 17, 3, 2022)));
  var somaApril18 = (Number(await getAmount(Receipt, 18, 3, 2022)) - Number(await getAmount(Payment, 18, 3, 2022)));
  var somaApril19 = (Number(await getAmount(Receipt, 19, 3, 2022)) - Number(await getAmount(Payment, 19, 3, 2022)));
  var somaApril20 = (Number(await getAmount(Receipt, 20, 3, 2022)) - Number(await getAmount(Payment, 20, 3, 2022)));
  var somaApril21 = (Number(await getAmount(Receipt, 21, 3, 2022)) - Number(await getAmount(Payment, 21, 3, 2022)));
  var somaApril22 = (Number(await getAmount(Receipt, 22, 3, 2022)) - Number(await getAmount(Payment, 22, 3, 2022)));
  var somaApril23 = (Number(await getAmount(Receipt, 23, 3, 2022)) - Number(await getAmount(Payment, 23, 3, 2022)));
  var somaApril24 = (Number(await getAmount(Receipt, 24, 3, 2022)) - Number(await getAmount(Payment, 24, 3, 2022)));
  var somaApril25 = (Number(await getAmount(Receipt, 25, 3, 2022)) - Number(await getAmount(Payment, 25, 3, 2022)));
  var somaApril26 = (Number(await getAmount(Receipt, 26, 3, 2022)) - Number(await getAmount(Payment, 26, 3, 2022)));
  var somaApril27 = (Number(await getAmount(Receipt, 27, 3, 2022)) - Number(await getAmount(Payment, 27, 3, 2022)));
  var somaApril28 = (Number(await getAmount(Receipt, 28, 3, 2022)) - Number(await getAmount(Payment, 28, 3, 2022)));
  var somaApril29 = (Number(await getAmount(Receipt, 29, 3, 2022)) - Number(await getAmount(Payment, 29, 3, 2022)));
  var somaApril30 = (Number(await getAmount(Receipt, 30, 3, 2022)) - Number(await getAmount(Payment, 30, 3, 2022)));
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  var amountApril1 = somaApril1;
  var amountApril2 = (parseInt(somaApril1) + parseInt(somaApril2));
  var amountApril3 = (parseInt(amountApril2) + parseInt(somaApril3));
  var amountApril4 = (parseInt(amountApril3) + parseInt(somaApril4));
  var amountApril5 = (parseInt(amountApril4) + parseInt(somaApril5));
  var amountApril6 = (parseInt(amountApril5) + parseInt(somaApril6));
  var amountApril7 = (parseInt(amountApril6) + parseInt(somaApril7));
  var amountApril8 = (parseInt(amountApril7) + parseInt(somaApril8));
  var amountApril9 = (parseInt(amountApril8) + parseInt(somaApril9));
  var amountApril10 = (parseInt(amountApril9) + parseInt(somaApril10));
  var amountApril11 = (parseInt(amountApril10) + parseInt(somaApril11));
  var amountApril12 = (parseInt(amountApril11) + parseInt(somaApril12));
  var amountApril13 = (parseInt(amountApril12) + parseInt(somaApril13));
  var amountApril14 = (parseInt(amountApril13) + parseInt(somaApril14));
  var amountApril15 = (parseInt(amountApril14) + parseInt(somaApril15));
  var amountApril16 = (parseInt(amountApril15) + parseInt(somaApril16));
  var amountApril17 = (parseInt(amountApril16) + parseInt(somaApril17));
  var amountApril18 = (parseInt(amountApril17) + parseInt(somaApril18));
  var amountApril19 = (parseInt(amountApril18) + parseInt(somaApril19));
  var amountApril20 = (parseInt(amountApril19) + parseInt(somaApril20));
  var amountApril21 = (parseInt(amountApril20) + parseInt(somaApril21));
  var amountApril22 = (parseInt(amountApril21) + parseInt(somaApril22));
  var amountApril23 = (parseInt(amountApril22) + parseInt(somaApril23));
  var amountApril24 = (parseInt(amountApril23) + parseInt(somaApril24));
  var amountApril25 = (parseInt(amountApril24) + parseInt(somaApril25));
  var amountApril26 = (parseInt(amountApril25) + parseInt(somaApril26));
  var amountApril27 = (parseInt(amountApril26) + parseInt(somaApril27));
  var amountApril28 = (parseInt(amountApril27) + parseInt(somaApril28));
  var amountApril29 = (parseInt(amountApril28) + parseInt(somaApril29));
  var amountApril30 = (parseInt(amountApril28) + parseInt(somaApril30));


  var amountDaysApril = ([
    amountApril1.toLocaleFixed(2), amountApril2.toLocaleFixed(2), amountApril3.toLocaleFixed(2),
    amountApril4.toLocaleFixed(2), amountApril5.toLocaleFixed(2), amountApril6.toLocaleFixed(2),
    amountApril7.toLocaleFixed(2), amountApril8.toLocaleFixed(2), amountApril9.toLocaleFixed(2),
    amountApril10.toLocaleFixed(2), amountApril11.toLocaleFixed(2), amountApril12.toLocaleFixed(2),
    amountApril13.toLocaleFixed(2), amountApril14.toLocaleFixed(2), amountApril15.toLocaleFixed(2),
    amountApril16.toLocaleFixed(2), amountApril17.toLocaleFixed(2), amountApril18.toLocaleFixed(2),
    amountApril19.toLocaleFixed(2), amountApril20.toLocaleFixed(2), amountApril21.toLocaleFixed(2),
    amountApril22.toLocaleFixed(2), amountApril23.toLocaleFixed(2), amountApril24.toLocaleFixed(2),
    amountApril25.toLocaleFixed(2), amountApril26.toLocaleFixed(2), amountApril27.toLocaleFixed(2),
    amountApril28.toLocaleFixed(2), amountApril29.toLocaleFixed(2), amountApril30.toLocaleFixed(2),
  ]);

  var somaDaysApril = ([
    somaApril1, somaApril2, somaApril3,
    somaApril4, somaApril5, somaApril6,
    somaApril7, somaApril8, somaApril9,
    somaApril10, somaApril11, somaApril12,
    somaApril13, somaApril14, somaApril15,
    somaApril16, somaApril17, somaApril18,
    somaApril19, somaApril20, somaApril21,
    somaApril22, somaApril23, somaApril24,
    somaApril25, somaApril26, somaApril27,
    somaApril28, somaApril29, somaApril30,
  ]);

  var ReceiptsApril2022ChartJS = ([
    (Number(await getAmount(Receipt, 1, 3, 2022))),
    (Number(await getAmount(Receipt, 2, 3, 2022))),
    (Number(await getAmount(Receipt, 3, 3, 2022))),
    (Number(await getAmount(Receipt, 4, 3, 2022))),
    (Number(await getAmount(Receipt, 5, 3, 2022))),
    (Number(await getAmount(Receipt, 6, 3, 2022))),
    (Number(await getAmount(Receipt, 7, 3, 2022))),
    (Number(await getAmount(Receipt, 8, 3, 2022))),
    (Number(await getAmount(Receipt, 9, 3, 2022))),
    (Number(await getAmount(Receipt, 10, 3, 2022))),
    (Number(await getAmount(Receipt, 11, 3, 2022))),
    (Number(await getAmount(Receipt, 12, 3, 2022))),
    (Number(await getAmount(Receipt, 13, 3, 2022))),
    (Number(await getAmount(Receipt, 14, 3, 2022))),
    (Number(await getAmount(Receipt, 15, 3, 2022))),
    (Number(await getAmount(Receipt, 16, 3, 2022))),
    (Number(await getAmount(Receipt, 17, 3, 2022))),
    (Number(await getAmount(Receipt, 18, 3, 2022))),
    (Number(await getAmount(Receipt, 19, 3, 2022))),
    (Number(await getAmount(Receipt, 20, 3, 2022))),
    (Number(await getAmount(Receipt, 21, 3, 2022))),
    (Number(await getAmount(Receipt, 22, 3, 2022))),
    (Number(await getAmount(Receipt, 23, 3, 2022))),
    (Number(await getAmount(Receipt, 24, 3, 2022))),
    (Number(await getAmount(Receipt, 25, 3, 2022))),
    (Number(await getAmount(Receipt, 26, 3, 2022))),
    (Number(await getAmount(Receipt, 27, 3, 2022))),
    (Number(await getAmount(Receipt, 28, 3, 2022))),
    (Number(await getAmount(Receipt, 29, 3, 2022))),
    (Number(await getAmount(Receipt, 30, 3, 2022))),
  ]);

  var PaymentsApril2022ChartJS = ([
    (-Number(await getAmount(Payment, 1, 3, 2022))),
    (-Number(await getAmount(Payment, 2, 3, 2022))),
    (-Number(await getAmount(Payment, 3, 3, 2022))),
    (-Number(await getAmount(Payment, 4, 3, 2022))),
    (-Number(await getAmount(Payment, 5, 3, 2022))),
    (-Number(await getAmount(Payment, 6, 3, 2022))),
    (-Number(await getAmount(Payment, 7, 3, 2022))),
    (-Number(await getAmount(Payment, 8, 3, 2022))),
    (-Number(await getAmount(Payment, 9, 3, 2022))),
    (-Number(await getAmount(Payment, 10, 3, 2022))),
    (-Number(await getAmount(Payment, 11, 3, 2022))),
    (-Number(await getAmount(Payment, 12, 3, 2022))),
    (-Number(await getAmount(Payment, 13, 3, 2022))),
    (-Number(await getAmount(Payment, 14, 3, 2022))),
    (-Number(await getAmount(Payment, 15, 3, 2022))),
    (-Number(await getAmount(Payment, 16, 3, 2022))),
    (-Number(await getAmount(Payment, 17, 3, 2022))),
    (-Number(await getAmount(Payment, 18, 3, 2022))),
    (-Number(await getAmount(Payment, 19, 3, 2022))),
    (-Number(await getAmount(Payment, 20, 3, 2022))),
    (-Number(await getAmount(Payment, 21, 3, 2022))),
    (-Number(await getAmount(Payment, 22, 3, 2022))),
    (-Number(await getAmount(Payment, 23, 3, 2022))),
    (-Number(await getAmount(Payment, 24, 3, 2022))),
    (-Number(await getAmount(Payment, 25, 3, 2022))),
    (-Number(await getAmount(Payment, 26, 3, 2022))),
    (-Number(await getAmount(Payment, 27, 3, 2022))),
    (-Number(await getAmount(Payment, 28, 3, 2022))),
    (-Number(await getAmount(Payment, 29, 3, 2022))),
    (-Number(await getAmount(Payment, 30, 3, 2022))),

  ]);


  /////////////////////////////////////////////////////////Maio
  //filtragem de dados, por peridodo que eles foram adicionados no (getAmount)
  ///////////////////////////////////////getAmount

  var ReceiptsMay2022 = ([
    (Number(await getAmount(Receipt, 1, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 2, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 3, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 4, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 5, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 6, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 7, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 8, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 9, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 10, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 11, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 12, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 13, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 14, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 15, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 16, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 17, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 18, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 19, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 20, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 21, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 22, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 23, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 24, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 25, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 26, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 27, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 28, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 29, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 30, 4, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 31, 4, 2022))).toLocaleFixed(2),
  ]);

  var PaymentsMay2022 = ([
    (-Number(await getAmount(Payment, 1, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 2, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 3, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 4, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 5, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 6, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 7, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 8, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 9, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 10, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 11, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 12, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 13, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 14, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 15, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 16, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 17, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 18, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 19, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 20, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 21, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 22, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 23, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 24, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 25, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 26, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 27, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 28, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 29, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 30, 4, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 31, 4, 2022))).toLocaleFixed(2),
  ]);

  var somaMay1 = (Number(await getAmount(Receipt, 1, 4, 2022)) - Number(await getAmount(Payment, 1, 4, 2022)));
  var somaMay2 = (Number(await getAmount(Receipt, 2, 4, 2022)) - Number(await getAmount(Payment, 2, 4, 2022)));
  var somaMay3 = (Number(await getAmount(Receipt, 3, 4, 2022)) - Number(await getAmount(Payment, 3, 4, 2022)));
  var somaMay4 = (Number(await getAmount(Receipt, 4, 4, 2022)) - Number(await getAmount(Payment, 4, 4, 2022)));
  var somaMay5 = (Number(await getAmount(Receipt, 5, 4, 2022)) - Number(await getAmount(Payment, 5, 4, 2022)));
  var somaMay6 = (Number(await getAmount(Receipt, 6, 4, 2022)) - Number(await getAmount(Payment, 6, 4, 2022)));
  var somaMay7 = (Number(await getAmount(Receipt, 7, 4, 2022)) - Number(await getAmount(Payment, 7, 4, 2022)));
  var somaMay8 = (Number(await getAmount(Receipt, 8, 4, 2022)) - Number(await getAmount(Payment, 8, 4, 2022)));
  var somaMay9 = (Number(await getAmount(Receipt, 9, 4, 2022)) - Number(await getAmount(Payment, 9, 4, 2022)));
  var somaMay10 = (Number(await getAmount(Receipt, 10, 4, 2022)) - Number(await getAmount(Payment, 10, 4, 2022)));
  var somaMay11 = (Number(await getAmount(Receipt, 11, 4, 2022)) - Number(await getAmount(Payment, 11, 4, 2022)));
  var somaMay12 = (Number(await getAmount(Receipt, 12, 4, 2022)) - Number(await getAmount(Payment, 12, 4, 2022)));
  var somaMay13 = (Number(await getAmount(Receipt, 13, 4, 2022)) - Number(await getAmount(Payment, 13, 4, 2022)));
  var somaMay14 = (Number(await getAmount(Receipt, 14, 4, 2022)) - Number(await getAmount(Payment, 14, 4, 2022)));
  var somaMay15 = (Number(await getAmount(Receipt, 15, 4, 2022)) - Number(await getAmount(Payment, 15, 4, 2022)));
  var somaMay16 = (Number(await getAmount(Receipt, 16, 4, 2022)) - Number(await getAmount(Payment, 16, 4, 2022)));
  var somaMay17 = (Number(await getAmount(Receipt, 17, 4, 2022)) - Number(await getAmount(Payment, 17, 4, 2022)));
  var somaMay18 = (Number(await getAmount(Receipt, 18, 4, 2022)) - Number(await getAmount(Payment, 18, 4, 2022)));
  var somaMay19 = (Number(await getAmount(Receipt, 19, 4, 2022)) - Number(await getAmount(Payment, 19, 4, 2022)));
  var somaMay20 = (Number(await getAmount(Receipt, 20, 4, 2022)) - Number(await getAmount(Payment, 20, 4, 2022)));
  var somaMay21 = (Number(await getAmount(Receipt, 21, 4, 2022)) - Number(await getAmount(Payment, 21, 4, 2022)));
  var somaMay22 = (Number(await getAmount(Receipt, 22, 4, 2022)) - Number(await getAmount(Payment, 22, 4, 2022)));
  var somaMay23 = (Number(await getAmount(Receipt, 23, 4, 2022)) - Number(await getAmount(Payment, 23, 4, 2022)));
  var somaMay24 = (Number(await getAmount(Receipt, 24, 4, 2022)) - Number(await getAmount(Payment, 24, 4, 2022)));
  var somaMay25 = (Number(await getAmount(Receipt, 25, 4, 2022)) - Number(await getAmount(Payment, 25, 4, 2022)));
  var somaMay26 = (Number(await getAmount(Receipt, 26, 4, 2022)) - Number(await getAmount(Payment, 26, 4, 2022)));
  var somaMay27 = (Number(await getAmount(Receipt, 27, 4, 2022)) - Number(await getAmount(Payment, 27, 4, 2022)));
  var somaMay28 = (Number(await getAmount(Receipt, 28, 4, 2022)) - Number(await getAmount(Payment, 28, 4, 2022)));
  var somaMay29 = (Number(await getAmount(Receipt, 29, 4, 2022)) - Number(await getAmount(Payment, 29, 4, 2022)));
  var somaMay30 = (Number(await getAmount(Receipt, 30, 4, 2022)) - Number(await getAmount(Payment, 30, 4, 2022)));
  var somaMay31 = (Number(await getAmount(Receipt, 31, 4, 2022)) - Number(await getAmount(Payment, 31, 4, 2022)));

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  var amountMay1 = somaMay1;
  var amountMay2 = (parseInt(somaMay1) + parseInt(somaMay2));
  var amountMay3 = (parseInt(amountMay2) + parseInt(somaMay3));
  var amountMay4 = (parseInt(amountMay3) + parseInt(somaMay4));
  var amountMay5 = (parseInt(amountMay4) + parseInt(somaMay5));
  var amountMay6 = (parseInt(amountMay5) + parseInt(somaMay6));
  var amountMay7 = (parseInt(amountMay6) + parseInt(somaMay7));
  var amountMay8 = (parseInt(amountMay7) + parseInt(somaMay8));
  var amountMay9 = (parseInt(amountMay8) + parseInt(somaMay9));
  var amountMay10 = (parseInt(amountMay9) + parseInt(somaMay10));
  var amountMay11 = (parseInt(amountMay10) + parseInt(somaMay11));
  var amountMay12 = (parseInt(amountMay11) + parseInt(somaMay12));
  var amountMay13 = (parseInt(amountMay12) + parseInt(somaMay13));
  var amountMay14 = (parseInt(amountMay13) + parseInt(somaMay14));
  var amountMay15 = (parseInt(amountMay14) + parseInt(somaMay15));
  var amountMay16 = (parseInt(amountMay15) + parseInt(somaMay16));
  var amountMay17 = (parseInt(amountMay16) + parseInt(somaMay17));
  var amountMay18 = (parseInt(amountMay17) + parseInt(somaMay18));
  var amountMay19 = (parseInt(amountMay18) + parseInt(somaMay19));
  var amountMay20 = (parseInt(amountMay19) + parseInt(somaMay20));
  var amountMay21 = (parseInt(amountMay20) + parseInt(somaMay21));
  var amountMay22 = (parseInt(amountMay21) + parseInt(somaMay22));
  var amountMay23 = (parseInt(amountMay22) + parseInt(somaMay23));
  var amountMay24 = (parseInt(amountMay23) + parseInt(somaMay24));
  var amountMay25 = (parseInt(amountMay24) + parseInt(somaMay25));
  var amountMay26 = (parseInt(amountMay25) + parseInt(somaMay26));
  var amountMay27 = (parseInt(amountMay26) + parseInt(somaMay27));
  var amountMay28 = (parseInt(amountMay27) + parseInt(somaMay28));
  var amountMay29 = (parseInt(amountMay28) + parseInt(somaMay29));
  var amountMay30 = (parseInt(amountMay29) + parseInt(somaMay30));
  var amountMay31 = (parseInt(amountMay30) + parseInt(somaMay31));

  var amountDaysMay = ([
    amountMay1.toLocaleFixed(2), amountMay2.toLocaleFixed(2), amountMay3.toLocaleFixed(2),
    amountMay4.toLocaleFixed(2), amountMay5.toLocaleFixed(2), amountMay6.toLocaleFixed(2),
    amountMay7.toLocaleFixed(2), amountMay8.toLocaleFixed(2), amountMay9.toLocaleFixed(2),
    amountMay10.toLocaleFixed(2), amountMay11.toLocaleFixed(2), amountMay12.toLocaleFixed(2),
    amountMay13.toLocaleFixed(2), amountMay14.toLocaleFixed(2), amountMay15.toLocaleFixed(2),
    amountMay16.toLocaleFixed(2), amountMay17.toLocaleFixed(2), amountMay18.toLocaleFixed(2),
    amountMay19.toLocaleFixed(2), amountMay20.toLocaleFixed(2), amountMay21.toLocaleFixed(2),
    amountMay22.toLocaleFixed(2), amountMay23.toLocaleFixed(2), amountMay24.toLocaleFixed(2),
    amountMay25.toLocaleFixed(2), amountMay26.toLocaleFixed(2), amountMay27.toLocaleFixed(2),
    amountMay28.toLocaleFixed(2), amountMay29.toLocaleFixed(2), amountMay30.toLocaleFixed(2),
    amountMay31.toLocaleFixed(2),
  ]);

  var somaDaysMay = ([
    somaMay1, somaMay2, somaMay3,
    somaMay4, somaMay5, somaMay6,
    somaMay7, somaMay8, somaMay9,
    somaMay10, somaMay11, somaMay12,
    somaMay13, somaMay14, somaMay15,
    somaMay16, somaMay17, somaMay18,
    somaMay19, somaMay20, somaMay21,
    somaMay22, somaMay23, somaMay24,
    somaMay25, somaMay26, somaMay27,
    somaMay28, somaMay29, somaMay30, somaMay31,
  ]);

  var ReceiptsMay2022ChartJS = ([
    (Number(await getAmount(Receipt, 1, 4, 2022))),
    (Number(await getAmount(Receipt, 2, 4, 2022))),
    (Number(await getAmount(Receipt, 3, 4, 2022))),
    (Number(await getAmount(Receipt, 4, 4, 2022))),
    (Number(await getAmount(Receipt, 5, 4, 2022))),
    (Number(await getAmount(Receipt, 6, 4, 2022))),
    (Number(await getAmount(Receipt, 7, 4, 2022))),
    (Number(await getAmount(Receipt, 8, 4, 2022))),
    (Number(await getAmount(Receipt, 9, 4, 2022))),
    (Number(await getAmount(Receipt, 10, 4, 2022))),
    (Number(await getAmount(Receipt, 11, 4, 2022))),
    (Number(await getAmount(Receipt, 12, 4, 2022))),
    (Number(await getAmount(Receipt, 13, 4, 2022))),
    (Number(await getAmount(Receipt, 14, 4, 2022))),
    (Number(await getAmount(Receipt, 15, 4, 2022))),
    (Number(await getAmount(Receipt, 16, 4, 2022))),
    (Number(await getAmount(Receipt, 17, 4, 2022))),
    (Number(await getAmount(Receipt, 18, 4, 2022))),
    (Number(await getAmount(Receipt, 19, 4, 2022))),
    (Number(await getAmount(Receipt, 20, 4, 2022))),
    (Number(await getAmount(Receipt, 21, 4, 2022))),
    (Number(await getAmount(Receipt, 22, 4, 2022))),
    (Number(await getAmount(Receipt, 23, 4, 2022))),
    (Number(await getAmount(Receipt, 24, 4, 2022))),
    (Number(await getAmount(Receipt, 25, 4, 2022))),
    (Number(await getAmount(Receipt, 26, 4, 2022))),
    (Number(await getAmount(Receipt, 27, 4, 2022))),
    (Number(await getAmount(Receipt, 28, 4, 2022))),
    (Number(await getAmount(Receipt, 29, 4, 2022))),
    (Number(await getAmount(Receipt, 30, 4, 2022))),
    (Number(await getAmount(Receipt, 31, 4, 2022))),
  ]);

  var PaymentsMay2022ChartJS = ([
    (-Number(await getAmount(Payment, 1, 4, 2022))),
    (-Number(await getAmount(Payment, 2, 4, 2022))),
    (-Number(await getAmount(Payment, 3, 4, 2022))),
    (-Number(await getAmount(Payment, 4, 4, 2022))),
    (-Number(await getAmount(Payment, 5, 4, 2022))),
    (-Number(await getAmount(Payment, 6, 4, 2022))),
    (-Number(await getAmount(Payment, 7, 4, 2022))),
    (-Number(await getAmount(Payment, 8, 4, 2022))),
    (-Number(await getAmount(Payment, 9, 4, 2022))),
    (-Number(await getAmount(Payment, 10, 4, 2022))),
    (-Number(await getAmount(Payment, 11, 4, 2022))),
    (-Number(await getAmount(Payment, 12, 4, 2022))),
    (-Number(await getAmount(Payment, 13, 4, 2022))),
    (-Number(await getAmount(Payment, 14, 4, 2022))),
    (-Number(await getAmount(Payment, 15, 4, 2022))),
    (-Number(await getAmount(Payment, 16, 4, 2022))),
    (-Number(await getAmount(Payment, 17, 4, 2022))),
    (-Number(await getAmount(Payment, 18, 4, 2022))),
    (-Number(await getAmount(Payment, 19, 4, 2022))),
    (-Number(await getAmount(Payment, 20, 4, 2022))),
    (-Number(await getAmount(Payment, 21, 4, 2022))),
    (-Number(await getAmount(Payment, 22, 4, 2022))),
    (-Number(await getAmount(Payment, 23, 4, 2022))),
    (-Number(await getAmount(Payment, 24, 4, 2022))),
    (-Number(await getAmount(Payment, 25, 4, 2022))),
    (-Number(await getAmount(Payment, 26, 4, 2022))),
    (-Number(await getAmount(Payment, 27, 4, 2022))),
    (-Number(await getAmount(Payment, 28, 4, 2022))),
    (-Number(await getAmount(Payment, 29, 4, 2022))),
    (-Number(await getAmount(Payment, 30, 4, 2022))),
    (-Number(await getAmount(Payment, 31, 4, 2022))),

  ]);


  /////////////////////////////////////////////////////////Junho
  //filtragem de dados, por peridodo que eles foram adicionados no (getAmount)
  ///////////////////////////////////////getAmount

  var ReceiptsJune2022 = ([
    (Number(await getAmount(Receipt, 1, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 2, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 3, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 4, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 5, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 6, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 7, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 8, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 9, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 10, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 11, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 12, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 13, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 14, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 15, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 16, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 17, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 18, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 19, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 20, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 21, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 22, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 23, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 24, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 25, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 26, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 27, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 28, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 29, 5, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 30, 5, 2022))).toLocaleFixed(2),
  ]);

  var PaymentsJune2022 = ([
    (-Number(await getAmount(Payment, 1, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 2, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 3, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 4, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 5, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 6, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 7, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 8, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 9, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 10, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 11, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 12, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 13, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 14, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 15, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 16, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 17, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 18, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 19, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 20, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 21, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 22, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 23, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 24, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 25, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 26, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 27, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 28, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 29, 5, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 30, 5, 2022))).toLocaleFixed(2),
  ]);

  var somaJune1 = (Number(await getAmount(Receipt, 1, 5, 2022)) - Number(await getAmount(Payment, 1, 5, 2022)));
  var somaJune2 = (Number(await getAmount(Receipt, 2, 5, 2022)) - Number(await getAmount(Payment, 2, 5, 2022)));
  var somaJune3 = (Number(await getAmount(Receipt, 3, 5, 2022)) - Number(await getAmount(Payment, 3, 5, 2022)));
  var somaJune4 = (Number(await getAmount(Receipt, 4, 5, 2022)) - Number(await getAmount(Payment, 4, 5, 2022)));
  var somaJune5 = (Number(await getAmount(Receipt, 5, 5, 2022)) - Number(await getAmount(Payment, 5, 5, 2022)));
  var somaJune6 = (Number(await getAmount(Receipt, 6, 5, 2022)) - Number(await getAmount(Payment, 6, 5, 2022)));
  var somaJune7 = (Number(await getAmount(Receipt, 7, 5, 2022)) - Number(await getAmount(Payment, 7, 5, 2022)));
  var somaJune8 = (Number(await getAmount(Receipt, 8, 5, 2022)) - Number(await getAmount(Payment, 8, 5, 2022)));
  var somaJune9 = (Number(await getAmount(Receipt, 9, 5, 2022)) - Number(await getAmount(Payment, 9, 5, 2022)));
  var somaJune10 = (Number(await getAmount(Receipt, 10, 5, 2022)) - Number(await getAmount(Payment, 10, 5, 2022)));
  var somaJune11 = (Number(await getAmount(Receipt, 11, 5, 2022)) - Number(await getAmount(Payment, 11, 5, 2022)));
  var somaJune12 = (Number(await getAmount(Receipt, 12, 5, 2022)) - Number(await getAmount(Payment, 12, 5, 2022)));
  var somaJune13 = (Number(await getAmount(Receipt, 13, 5, 2022)) - Number(await getAmount(Payment, 13, 5, 2022)));
  var somaJune14 = (Number(await getAmount(Receipt, 14, 5, 2022)) - Number(await getAmount(Payment, 14, 5, 2022)));
  var somaJune15 = (Number(await getAmount(Receipt, 15, 5, 2022)) - Number(await getAmount(Payment, 15, 5, 2022)));
  var somaJune16 = (Number(await getAmount(Receipt, 16, 5, 2022)) - Number(await getAmount(Payment, 16, 5, 2022)));
  var somaJune17 = (Number(await getAmount(Receipt, 17, 5, 2022)) - Number(await getAmount(Payment, 17, 5, 2022)));
  var somaJune18 = (Number(await getAmount(Receipt, 18, 5, 2022)) - Number(await getAmount(Payment, 18, 5, 2022)));
  var somaJune19 = (Number(await getAmount(Receipt, 19, 5, 2022)) - Number(await getAmount(Payment, 19, 5, 2022)));
  var somaJune20 = (Number(await getAmount(Receipt, 20, 5, 2022)) - Number(await getAmount(Payment, 20, 5, 2022)));
  var somaJune21 = (Number(await getAmount(Receipt, 21, 5, 2022)) - Number(await getAmount(Payment, 21, 5, 2022)));
  var somaJune22 = (Number(await getAmount(Receipt, 22, 5, 2022)) - Number(await getAmount(Payment, 22, 5, 2022)));
  var somaJune23 = (Number(await getAmount(Receipt, 23, 5, 2022)) - Number(await getAmount(Payment, 23, 5, 2022)));
  var somaJune24 = (Number(await getAmount(Receipt, 24, 5, 2022)) - Number(await getAmount(Payment, 24, 5, 2022)));
  var somaJune25 = (Number(await getAmount(Receipt, 25, 5, 2022)) - Number(await getAmount(Payment, 25, 5, 2022)));
  var somaJune26 = (Number(await getAmount(Receipt, 26, 5, 2022)) - Number(await getAmount(Payment, 26, 5, 2022)));
  var somaJune27 = (Number(await getAmount(Receipt, 27, 5, 2022)) - Number(await getAmount(Payment, 27, 5, 2022)));
  var somaJune28 = (Number(await getAmount(Receipt, 28, 5, 2022)) - Number(await getAmount(Payment, 28, 5, 2022)));
  var somaJune29 = (Number(await getAmount(Receipt, 29, 5, 2022)) - Number(await getAmount(Payment, 29, 5, 2022)));
  var somaJune30 = (Number(await getAmount(Receipt, 30, 5, 2022)) - Number(await getAmount(Payment, 30, 5, 2022)));

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  var amountJune1 = somaJune1;
  var amountJune2 = (parseInt(somaJune1) + parseInt(somaJune2));
  var amountJune3 = (parseInt(amountJune2) + parseInt(somaJune3));
  var amountJune4 = (parseInt(amountJune3) + parseInt(somaJune4));
  var amountJune5 = (parseInt(amountJune4) + parseInt(somaJune5));
  var amountJune6 = (parseInt(amountJune5) + parseInt(somaJune6));
  var amountJune7 = (parseInt(amountJune6) + parseInt(somaJune7));
  var amountJune8 = (parseInt(amountJune7) + parseInt(somaJune8));
  var amountJune9 = (parseInt(amountJune8) + parseInt(somaJune9));
  var amountJune10 = (parseInt(amountJune9) + parseInt(somaJune10));
  var amountJune11 = (parseInt(amountJune10) + parseInt(somaJune11));
  var amountJune12 = (parseInt(amountJune11) + parseInt(somaJune12));
  var amountJune13 = (parseInt(amountJune12) + parseInt(somaJune13));
  var amountJune14 = (parseInt(amountJune13) + parseInt(somaJune14));
  var amountJune15 = (parseInt(amountJune14) + parseInt(somaJune15));
  var amountJune16 = (parseInt(amountJune15) + parseInt(somaJune16));
  var amountJune17 = (parseInt(amountJune16) + parseInt(somaJune17));
  var amountJune18 = (parseInt(amountJune17) + parseInt(somaJune18));
  var amountJune19 = (parseInt(amountJune18) + parseInt(somaJune19));
  var amountJune20 = (parseInt(amountJune19) + parseInt(somaJune20));
  var amountJune21 = (parseInt(amountJune20) + parseInt(somaJune21));
  var amountJune22 = (parseInt(amountJune21) + parseInt(somaJune22));
  var amountJune23 = (parseInt(amountJune22) + parseInt(somaJune23));
  var amountJune24 = (parseInt(amountJune23) + parseInt(somaJune24));
  var amountJune25 = (parseInt(amountJune24) + parseInt(somaJune25));
  var amountJune26 = (parseInt(amountJune25) + parseInt(somaJune26));
  var amountJune27 = (parseInt(amountJune26) + parseInt(somaJune27));
  var amountJune28 = (parseInt(amountJune27) + parseInt(somaJune28));
  var amountJune29 = (parseInt(amountJune28) + parseInt(somaJune29));
  var amountJune30 = (parseInt(amountJune29) + parseInt(somaJune30));

  var amountDaysJune = ([
    amountJune1.toLocaleFixed(2), amountJune2.toLocaleFixed(2), amountJune3.toLocaleFixed(2),
    amountJune4.toLocaleFixed(2), amountJune5.toLocaleFixed(2), amountJune6.toLocaleFixed(2),
    amountJune7.toLocaleFixed(2), amountJune8.toLocaleFixed(2), amountJune9.toLocaleFixed(2),
    amountJune10.toLocaleFixed(2), amountJune11.toLocaleFixed(2), amountJune12.toLocaleFixed(2),
    amountJune13.toLocaleFixed(2), amountJune14.toLocaleFixed(2), amountJune15.toLocaleFixed(2),
    amountJune16.toLocaleFixed(2), amountJune17.toLocaleFixed(2), amountJune18.toLocaleFixed(2),
    amountJune19.toLocaleFixed(2), amountJune20.toLocaleFixed(2), amountJune21.toLocaleFixed(2),
    amountJune22.toLocaleFixed(2), amountJune23.toLocaleFixed(2), amountJune24.toLocaleFixed(2),
    amountJune25.toLocaleFixed(2), amountJune26.toLocaleFixed(2), amountJune27.toLocaleFixed(2),
    amountJune28.toLocaleFixed(2), amountJune29.toLocaleFixed(2), amountJune30.toLocaleFixed(2),
  ]);

  var somaDaysJune = ([
    somaJune1, somaJune2, somaJune3,
    somaJune4, somaJune5, somaJune6,
    somaJune7, somaJune8, somaJune9,
    somaJune10, somaJune11, somaJune12,
    somaJune13, somaJune14, somaJune15,
    somaJune16, somaJune17, somaJune18,
    somaJune19, somaJune20, somaJune21,
    somaJune22, somaJune23, somaJune24,
    somaJune25, somaJune26, somaJune27,
    somaJune28, somaJune29, somaJune30,
  ]);

  var ReceiptsJune2022ChartJS = ([
    (Number(await getAmount(Receipt, 1, 5, 2022))),
    (Number(await getAmount(Receipt, 2, 5, 2022))),
    (Number(await getAmount(Receipt, 3, 5, 2022))),
    (Number(await getAmount(Receipt, 4, 5, 2022))),
    (Number(await getAmount(Receipt, 5, 5, 2022))),
    (Number(await getAmount(Receipt, 6, 5, 2022))),
    (Number(await getAmount(Receipt, 7, 5, 2022))),
    (Number(await getAmount(Receipt, 8, 5, 2022))),
    (Number(await getAmount(Receipt, 9, 5, 2022))),
    (Number(await getAmount(Receipt, 10, 5, 2022))),
    (Number(await getAmount(Receipt, 11, 5, 2022))),
    (Number(await getAmount(Receipt, 12, 5, 2022))),
    (Number(await getAmount(Receipt, 13, 5, 2022))),
    (Number(await getAmount(Receipt, 14, 5, 2022))),
    (Number(await getAmount(Receipt, 15, 5, 2022))),
    (Number(await getAmount(Receipt, 16, 5, 2022))),
    (Number(await getAmount(Receipt, 17, 5, 2022))),
    (Number(await getAmount(Receipt, 18, 5, 2022))),
    (Number(await getAmount(Receipt, 19, 5, 2022))),
    (Number(await getAmount(Receipt, 20, 5, 2022))),
    (Number(await getAmount(Receipt, 21, 5, 2022))),
    (Number(await getAmount(Receipt, 22, 5, 2022))),
    (Number(await getAmount(Receipt, 23, 5, 2022))),
    (Number(await getAmount(Receipt, 24, 5, 2022))),
    (Number(await getAmount(Receipt, 25, 5, 2022))),
    (Number(await getAmount(Receipt, 26, 5, 2022))),
    (Number(await getAmount(Receipt, 27, 5, 2022))),
    (Number(await getAmount(Receipt, 28, 5, 2022))),
    (Number(await getAmount(Receipt, 29, 5, 2022))),
    (Number(await getAmount(Receipt, 30, 5, 2022))),
  ]);

  var PaymentsJune2022ChartJS = ([
    (-Number(await getAmount(Payment, 1, 5, 2022))),
    (-Number(await getAmount(Payment, 2, 5, 2022))),
    (-Number(await getAmount(Payment, 3, 5, 2022))),
    (-Number(await getAmount(Payment, 4, 5, 2022))),
    (-Number(await getAmount(Payment, 5, 5, 2022))),
    (-Number(await getAmount(Payment, 6, 5, 2022))),
    (-Number(await getAmount(Payment, 7, 5, 2022))),
    (-Number(await getAmount(Payment, 8, 5, 2022))),
    (-Number(await getAmount(Payment, 9, 5, 2022))),
    (-Number(await getAmount(Payment, 10, 5, 2022))),
    (-Number(await getAmount(Payment, 11, 5, 2022))),
    (-Number(await getAmount(Payment, 12, 5, 2022))),
    (-Number(await getAmount(Payment, 13, 5, 2022))),
    (-Number(await getAmount(Payment, 14, 5, 2022))),
    (-Number(await getAmount(Payment, 15, 5, 2022))),
    (-Number(await getAmount(Payment, 16, 5, 2022))),
    (-Number(await getAmount(Payment, 17, 5, 2022))),
    (-Number(await getAmount(Payment, 18, 5, 2022))),
    (-Number(await getAmount(Payment, 19, 5, 2022))),
    (-Number(await getAmount(Payment, 20, 5, 2022))),
    (-Number(await getAmount(Payment, 21, 5, 2022))),
    (-Number(await getAmount(Payment, 22, 5, 2022))),
    (-Number(await getAmount(Payment, 23, 5, 2022))),
    (-Number(await getAmount(Payment, 24, 5, 2022))),
    (-Number(await getAmount(Payment, 25, 5, 2022))),
    (-Number(await getAmount(Payment, 26, 5, 2022))),
    (-Number(await getAmount(Payment, 27, 5, 2022))),
    (-Number(await getAmount(Payment, 28, 5, 2022))),
    (-Number(await getAmount(Payment, 29, 5, 2022))),
    (-Number(await getAmount(Payment, 30, 5, 2022))),
  ]);


  /////////////////////////////////////////////////////////Julho
  //filtragem de dados, por peridodo que eles foram adicionados no (getAmount)
  ///////////////////////////////////////getAmount

  var ReceiptsJuly2022 = ([
    (Number(await getAmount(Receipt, 1, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 2, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 3, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 4, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 5, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 6, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 7, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 8, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 9, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 10, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 11, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 12, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 13, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 14, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 15, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 16, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 17, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 18, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 19, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 20, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 21, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 22, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 23, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 24, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 25, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 26, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 27, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 28, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 29, 6, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 30, 6, 2022))).toLocaleFixed(2),
  ]);

  var PaymentsJuly2022 = ([
    (-Number(await getAmount(Payment, 1, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 2, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 3, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 4, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 5, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 6, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 7, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 8, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 9, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 10, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 11, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 12, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 13, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 14, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 15, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 16, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 17, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 18, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 19, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 20, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 21, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 22, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 23, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 24, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 25, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 26, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 27, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 28, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 29, 6, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 30, 6, 2022))).toLocaleFixed(2),
  ]);

  var somaJuly1 = (Number(await getAmount(Receipt, 1, 6, 2022)) - Number(await getAmount(Payment, 1, 6, 2022)));
  var somaJuly2 = (Number(await getAmount(Receipt, 2, 6, 2022)) - Number(await getAmount(Payment, 2, 6, 2022)));
  var somaJuly3 = (Number(await getAmount(Receipt, 3, 6, 2022)) - Number(await getAmount(Payment, 3, 6, 2022)));
  var somaJuly4 = (Number(await getAmount(Receipt, 4, 6, 2022)) - Number(await getAmount(Payment, 4, 6, 2022)));
  var somaJuly5 = (Number(await getAmount(Receipt, 5, 6, 2022)) - Number(await getAmount(Payment, 5, 6, 2022)));
  var somaJuly6 = (Number(await getAmount(Receipt, 6, 6, 2022)) - Number(await getAmount(Payment, 6, 6, 2022)));
  var somaJuly7 = (Number(await getAmount(Receipt, 7, 6, 2022)) - Number(await getAmount(Payment, 7, 6, 2022)));
  var somaJuly8 = (Number(await getAmount(Receipt, 8, 6, 2022)) - Number(await getAmount(Payment, 8, 6, 2022)));
  var somaJuly9 = (Number(await getAmount(Receipt, 9, 6, 2022)) - Number(await getAmount(Payment, 9, 6, 2022)));
  var somaJuly10 = (Number(await getAmount(Receipt, 10, 6, 2022)) - Number(await getAmount(Payment, 10, 6, 2022)));
  var somaJuly11 = (Number(await getAmount(Receipt, 11, 6, 2022)) - Number(await getAmount(Payment, 11, 6, 2022)));
  var somaJuly12 = (Number(await getAmount(Receipt, 12, 6, 2022)) - Number(await getAmount(Payment, 12, 6, 2022)));
  var somaJuly13 = (Number(await getAmount(Receipt, 13, 6, 2022)) - Number(await getAmount(Payment, 13, 6, 2022)));
  var somaJuly14 = (Number(await getAmount(Receipt, 14, 6, 2022)) - Number(await getAmount(Payment, 14, 6, 2022)));
  var somaJuly15 = (Number(await getAmount(Receipt, 15, 6, 2022)) - Number(await getAmount(Payment, 15, 6, 2022)));
  var somaJuly16 = (Number(await getAmount(Receipt, 16, 6, 2022)) - Number(await getAmount(Payment, 16, 6, 2022)));
  var somaJuly17 = (Number(await getAmount(Receipt, 17, 6, 2022)) - Number(await getAmount(Payment, 17, 6, 2022)));
  var somaJuly18 = (Number(await getAmount(Receipt, 18, 6, 2022)) - Number(await getAmount(Payment, 18, 6, 2022)));
  var somaJuly19 = (Number(await getAmount(Receipt, 19, 6, 2022)) - Number(await getAmount(Payment, 19, 6, 2022)));
  var somaJuly20 = (Number(await getAmount(Receipt, 20, 6, 2022)) - Number(await getAmount(Payment, 20, 6, 2022)));
  var somaJuly21 = (Number(await getAmount(Receipt, 21, 6, 2022)) - Number(await getAmount(Payment, 21, 6, 2022)));
  var somaJuly22 = (Number(await getAmount(Receipt, 22, 6, 2022)) - Number(await getAmount(Payment, 22, 6, 2022)));
  var somaJuly23 = (Number(await getAmount(Receipt, 23, 6, 2022)) - Number(await getAmount(Payment, 23, 6, 2022)));
  var somaJuly24 = (Number(await getAmount(Receipt, 24, 6, 2022)) - Number(await getAmount(Payment, 24, 6, 2022)));
  var somaJuly25 = (Number(await getAmount(Receipt, 25, 6, 2022)) - Number(await getAmount(Payment, 25, 6, 2022)));
  var somaJuly26 = (Number(await getAmount(Receipt, 26, 6, 2022)) - Number(await getAmount(Payment, 26, 6, 2022)));
  var somaJuly27 = (Number(await getAmount(Receipt, 27, 6, 2022)) - Number(await getAmount(Payment, 27, 6, 2022)));
  var somaJuly28 = (Number(await getAmount(Receipt, 28, 6, 2022)) - Number(await getAmount(Payment, 28, 6, 2022)));
  var somaJuly29 = (Number(await getAmount(Receipt, 29, 6, 2022)) - Number(await getAmount(Payment, 29, 6, 2022)));
  var somaJuly30 = (Number(await getAmount(Receipt, 30, 6, 2022)) - Number(await getAmount(Payment, 30, 6, 2022)));
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  var amountJuly1 = somaJuly1;
  var amountJuly2 = (parseInt(somaJuly1) + parseInt(somaJuly2));
  var amountJuly3 = (parseInt(amountJuly2) + parseInt(somaJuly3));
  var amountJuly4 = (parseInt(amountJuly3) + parseInt(somaJuly4));
  var amountJuly5 = (parseInt(amountJuly4) + parseInt(somaJuly5));
  var amountJuly6 = (parseInt(amountJuly5) + parseInt(somaJuly6));
  var amountJuly7 = (parseInt(amountJuly6) + parseInt(somaJuly7));
  var amountJuly8 = (parseInt(amountJuly7) + parseInt(somaJuly8));
  var amountJuly9 = (parseInt(amountJuly8) + parseInt(somaJuly9));
  var amountJuly10 = (parseInt(amountJuly9) + parseInt(somaJuly10));
  var amountJuly11 = (parseInt(amountJuly10) + parseInt(somaJuly11));
  var amountJuly12 = (parseInt(amountJuly11) + parseInt(somaJuly12));
  var amountJuly13 = (parseInt(amountJuly12) + parseInt(somaJuly13));
  var amountJuly14 = (parseInt(amountJuly13) + parseInt(somaJuly14));
  var amountJuly15 = (parseInt(amountJuly14) + parseInt(somaJuly15));
  var amountJuly16 = (parseInt(amountJuly15) + parseInt(somaJuly16));
  var amountJuly17 = (parseInt(amountJuly16) + parseInt(somaJuly17));
  var amountJuly18 = (parseInt(amountJuly17) + parseInt(somaJuly18));
  var amountJuly19 = (parseInt(amountJuly18) + parseInt(somaJuly19));
  var amountJuly20 = (parseInt(amountJuly19) + parseInt(somaJuly20));
  var amountJuly21 = (parseInt(amountJuly20) + parseInt(somaJuly21));
  var amountJuly22 = (parseInt(amountJuly21) + parseInt(somaJuly22));
  var amountJuly23 = (parseInt(amountJuly22) + parseInt(somaJuly23));
  var amountJuly24 = (parseInt(amountJuly23) + parseInt(somaJuly24));
  var amountJuly25 = (parseInt(amountJuly24) + parseInt(somaJuly25));
  var amountJuly26 = (parseInt(amountJuly25) + parseInt(somaJuly26));
  var amountJuly27 = (parseInt(amountJuly26) + parseInt(somaJuly27));
  var amountJuly28 = (parseInt(amountJuly27) + parseInt(somaJuly28));
  var amountJuly29 = (parseInt(amountJuly28) + parseInt(somaJuly29));
  var amountJuly30 = (parseInt(amountJuly29) + parseInt(somaJuly30));

  var amountDaysJuly = ([
    amountJuly1.toLocaleFixed(2), amountJuly2.toLocaleFixed(2), amountJuly3.toLocaleFixed(2),
    amountJuly4.toLocaleFixed(2), amountJuly5.toLocaleFixed(2), amountJuly6.toLocaleFixed(2),
    amountJuly7.toLocaleFixed(2), amountJuly8.toLocaleFixed(2), amountJuly9.toLocaleFixed(2),
    amountJuly10.toLocaleFixed(2), amountJuly11.toLocaleFixed(2), amountJuly12.toLocaleFixed(2),
    amountJuly13.toLocaleFixed(2), amountJuly14.toLocaleFixed(2), amountJuly15.toLocaleFixed(2),
    amountJuly16.toLocaleFixed(2), amountJuly17.toLocaleFixed(2), amountJuly18.toLocaleFixed(2),
    amountJuly19.toLocaleFixed(2), amountJuly20.toLocaleFixed(2), amountJuly21.toLocaleFixed(2),
    amountJuly22.toLocaleFixed(2), amountJuly23.toLocaleFixed(2), amountJuly24.toLocaleFixed(2),
    amountJuly25.toLocaleFixed(2), amountJuly26.toLocaleFixed(2), amountJuly27.toLocaleFixed(2),
    amountJuly28.toLocaleFixed(2), amountJuly29.toLocaleFixed(2), amountJuly30.toLocaleFixed(2),
  ]);

  var somaDaysJuly = ([
    somaJuly1, somaJuly2, somaJuly3,
    somaJuly4, somaJuly5, somaJuly6,
    somaJuly7, somaJuly8, somaJuly9,
    somaJuly10, somaJuly11, somaJuly12,
    somaJuly13, somaJuly14, somaJuly15,
    somaJuly16, somaJuly17, somaJuly18,
    somaJuly19, somaJuly20, somaJuly21,
    somaJuly22, somaJuly23, somaJuly24,
    somaJuly25, somaJuly26, somaJuly27,
    somaJuly28, somaJuly29, somaJuly30,
  ]);

  var ReceiptsJuly2022ChartJS = ([
    (Number(await getAmount(Receipt, 1, 6, 2022))),
    (Number(await getAmount(Receipt, 2, 6, 2022))),
    (Number(await getAmount(Receipt, 3, 6, 2022))),
    (Number(await getAmount(Receipt, 4, 6, 2022))),
    (Number(await getAmount(Receipt, 5, 6, 2022))),
    (Number(await getAmount(Receipt, 6, 6, 2022))),
    (Number(await getAmount(Receipt, 7, 6, 2022))),
    (Number(await getAmount(Receipt, 8, 6, 2022))),
    (Number(await getAmount(Receipt, 9, 6, 2022))),
    (Number(await getAmount(Receipt, 10, 6, 2022))),
    (Number(await getAmount(Receipt, 11, 6, 2022))),
    (Number(await getAmount(Receipt, 12, 6, 2022))),
    (Number(await getAmount(Receipt, 13, 6, 2022))),
    (Number(await getAmount(Receipt, 14, 6, 2022))),
    (Number(await getAmount(Receipt, 15, 6, 2022))),
    (Number(await getAmount(Receipt, 16, 6, 2022))),
    (Number(await getAmount(Receipt, 17, 6, 2022))),
    (Number(await getAmount(Receipt, 18, 6, 2022))),
    (Number(await getAmount(Receipt, 19, 6, 2022))),
    (Number(await getAmount(Receipt, 20, 6, 2022))),
    (Number(await getAmount(Receipt, 21, 6, 2022))),
    (Number(await getAmount(Receipt, 22, 6, 2022))),
    (Number(await getAmount(Receipt, 23, 6, 2022))),
    (Number(await getAmount(Receipt, 24, 6, 2022))),
    (Number(await getAmount(Receipt, 25, 6, 2022))),
    (Number(await getAmount(Receipt, 26, 6, 2022))),
    (Number(await getAmount(Receipt, 27, 6, 2022))),
    (Number(await getAmount(Receipt, 28, 6, 2022))),
    (Number(await getAmount(Receipt, 29, 6, 2022))),
    (Number(await getAmount(Receipt, 30, 6, 2022))),
  ]);

  var PaymentsJuly2022ChartJS = ([
    (-Number(await getAmount(Payment, 1, 6, 2022))),
    (-Number(await getAmount(Payment, 2, 6, 2022))),
    (-Number(await getAmount(Payment, 3, 6, 2022))),
    (-Number(await getAmount(Payment, 4, 6, 2022))),
    (-Number(await getAmount(Payment, 5, 6, 2022))),
    (-Number(await getAmount(Payment, 6, 6, 2022))),
    (-Number(await getAmount(Payment, 7, 6, 2022))),
    (-Number(await getAmount(Payment, 8, 6, 2022))),
    (-Number(await getAmount(Payment, 9, 6, 2022))),
    (-Number(await getAmount(Payment, 10, 6, 2022))),
    (-Number(await getAmount(Payment, 11, 6, 2022))),
    (-Number(await getAmount(Payment, 12, 6, 2022))),
    (-Number(await getAmount(Payment, 13, 6, 2022))),
    (-Number(await getAmount(Payment, 14, 6, 2022))),
    (-Number(await getAmount(Payment, 15, 6, 2022))),
    (-Number(await getAmount(Payment, 16, 6, 2022))),
    (-Number(await getAmount(Payment, 17, 6, 2022))),
    (-Number(await getAmount(Payment, 18, 6, 2022))),
    (-Number(await getAmount(Payment, 19, 6, 2022))),
    (-Number(await getAmount(Payment, 20, 6, 2022))),
    (-Number(await getAmount(Payment, 21, 6, 2022))),
    (-Number(await getAmount(Payment, 22, 6, 2022))),
    (-Number(await getAmount(Payment, 23, 6, 2022))),
    (-Number(await getAmount(Payment, 24, 6, 2022))),
    (-Number(await getAmount(Payment, 25, 6, 2022))),
    (-Number(await getAmount(Payment, 26, 6, 2022))),
    (-Number(await getAmount(Payment, 27, 6, 2022))),
    (-Number(await getAmount(Payment, 28, 6, 2022))),
    (-Number(await getAmount(Payment, 29, 6, 2022))),
    (-Number(await getAmount(Payment, 30, 6, 2022))),
  ]);

  /////////////////////////////////////////////////////////Agosto
  //filtragem de dados, por peridodo que eles foram adicionados no (getAmount)
  ///////////////////////////////////////getAmount

  var ReceiptsAugust2022 = ([
    (Number(await getAmount(Receipt, 1, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 2, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 3, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 4, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 5, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 6, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 7, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 8, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 9, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 10, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 11, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 12, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 13, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 14, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 15, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 16, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 17, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 18, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 19, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 20, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 21, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 22, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 23, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 24, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 25, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 26, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 27, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 28, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 29, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 30, 7, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 31, 7, 2022))).toLocaleFixed(2),
  ]);

  var PaymentsAugust2022 = ([
    (-Number(await getAmount(Payment, 1, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 2, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 3, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 4, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 5, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 6, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 7, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 8, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 9, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 10, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 11, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 12, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 13, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 14, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 15, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 16, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 17, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 18, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 19, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 20, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 21, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 22, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 23, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 24, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 25, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 26, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 27, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 28, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 29, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 30, 7, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 31, 7, 2022))).toLocaleFixed(2),
  ]);

  var somaAugust1 = (Number(await getAmount(Receipt, 1, 7, 2022)) - Number(await getAmount(Payment, 1, 7, 2022)));
  var somaAugust2 = (Number(await getAmount(Receipt, 2, 7, 2022)) - Number(await getAmount(Payment, 2, 7, 2022)));
  var somaAugust3 = (Number(await getAmount(Receipt, 3, 7, 2022)) - Number(await getAmount(Payment, 3, 7, 2022)));
  var somaAugust4 = (Number(await getAmount(Receipt, 4, 7, 2022)) - Number(await getAmount(Payment, 4, 7, 2022)));
  var somaAugust5 = (Number(await getAmount(Receipt, 5, 7, 2022)) - Number(await getAmount(Payment, 5, 7, 2022)));
  var somaAugust6 = (Number(await getAmount(Receipt, 6, 7, 2022)) - Number(await getAmount(Payment, 6, 7, 2022)));
  var somaAugust7 = (Number(await getAmount(Receipt, 7, 7, 2022)) - Number(await getAmount(Payment, 7, 7, 2022)));
  var somaAugust8 = (Number(await getAmount(Receipt, 8, 7, 2022)) - Number(await getAmount(Payment, 8, 7, 2022)));
  var somaAugust9 = (Number(await getAmount(Receipt, 9, 7, 2022)) - Number(await getAmount(Payment, 9, 7, 2022)));
  var somaAugust10 = (Number(await getAmount(Receipt, 10, 7, 2022)) - Number(await getAmount(Payment, 10, 7, 2022)));
  var somaAugust11 = (Number(await getAmount(Receipt, 11, 7, 2022)) - Number(await getAmount(Payment, 11, 7, 2022)));
  var somaAugust12 = (Number(await getAmount(Receipt, 12, 7, 2022)) - Number(await getAmount(Payment, 12, 7, 2022)));
  var somaAugust13 = (Number(await getAmount(Receipt, 13, 7, 2022)) - Number(await getAmount(Payment, 13, 7, 2022)));
  var somaAugust14 = (Number(await getAmount(Receipt, 14, 7, 2022)) - Number(await getAmount(Payment, 14, 7, 2022)));
  var somaAugust15 = (Number(await getAmount(Receipt, 15, 7, 2022)) - Number(await getAmount(Payment, 15, 7, 2022)));
  var somaAugust16 = (Number(await getAmount(Receipt, 16, 7, 2022)) - Number(await getAmount(Payment, 16, 7, 2022)));
  var somaAugust17 = (Number(await getAmount(Receipt, 17, 7, 2022)) - Number(await getAmount(Payment, 17, 7, 2022)));
  var somaAugust18 = (Number(await getAmount(Receipt, 18, 7, 2022)) - Number(await getAmount(Payment, 18, 7, 2022)));
  var somaAugust19 = (Number(await getAmount(Receipt, 19, 7, 2022)) - Number(await getAmount(Payment, 19, 7, 2022)));
  var somaAugust20 = (Number(await getAmount(Receipt, 20, 7, 2022)) - Number(await getAmount(Payment, 20, 7, 2022)));
  var somaAugust21 = (Number(await getAmount(Receipt, 21, 7, 2022)) - Number(await getAmount(Payment, 21, 7, 2022)));
  var somaAugust22 = (Number(await getAmount(Receipt, 22, 7, 2022)) - Number(await getAmount(Payment, 22, 7, 2022)));
  var somaAugust23 = (Number(await getAmount(Receipt, 23, 7, 2022)) - Number(await getAmount(Payment, 23, 7, 2022)));
  var somaAugust24 = (Number(await getAmount(Receipt, 24, 7, 2022)) - Number(await getAmount(Payment, 24, 7, 2022)));
  var somaAugust25 = (Number(await getAmount(Receipt, 25, 7, 2022)) - Number(await getAmount(Payment, 25, 7, 2022)));
  var somaAugust26 = (Number(await getAmount(Receipt, 26, 7, 2022)) - Number(await getAmount(Payment, 26, 7, 2022)));
  var somaAugust27 = (Number(await getAmount(Receipt, 27, 7, 2022)) - Number(await getAmount(Payment, 27, 7, 2022)));
  var somaAugust28 = (Number(await getAmount(Receipt, 28, 7, 2022)) - Number(await getAmount(Payment, 28, 7, 2022)));
  var somaAugust29 = (Number(await getAmount(Receipt, 29, 7, 2022)) - Number(await getAmount(Payment, 29, 7, 2022)));
  var somaAugust30 = (Number(await getAmount(Receipt, 30, 7, 2022)) - Number(await getAmount(Payment, 30, 7, 2022)));
  var somaAugust31 = (Number(await getAmount(Receipt, 31, 7, 2022)) - Number(await getAmount(Payment, 31, 7, 2022)));
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  var amountAugust1 = somaAugust1;
  var amountAugust2 = (parseInt(somaAugust1) + parseInt(somaAugust2));
  var amountAugust3 = (parseInt(amountAugust2) + parseInt(somaAugust3));
  var amountAugust4 = (parseInt(amountAugust3) + parseInt(somaAugust4));
  var amountAugust5 = (parseInt(amountAugust4) + parseInt(somaAugust5));
  var amountAugust6 = (parseInt(amountAugust5) + parseInt(somaAugust6));
  var amountAugust7 = (parseInt(amountAugust6) + parseInt(somaAugust7));
  var amountAugust8 = (parseInt(amountAugust7) + parseInt(somaAugust8));
  var amountAugust9 = (parseInt(amountAugust8) + parseInt(somaAugust9));
  var amountAugust10 = (parseInt(amountAugust9) + parseInt(somaAugust10));
  var amountAugust11 = (parseInt(amountAugust10) + parseInt(somaAugust11));
  var amountAugust12 = (parseInt(amountAugust11) + parseInt(somaAugust12));
  var amountAugust13 = (parseInt(amountAugust12) + parseInt(somaAugust13));
  var amountAugust14 = (parseInt(amountAugust13) + parseInt(somaAugust14));
  var amountAugust15 = (parseInt(amountAugust14) + parseInt(somaAugust15));
  var amountAugust16 = (parseInt(amountAugust15) + parseInt(somaAugust16));
  var amountAugust17 = (parseInt(amountAugust16) + parseInt(somaAugust17));
  var amountAugust18 = (parseInt(amountAugust17) + parseInt(somaAugust18));
  var amountAugust19 = (parseInt(amountAugust18) + parseInt(somaAugust19));
  var amountAugust20 = (parseInt(amountAugust19) + parseInt(somaAugust20));
  var amountAugust21 = (parseInt(amountAugust20) + parseInt(somaAugust21));
  var amountAugust22 = (parseInt(amountAugust21) + parseInt(somaAugust22));
  var amountAugust23 = (parseInt(amountAugust22) + parseInt(somaAugust23));
  var amountAugust24 = (parseInt(amountAugust23) + parseInt(somaAugust24));
  var amountAugust25 = (parseInt(amountAugust24) + parseInt(somaAugust25));
  var amountAugust26 = (parseInt(amountAugust25) + parseInt(somaAugust26));
  var amountAugust27 = (parseInt(amountAugust26) + parseInt(somaAugust27));
  var amountAugust28 = (parseInt(amountAugust27) + parseInt(somaAugust28));
  var amountAugust29 = (parseInt(amountAugust28) + parseInt(somaAugust29));
  var amountAugust30 = (parseInt(amountAugust29) + parseInt(somaAugust30));
  var amountAugust31 = (parseInt(amountAugust30) + parseInt(somaAugust31));

  var amountDaysAugust = ([
    amountAugust1.toLocaleFixed(2), amountAugust2.toLocaleFixed(2), amountAugust3.toLocaleFixed(2),
    amountAugust4.toLocaleFixed(2), amountAugust5.toLocaleFixed(2), amountAugust6.toLocaleFixed(2),
    amountAugust7.toLocaleFixed(2), amountAugust8.toLocaleFixed(2), amountAugust9.toLocaleFixed(2),
    amountAugust10.toLocaleFixed(2), amountAugust11.toLocaleFixed(2), amountAugust12.toLocaleFixed(2),
    amountAugust13.toLocaleFixed(2), amountAugust14.toLocaleFixed(2), amountAugust15.toLocaleFixed(2),
    amountAugust16.toLocaleFixed(2), amountAugust17.toLocaleFixed(2), amountAugust18.toLocaleFixed(2),
    amountAugust19.toLocaleFixed(2), amountAugust20.toLocaleFixed(2), amountAugust21.toLocaleFixed(2),
    amountAugust22.toLocaleFixed(2), amountAugust23.toLocaleFixed(2), amountAugust24.toLocaleFixed(2),
    amountAugust25.toLocaleFixed(2), amountAugust26.toLocaleFixed(2), amountAugust27.toLocaleFixed(2),
    amountAugust28.toLocaleFixed(2), amountAugust29.toLocaleFixed(2), amountAugust30.toLocaleFixed(2),
    amountAugust31.toLocaleFixed(2),
  ]);

  var somaDaysAugust = ([
    somaAugust1, somaAugust2, somaAugust3,
    somaAugust4, somaAugust5, somaAugust6,
    somaAugust7, somaAugust8, somaAugust9,
    somaAugust10, somaAugust11, somaAugust12,
    somaAugust13, somaAugust14, somaAugust15,
    somaAugust16, somaAugust17, somaAugust18,
    somaAugust19, somaAugust20, somaAugust21,
    somaAugust22, somaAugust23, somaAugust24,
    somaAugust25, somaAugust26, somaAugust27,
    somaAugust28, somaAugust29, somaAugust30,
    somaAugust31,
  ]);

  var ReceiptsAugust2022ChartJS = ([
    (Number(await getAmount(Receipt, 1, 7, 2022))),
    (Number(await getAmount(Receipt, 2, 7, 2022))),
    (Number(await getAmount(Receipt, 3, 7, 2022))),
    (Number(await getAmount(Receipt, 4, 7, 2022))),
    (Number(await getAmount(Receipt, 5, 7, 2022))),
    (Number(await getAmount(Receipt, 6, 7, 2022))),
    (Number(await getAmount(Receipt, 7, 7, 2022))),
    (Number(await getAmount(Receipt, 8, 7, 2022))),
    (Number(await getAmount(Receipt, 9, 7, 2022))),
    (Number(await getAmount(Receipt, 10, 7, 2022))),
    (Number(await getAmount(Receipt, 11, 7, 2022))),
    (Number(await getAmount(Receipt, 12, 7, 2022))),
    (Number(await getAmount(Receipt, 13, 7, 2022))),
    (Number(await getAmount(Receipt, 14, 7, 2022))),
    (Number(await getAmount(Receipt, 15, 7, 2022))),
    (Number(await getAmount(Receipt, 16, 7, 2022))),
    (Number(await getAmount(Receipt, 17, 7, 2022))),
    (Number(await getAmount(Receipt, 18, 7, 2022))),
    (Number(await getAmount(Receipt, 19, 7, 2022))),
    (Number(await getAmount(Receipt, 20, 7, 2022))),
    (Number(await getAmount(Receipt, 21, 7, 2022))),
    (Number(await getAmount(Receipt, 22, 7, 2022))),
    (Number(await getAmount(Receipt, 23, 7, 2022))),
    (Number(await getAmount(Receipt, 24, 7, 2022))),
    (Number(await getAmount(Receipt, 25, 7, 2022))),
    (Number(await getAmount(Receipt, 26, 7, 2022))),
    (Number(await getAmount(Receipt, 27, 7, 2022))),
    (Number(await getAmount(Receipt, 28, 7, 2022))),
    (Number(await getAmount(Receipt, 29, 7, 2022))),
    (Number(await getAmount(Receipt, 30, 7, 2022))),
    (Number(await getAmount(Receipt, 31, 7, 2022))),
  ]);

  var PaymentsAugust2022ChartJS = ([
    (-Number(await getAmount(Payment, 1, 7, 2022))),
    (-Number(await getAmount(Payment, 2, 7, 2022))),
    (-Number(await getAmount(Payment, 3, 7, 2022))),
    (-Number(await getAmount(Payment, 4, 7, 2022))),
    (-Number(await getAmount(Payment, 5, 7, 2022))),
    (-Number(await getAmount(Payment, 6, 7, 2022))),
    (-Number(await getAmount(Payment, 7, 7, 2022))),
    (-Number(await getAmount(Payment, 8, 7, 2022))),
    (-Number(await getAmount(Payment, 9, 7, 2022))),
    (-Number(await getAmount(Payment, 10, 7, 2022))),
    (-Number(await getAmount(Payment, 11, 7, 2022))),
    (-Number(await getAmount(Payment, 12, 7, 2022))),
    (-Number(await getAmount(Payment, 13, 7, 2022))),
    (-Number(await getAmount(Payment, 14, 7, 2022))),
    (-Number(await getAmount(Payment, 15, 7, 2022))),
    (-Number(await getAmount(Payment, 16, 7, 2022))),
    (-Number(await getAmount(Payment, 17, 7, 2022))),
    (-Number(await getAmount(Payment, 18, 7, 2022))),
    (-Number(await getAmount(Payment, 19, 7, 2022))),
    (-Number(await getAmount(Payment, 20, 7, 2022))),
    (-Number(await getAmount(Payment, 21, 7, 2022))),
    (-Number(await getAmount(Payment, 22, 7, 2022))),
    (-Number(await getAmount(Payment, 23, 7, 2022))),
    (-Number(await getAmount(Payment, 24, 7, 2022))),
    (-Number(await getAmount(Payment, 25, 7, 2022))),
    (-Number(await getAmount(Payment, 26, 7, 2022))),
    (-Number(await getAmount(Payment, 27, 7, 2022))),
    (-Number(await getAmount(Payment, 28, 7, 2022))),
    (-Number(await getAmount(Payment, 29, 7, 2022))),
    (-Number(await getAmount(Payment, 30, 7, 2022))),
    (-Number(await getAmount(Payment, 31, 7, 2022))),
  ]);

  /////////////////////////////////////////////////////////Setembro
  //filtragem de dados, por peridodo que eles foram adicionados no (getAmount)
  ///////////////////////////////////////getAmount

  var ReceiptsSeptember2022 = ([
    (Number(await getAmount(Receipt, 1, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 2, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 3, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 4, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 5, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 6, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 7, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 8, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 9, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 10, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 11, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 12, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 13, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 14, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 15, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 16, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 17, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 18, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 19, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 20, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 21, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 22, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 23, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 24, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 25, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 26, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 27, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 28, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 29, 8, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 30, 8, 2022))).toLocaleFixed(2),

  ]);

  var PaymentsSeptember2022 = ([
    (-Number(await getAmount(Payment, 1, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 2, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 3, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 4, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 5, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 6, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 7, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 8, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 9, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 10, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 11, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 12, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 13, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 14, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 15, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 16, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 17, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 18, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 19, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 20, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 21, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 22, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 23, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 24, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 25, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 26, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 27, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 28, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 29, 8, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 30, 8, 2022))).toLocaleFixed(2),

  ]);

  var somaSeptember1 = (Number(await getAmount(Receipt, 1, 8, 2022)) - Number(await getAmount(Payment, 1, 8, 2022)));
  var somaSeptember2 = (Number(await getAmount(Receipt, 2, 8, 2022)) - Number(await getAmount(Payment, 2, 8, 2022)));
  var somaSeptember3 = (Number(await getAmount(Receipt, 3, 8, 2022)) - Number(await getAmount(Payment, 3, 8, 2022)));
  var somaSeptember4 = (Number(await getAmount(Receipt, 4, 8, 2022)) - Number(await getAmount(Payment, 4, 8, 2022)));
  var somaSeptember5 = (Number(await getAmount(Receipt, 5, 8, 2022)) - Number(await getAmount(Payment, 5, 8, 2022)));
  var somaSeptember6 = (Number(await getAmount(Receipt, 6, 8, 2022)) - Number(await getAmount(Payment, 6, 8, 2022)));
  var somaSeptember7 = (Number(await getAmount(Receipt, 7, 8, 2022)) - Number(await getAmount(Payment, 7, 8, 2022)));
  var somaSeptember8 = (Number(await getAmount(Receipt, 8, 8, 2022)) - Number(await getAmount(Payment, 8, 8, 2022)));
  var somaSeptember9 = (Number(await getAmount(Receipt, 9, 8, 2022)) - Number(await getAmount(Payment, 9, 8, 2022)));
  var somaSeptember10 = (Number(await getAmount(Receipt, 10, 8, 2022)) - Number(await getAmount(Payment, 10, 8, 2022)));
  var somaSeptember11 = (Number(await getAmount(Receipt, 11, 8, 2022)) - Number(await getAmount(Payment, 11, 8, 2022)));
  var somaSeptember12 = (Number(await getAmount(Receipt, 12, 8, 2022)) - Number(await getAmount(Payment, 12, 8, 2022)));
  var somaSeptember13 = (Number(await getAmount(Receipt, 13, 8, 2022)) - Number(await getAmount(Payment, 13, 8, 2022)));
  var somaSeptember14 = (Number(await getAmount(Receipt, 14, 8, 2022)) - Number(await getAmount(Payment, 14, 8, 2022)));
  var somaSeptember15 = (Number(await getAmount(Receipt, 15, 8, 2022)) - Number(await getAmount(Payment, 15, 8, 2022)));
  var somaSeptember16 = (Number(await getAmount(Receipt, 16, 8, 2022)) - Number(await getAmount(Payment, 16, 8, 2022)));
  var somaSeptember17 = (Number(await getAmount(Receipt, 17, 8, 2022)) - Number(await getAmount(Payment, 17, 8, 2022)));
  var somaSeptember18 = (Number(await getAmount(Receipt, 18, 8, 2022)) - Number(await getAmount(Payment, 18, 8, 2022)));
  var somaSeptember19 = (Number(await getAmount(Receipt, 19, 8, 2022)) - Number(await getAmount(Payment, 19, 8, 2022)));
  var somaSeptember20 = (Number(await getAmount(Receipt, 20, 8, 2022)) - Number(await getAmount(Payment, 20, 8, 2022)));
  var somaSeptember21 = (Number(await getAmount(Receipt, 21, 8, 2022)) - Number(await getAmount(Payment, 21, 8, 2022)));
  var somaSeptember22 = (Number(await getAmount(Receipt, 22, 8, 2022)) - Number(await getAmount(Payment, 22, 8, 2022)));
  var somaSeptember23 = (Number(await getAmount(Receipt, 23, 8, 2022)) - Number(await getAmount(Payment, 23, 8, 2022)));
  var somaSeptember24 = (Number(await getAmount(Receipt, 24, 8, 2022)) - Number(await getAmount(Payment, 24, 8, 2022)));
  var somaSeptember25 = (Number(await getAmount(Receipt, 25, 8, 2022)) - Number(await getAmount(Payment, 25, 8, 2022)));
  var somaSeptember26 = (Number(await getAmount(Receipt, 26, 8, 2022)) - Number(await getAmount(Payment, 26, 8, 2022)));
  var somaSeptember27 = (Number(await getAmount(Receipt, 27, 8, 2022)) - Number(await getAmount(Payment, 27, 8, 2022)));
  var somaSeptember28 = (Number(await getAmount(Receipt, 28, 8, 2022)) - Number(await getAmount(Payment, 28, 8, 2022)));
  var somaSeptember29 = (Number(await getAmount(Receipt, 29, 8, 2022)) - Number(await getAmount(Payment, 29, 8, 2022)));
  var somaSeptember30 = (Number(await getAmount(Receipt, 30, 8, 2022)) - Number(await getAmount(Payment, 30, 8, 2022)));
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  var amountSeptember1 = somaSeptember1;
  var amountSeptember2 = (parseInt(somaSeptember1) + parseInt(somaSeptember2));
  var amountSeptember3 = (parseInt(amountSeptember2) + parseInt(somaSeptember3));
  var amountSeptember4 = (parseInt(amountSeptember3) + parseInt(somaSeptember4));
  var amountSeptember5 = (parseInt(amountSeptember4) + parseInt(somaSeptember5));
  var amountSeptember6 = (parseInt(amountSeptember5) + parseInt(somaSeptember6));
  var amountSeptember7 = (parseInt(amountSeptember6) + parseInt(somaSeptember7));
  var amountSeptember8 = (parseInt(amountSeptember7) + parseInt(somaSeptember8));
  var amountSeptember9 = (parseInt(amountSeptember8) + parseInt(somaSeptember9));
  var amountSeptember10 = (parseInt(amountSeptember9) + parseInt(somaSeptember10));
  var amountSeptember11 = (parseInt(amountSeptember10) + parseInt(somaSeptember11));
  var amountSeptember12 = (parseInt(amountSeptember11) + parseInt(somaSeptember12));
  var amountSeptember13 = (parseInt(amountSeptember12) + parseInt(somaSeptember13));
  var amountSeptember14 = (parseInt(amountSeptember13) + parseInt(somaSeptember14));
  var amountSeptember15 = (parseInt(amountSeptember14) + parseInt(somaSeptember15));
  var amountSeptember16 = (parseInt(amountSeptember15) + parseInt(somaSeptember16));
  var amountSeptember17 = (parseInt(amountSeptember16) + parseInt(somaSeptember17));
  var amountSeptember18 = (parseInt(amountSeptember17) + parseInt(somaSeptember18));
  var amountSeptember19 = (parseInt(amountSeptember18) + parseInt(somaSeptember19));
  var amountSeptember20 = (parseInt(amountSeptember19) + parseInt(somaSeptember20));
  var amountSeptember21 = (parseInt(amountSeptember20) + parseInt(somaSeptember21));
  var amountSeptember22 = (parseInt(amountSeptember21) + parseInt(somaSeptember22));
  var amountSeptember23 = (parseInt(amountSeptember22) + parseInt(somaSeptember23));
  var amountSeptember24 = (parseInt(amountSeptember23) + parseInt(somaSeptember24));
  var amountSeptember25 = (parseInt(amountSeptember24) + parseInt(somaSeptember25));
  var amountSeptember26 = (parseInt(amountSeptember25) + parseInt(somaSeptember26));
  var amountSeptember27 = (parseInt(amountSeptember26) + parseInt(somaSeptember27));
  var amountSeptember28 = (parseInt(amountSeptember27) + parseInt(somaSeptember28));
  var amountSeptember29 = (parseInt(amountSeptember28) + parseInt(somaSeptember29));
  var amountSeptember30 = (parseInt(amountSeptember29) + parseInt(somaSeptember30));


  var amountDaysSeptember = ([
    amountSeptember1.toLocaleFixed(2), amountSeptember2.toLocaleFixed(2), amountSeptember3.toLocaleFixed(2),
    amountSeptember4.toLocaleFixed(2), amountSeptember5.toLocaleFixed(2), amountSeptember6.toLocaleFixed(2),
    amountSeptember7.toLocaleFixed(2), amountSeptember8.toLocaleFixed(2), amountSeptember9.toLocaleFixed(2),
    amountSeptember10.toLocaleFixed(2), amountSeptember11.toLocaleFixed(2), amountSeptember12.toLocaleFixed(2),
    amountSeptember13.toLocaleFixed(2), amountSeptember14.toLocaleFixed(2), amountSeptember15.toLocaleFixed(2),
    amountSeptember16.toLocaleFixed(2), amountSeptember17.toLocaleFixed(2), amountSeptember18.toLocaleFixed(2),
    amountSeptember19.toLocaleFixed(2), amountSeptember20.toLocaleFixed(2), amountSeptember21.toLocaleFixed(2),
    amountSeptember22.toLocaleFixed(2), amountSeptember23.toLocaleFixed(2), amountSeptember24.toLocaleFixed(2),
    amountSeptember25.toLocaleFixed(2), amountSeptember26.toLocaleFixed(2), amountSeptember27.toLocaleFixed(2),
    amountSeptember28.toLocaleFixed(2), amountSeptember29.toLocaleFixed(2), amountSeptember30.toLocaleFixed(2),

  ]);

  var somaDaysSeptember = ([
    somaSeptember1, somaSeptember2, somaSeptember3,
    somaSeptember4, somaSeptember5, somaSeptember6,
    somaSeptember7, somaSeptember8, somaSeptember9,
    somaSeptember10, somaSeptember11, somaSeptember12,
    somaSeptember13, somaSeptember14, somaSeptember15,
    somaSeptember16, somaSeptember17, somaSeptember18,
    somaSeptember19, somaSeptember20, somaSeptember21,
    somaSeptember22, somaSeptember23, somaSeptember24,
    somaSeptember25, somaSeptember26, somaSeptember27,
    somaSeptember28, somaSeptember29, somaSeptember30,

  ]);

  var ReceiptsSeptember2022ChartJS = ([
    (Number(await getAmount(Receipt, 1, 8, 2022))),
    (Number(await getAmount(Receipt, 2, 8, 2022))),
    (Number(await getAmount(Receipt, 3, 8, 2022))),
    (Number(await getAmount(Receipt, 4, 8, 2022))),
    (Number(await getAmount(Receipt, 5, 8, 2022))),
    (Number(await getAmount(Receipt, 6, 8, 2022))),
    (Number(await getAmount(Receipt, 7, 8, 2022))),
    (Number(await getAmount(Receipt, 8, 8, 2022))),
    (Number(await getAmount(Receipt, 9, 8, 2022))),
    (Number(await getAmount(Receipt, 10, 8, 2022))),
    (Number(await getAmount(Receipt, 11, 8, 2022))),
    (Number(await getAmount(Receipt, 12, 8, 2022))),
    (Number(await getAmount(Receipt, 13, 8, 2022))),
    (Number(await getAmount(Receipt, 14, 8, 2022))),
    (Number(await getAmount(Receipt, 15, 8, 2022))),
    (Number(await getAmount(Receipt, 16, 8, 2022))),
    (Number(await getAmount(Receipt, 17, 8, 2022))),
    (Number(await getAmount(Receipt, 18, 8, 2022))),
    (Number(await getAmount(Receipt, 19, 8, 2022))),
    (Number(await getAmount(Receipt, 20, 8, 2022))),
    (Number(await getAmount(Receipt, 21, 8, 2022))),
    (Number(await getAmount(Receipt, 22, 8, 2022))),
    (Number(await getAmount(Receipt, 23, 8, 2022))),
    (Number(await getAmount(Receipt, 24, 8, 2022))),
    (Number(await getAmount(Receipt, 25, 8, 2022))),
    (Number(await getAmount(Receipt, 26, 8, 2022))),
    (Number(await getAmount(Receipt, 27, 8, 2022))),
    (Number(await getAmount(Receipt, 28, 8, 2022))),
    (Number(await getAmount(Receipt, 29, 8, 2022))),
    (Number(await getAmount(Receipt, 30, 8, 2022))),
  ]);

  var PaymentsSeptember2022ChartJS = ([
    (-Number(await getAmount(Payment, 1, 8, 2022))),
    (-Number(await getAmount(Payment, 2, 8, 2022))),
    (-Number(await getAmount(Payment, 3, 8, 2022))),
    (-Number(await getAmount(Payment, 4, 8, 2022))),
    (-Number(await getAmount(Payment, 5, 8, 2022))),
    (-Number(await getAmount(Payment, 6, 8, 2022))),
    (-Number(await getAmount(Payment, 7, 8, 2022))),
    (-Number(await getAmount(Payment, 8, 8, 2022))),
    (-Number(await getAmount(Payment, 9, 8, 2022))),
    (-Number(await getAmount(Payment, 10, 8, 2022))),
    (-Number(await getAmount(Payment, 11, 8, 2022))),
    (-Number(await getAmount(Payment, 12, 8, 2022))),
    (-Number(await getAmount(Payment, 13, 8, 2022))),
    (-Number(await getAmount(Payment, 14, 8, 2022))),
    (-Number(await getAmount(Payment, 15, 8, 2022))),
    (-Number(await getAmount(Payment, 16, 8, 2022))),
    (-Number(await getAmount(Payment, 17, 8, 2022))),
    (-Number(await getAmount(Payment, 18, 8, 2022))),
    (-Number(await getAmount(Payment, 19, 8, 2022))),
    (-Number(await getAmount(Payment, 20, 8, 2022))),
    (-Number(await getAmount(Payment, 21, 8, 2022))),
    (-Number(await getAmount(Payment, 22, 8, 2022))),
    (-Number(await getAmount(Payment, 23, 8, 2022))),
    (-Number(await getAmount(Payment, 24, 8, 2022))),
    (-Number(await getAmount(Payment, 25, 8, 2022))),
    (-Number(await getAmount(Payment, 26, 8, 2022))),
    (-Number(await getAmount(Payment, 27, 8, 2022))),
    (-Number(await getAmount(Payment, 28, 8, 2022))),
    (-Number(await getAmount(Payment, 29, 8, 2022))),
    (-Number(await getAmount(Payment, 30, 8, 2022))),

  ]);


  /////////////////////////////////////////////////////////Outubro
  //filtragem de dados, por peridodo que eles foram adicionados no (getAmount)
  ///////////////////////////////////////getAmount

  var ReceiptsOctober2022 = ([
    (Number(await getAmount(Receipt, 1, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 2, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 3, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 4, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 5, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 6, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 7, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 8, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 9, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 10, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 11, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 12, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 13, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 14, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 15, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 16, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 17, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 18, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 19, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 20, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 21, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 22, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 23, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 24, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 25, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 26, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 27, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 28, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 29, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 30, 9, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 31, 9, 2022))).toLocaleFixed(2),
  ]);

  var PaymentsOctober2022 = ([
    (-Number(await getAmount(Payment, 1, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 2, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 3, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 4, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 5, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 6, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 7, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 8, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 9, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 10, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 11, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 12, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 13, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 14, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 15, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 16, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 17, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 18, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 19, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 20, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 21, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 22, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 23, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 24, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 25, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 26, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 27, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 28, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 29, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 30, 9, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 31, 9, 2022))).toLocaleFixed(2),
  ]);

  var somaOctober1 = (Number(await getAmount(Receipt, 1, 9, 2022)) - Number(await getAmount(Payment, 1, 9, 2022)));
  var somaOctober2 = (Number(await getAmount(Receipt, 2, 9, 2022)) - Number(await getAmount(Payment, 2, 9, 2022)));
  var somaOctober3 = (Number(await getAmount(Receipt, 3, 9, 2022)) - Number(await getAmount(Payment, 3, 9, 2022)));
  var somaOctober4 = (Number(await getAmount(Receipt, 4, 9, 2022)) - Number(await getAmount(Payment, 4, 9, 2022)));
  var somaOctober5 = (Number(await getAmount(Receipt, 5, 9, 2022)) - Number(await getAmount(Payment, 5, 9, 2022)));
  var somaOctober6 = (Number(await getAmount(Receipt, 6, 9, 2022)) - Number(await getAmount(Payment, 6, 9, 2022)));
  var somaOctober7 = (Number(await getAmount(Receipt, 7, 9, 2022)) - Number(await getAmount(Payment, 7, 9, 2022)));
  var somaOctober8 = (Number(await getAmount(Receipt, 8, 9, 2022)) - Number(await getAmount(Payment, 8, 9, 2022)));
  var somaOctober9 = (Number(await getAmount(Receipt, 9, 9, 2022)) - Number(await getAmount(Payment, 9, 9, 2022)));
  var somaOctober10 = (Number(await getAmount(Receipt, 10, 9, 2022)) - Number(await getAmount(Payment, 10, 9, 2022)));
  var somaOctober11 = (Number(await getAmount(Receipt, 11, 9, 2022)) - Number(await getAmount(Payment, 11, 9, 2022)));
  var somaOctober12 = (Number(await getAmount(Receipt, 12, 9, 2022)) - Number(await getAmount(Payment, 12, 9, 2022)));
  var somaOctober13 = (Number(await getAmount(Receipt, 13, 9, 2022)) - Number(await getAmount(Payment, 13, 9, 2022)));
  var somaOctober14 = (Number(await getAmount(Receipt, 14, 9, 2022)) - Number(await getAmount(Payment, 14, 9, 2022)));
  var somaOctober15 = (Number(await getAmount(Receipt, 15, 9, 2022)) - Number(await getAmount(Payment, 15, 9, 2022)));
  var somaOctober16 = (Number(await getAmount(Receipt, 16, 9, 2022)) - Number(await getAmount(Payment, 16, 9, 2022)));
  var somaOctober17 = (Number(await getAmount(Receipt, 17, 9, 2022)) - Number(await getAmount(Payment, 17, 9, 2022)));
  var somaOctober18 = (Number(await getAmount(Receipt, 18, 9, 2022)) - Number(await getAmount(Payment, 18, 9, 2022)));
  var somaOctober19 = (Number(await getAmount(Receipt, 19, 9, 2022)) - Number(await getAmount(Payment, 19, 9, 2022)));
  var somaOctober20 = (Number(await getAmount(Receipt, 20, 9, 2022)) - Number(await getAmount(Payment, 20, 9, 2022)));
  var somaOctober21 = (Number(await getAmount(Receipt, 21, 9, 2022)) - Number(await getAmount(Payment, 21, 9, 2022)));
  var somaOctober22 = (Number(await getAmount(Receipt, 22, 9, 2022)) - Number(await getAmount(Payment, 22, 9, 2022)));
  var somaOctober23 = (Number(await getAmount(Receipt, 23, 9, 2022)) - Number(await getAmount(Payment, 23, 9, 2022)));
  var somaOctober24 = (Number(await getAmount(Receipt, 24, 9, 2022)) - Number(await getAmount(Payment, 24, 9, 2022)));
  var somaOctober25 = (Number(await getAmount(Receipt, 25, 9, 2022)) - Number(await getAmount(Payment, 25, 9, 2022)));
  var somaOctober26 = (Number(await getAmount(Receipt, 26, 9, 2022)) - Number(await getAmount(Payment, 26, 9, 2022)));
  var somaOctober27 = (Number(await getAmount(Receipt, 27, 9, 2022)) - Number(await getAmount(Payment, 27, 9, 2022)));
  var somaOctober28 = (Number(await getAmount(Receipt, 28, 9, 2022)) - Number(await getAmount(Payment, 28, 9, 2022)));
  var somaOctober29 = (Number(await getAmount(Receipt, 29, 9, 2022)) - Number(await getAmount(Payment, 29, 9, 2022)));
  var somaOctober30 = (Number(await getAmount(Receipt, 30, 9, 2022)) - Number(await getAmount(Payment, 30, 9, 2022)));
  var somaOctober31 = (Number(await getAmount(Receipt, 31, 9, 2022)) - Number(await getAmount(Payment, 31, 9, 2022)));

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  var amountOctober1 = somaOctober1;
  var amountOctober2 = (parseInt(somaOctober1) + parseInt(somaOctober2));
  var amountOctober3 = (parseInt(amountOctober2) + parseInt(somaOctober3));
  var amountOctober4 = (parseInt(amountOctober3) + parseInt(somaOctober4));
  var amountOctober5 = (parseInt(amountOctober4) + parseInt(somaOctober5));
  var amountOctober6 = (parseInt(amountOctober5) + parseInt(somaOctober6));
  var amountOctober7 = (parseInt(amountOctober6) + parseInt(somaOctober7));
  var amountOctober8 = (parseInt(amountOctober7) + parseInt(somaOctober8));
  var amountOctober9 = (parseInt(amountOctober8) + parseInt(somaOctober9));
  var amountOctober10 = (parseInt(amountOctober9) + parseInt(somaOctober10));
  var amountOctober11 = (parseInt(amountOctober10) + parseInt(somaOctober11));
  var amountOctober12 = (parseInt(amountOctober11) + parseInt(somaOctober12));
  var amountOctober13 = (parseInt(amountOctober12) + parseInt(somaOctober13));
  var amountOctober14 = (parseInt(amountOctober13) + parseInt(somaOctober14));
  var amountOctober15 = (parseInt(amountOctober14) + parseInt(somaOctober15));
  var amountOctober16 = (parseInt(amountOctober15) + parseInt(somaOctober16));
  var amountOctober17 = (parseInt(amountOctober16) + parseInt(somaOctober17));
  var amountOctober18 = (parseInt(amountOctober17) + parseInt(somaOctober18));
  var amountOctober19 = (parseInt(amountOctober18) + parseInt(somaOctober19));
  var amountOctober20 = (parseInt(amountOctober19) + parseInt(somaOctober20));
  var amountOctober21 = (parseInt(amountOctober20) + parseInt(somaOctober21));
  var amountOctober22 = (parseInt(amountOctober21) + parseInt(somaOctober22));
  var amountOctober23 = (parseInt(amountOctober22) + parseInt(somaOctober23));
  var amountOctober24 = (parseInt(amountOctober23) + parseInt(somaOctober24));
  var amountOctober25 = (parseInt(amountOctober24) + parseInt(somaOctober25));
  var amountOctober26 = (parseInt(amountOctober25) + parseInt(somaOctober26));
  var amountOctober27 = (parseInt(amountOctober26) + parseInt(somaOctober27));
  var amountOctober28 = (parseInt(amountOctober27) + parseInt(somaOctober28));
  var amountOctober29 = (parseInt(amountOctober28) + parseInt(somaOctober29));
  var amountOctober30 = (parseInt(amountOctober29) + parseInt(somaOctober30));
  var amountOctober31 = (parseInt(amountOctober30) + parseInt(somaOctober31));

  var amountDaysOctober = ([
    amountOctober1.toLocaleFixed(2), amountOctober2.toLocaleFixed(2), amountOctober3.toLocaleFixed(2),
    amountOctober4.toLocaleFixed(2), amountOctober5.toLocaleFixed(2), amountOctober6.toLocaleFixed(2),
    amountOctober7.toLocaleFixed(2), amountOctober8.toLocaleFixed(2), amountOctober9.toLocaleFixed(2),
    amountOctober10.toLocaleFixed(2), amountOctober11.toLocaleFixed(2), amountOctober12.toLocaleFixed(2),
    amountOctober13.toLocaleFixed(2), amountOctober14.toLocaleFixed(2), amountOctober15.toLocaleFixed(2),
    amountOctober16.toLocaleFixed(2), amountOctober17.toLocaleFixed(2), amountOctober18.toLocaleFixed(2),
    amountOctober19.toLocaleFixed(2), amountOctober20.toLocaleFixed(2), amountOctober21.toLocaleFixed(2),
    amountOctober22.toLocaleFixed(2), amountOctober23.toLocaleFixed(2), amountOctober24.toLocaleFixed(2),
    amountOctober25.toLocaleFixed(2), amountOctober26.toLocaleFixed(2), amountOctober27.toLocaleFixed(2),
    amountOctober28.toLocaleFixed(2), amountOctober29.toLocaleFixed(2), amountOctober30.toLocaleFixed(2),
    amountOctober31.toLocaleFixed(2),
  ]);

  var somaDaysOctober = ([
    somaOctober1, somaOctober2, somaOctober3,
    somaOctober4, somaOctober5, somaOctober6,
    somaOctober7, somaOctober8, somaOctober9,
    somaOctober10, somaOctober11, somaOctober12,
    somaOctober13, somaOctober14, somaOctober15,
    somaOctober16, somaOctober17, somaOctober18,
    somaOctober19, somaOctober20, somaOctober21,
    somaOctober22, somaOctober23, somaOctober24,
    somaOctober25, somaOctober26, somaOctober27,
    somaOctober28, somaOctober29, somaOctober30,
    somaOctober31,
  ]);

  var ReceiptsOctober2022ChartJS = ([
    (Number(await getAmount(Receipt, 1, 9, 2022))),
    (Number(await getAmount(Receipt, 2, 9, 2022))),
    (Number(await getAmount(Receipt, 3, 9, 2022))),
    (Number(await getAmount(Receipt, 4, 9, 2022))),
    (Number(await getAmount(Receipt, 5, 9, 2022))),
    (Number(await getAmount(Receipt, 6, 9, 2022))),
    (Number(await getAmount(Receipt, 7, 9, 2022))),
    (Number(await getAmount(Receipt, 8, 9, 2022))),
    (Number(await getAmount(Receipt, 9, 9, 2022))),
    (Number(await getAmount(Receipt, 10, 9, 2022))),
    (Number(await getAmount(Receipt, 11, 9, 2022))),
    (Number(await getAmount(Receipt, 12, 9, 2022))),
    (Number(await getAmount(Receipt, 13, 9, 2022))),
    (Number(await getAmount(Receipt, 14, 9, 2022))),
    (Number(await getAmount(Receipt, 15, 9, 2022))),
    (Number(await getAmount(Receipt, 16, 9, 2022))),
    (Number(await getAmount(Receipt, 17, 9, 2022))),
    (Number(await getAmount(Receipt, 18, 9, 2022))),
    (Number(await getAmount(Receipt, 19, 9, 2022))),
    (Number(await getAmount(Receipt, 20, 9, 2022))),
    (Number(await getAmount(Receipt, 21, 9, 2022))),
    (Number(await getAmount(Receipt, 22, 9, 2022))),
    (Number(await getAmount(Receipt, 23, 9, 2022))),
    (Number(await getAmount(Receipt, 24, 9, 2022))),
    (Number(await getAmount(Receipt, 25, 9, 2022))),
    (Number(await getAmount(Receipt, 26, 9, 2022))),
    (Number(await getAmount(Receipt, 27, 9, 2022))),
    (Number(await getAmount(Receipt, 28, 9, 2022))),
    (Number(await getAmount(Receipt, 29, 9, 2022))),
    (Number(await getAmount(Receipt, 30, 9, 2022))),
    (Number(await getAmount(Receipt, 31, 9, 2022))),
  ]);

  var PaymentsOctober2022ChartJS = ([
    (-Number(await getAmount(Payment, 1, 9, 2022))),
    (-Number(await getAmount(Payment, 2, 9, 2022))),
    (-Number(await getAmount(Payment, 3, 9, 2022))),
    (-Number(await getAmount(Payment, 4, 9, 2022))),
    (-Number(await getAmount(Payment, 5, 9, 2022))),
    (-Number(await getAmount(Payment, 6, 9, 2022))),
    (-Number(await getAmount(Payment, 7, 9, 2022))),
    (-Number(await getAmount(Payment, 8, 9, 2022))),
    (-Number(await getAmount(Payment, 9, 9, 2022))),
    (-Number(await getAmount(Payment, 10, 9, 2022))),
    (-Number(await getAmount(Payment, 11, 9, 2022))),
    (-Number(await getAmount(Payment, 12, 9, 2022))),
    (-Number(await getAmount(Payment, 13, 9, 2022))),
    (-Number(await getAmount(Payment, 14, 9, 2022))),
    (-Number(await getAmount(Payment, 15, 9, 2022))),
    (-Number(await getAmount(Payment, 16, 9, 2022))),
    (-Number(await getAmount(Payment, 17, 9, 2022))),
    (-Number(await getAmount(Payment, 18, 9, 2022))),
    (-Number(await getAmount(Payment, 19, 9, 2022))),
    (-Number(await getAmount(Payment, 20, 9, 2022))),
    (-Number(await getAmount(Payment, 21, 9, 2022))),
    (-Number(await getAmount(Payment, 22, 9, 2022))),
    (-Number(await getAmount(Payment, 23, 9, 2022))),
    (-Number(await getAmount(Payment, 24, 9, 2022))),
    (-Number(await getAmount(Payment, 25, 9, 2022))),
    (-Number(await getAmount(Payment, 26, 9, 2022))),
    (-Number(await getAmount(Payment, 27, 9, 2022))),
    (-Number(await getAmount(Payment, 28, 9, 2022))),
    (-Number(await getAmount(Payment, 29, 9, 2022))),
    (-Number(await getAmount(Payment, 30, 9, 2022))),
    (-Number(await getAmount(Payment, 31, 9, 2022))),
  ]);
  /////////////////////////////////////////////////////////Novembro
  //filtragem de dados, por peridodo que eles foram adicionados no (getAmount)
  ///////////////////////////////////////getAmount

  var ReceiptsNovember2022 = ([
    (Number(await getAmount(Receipt, 1, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 2, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 3, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 4, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 5, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 6, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 7, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 8, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 9, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 10, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 11, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 12, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 13, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 14, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 15, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 16, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 17, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 18, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 19, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 20, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 21, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 22, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 23, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 24, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 25, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 26, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 27, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 28, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 29, 10, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 30, 10, 2022))).toLocaleFixed(2),
    //(Number(await getAmount(Receipt, 31, 10, 2022))).toLocaleFixed(2),
  ]);

  var PaymentsNovember2022 = ([
    (-Number(await getAmount(Payment, 1, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 2, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 3, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 4, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 5, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 6, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 7, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 8, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 9, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 10, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 11, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 12, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 13, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 14, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 15, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 16, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 17, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 18, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 19, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 20, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 21, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 22, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 23, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 24, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 25, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 26, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 27, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 28, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 29, 10, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 30, 10, 2022))).toLocaleFixed(2),
    //(-Number(await getAmount(Payment, 31, 10, 2022))).toLocaleFixed(2),
  ]);

  var somaNovember1 = (Number(await getAmount(Receipt, 1, 10, 2022)) - Number(await getAmount(Payment, 1, 10, 2022)));
  var somaNovember2 = (Number(await getAmount(Receipt, 2, 10, 2022)) - Number(await getAmount(Payment, 2, 10, 2022)));
  var somaNovember3 = (Number(await getAmount(Receipt, 3, 10, 2022)) - Number(await getAmount(Payment, 3, 10, 2022)));
  var somaNovember4 = (Number(await getAmount(Receipt, 4, 10, 2022)) - Number(await getAmount(Payment, 4, 10, 2022)));
  var somaNovember5 = (Number(await getAmount(Receipt, 5, 10, 2022)) - Number(await getAmount(Payment, 5, 10, 2022)));
  var somaNovember6 = (Number(await getAmount(Receipt, 6, 10, 2022)) - Number(await getAmount(Payment, 6, 10, 2022)));
  var somaNovember7 = (Number(await getAmount(Receipt, 7, 10, 2022)) - Number(await getAmount(Payment, 7, 10, 2022)));
  var somaNovember8 = (Number(await getAmount(Receipt, 8, 10, 2022)) - Number(await getAmount(Payment, 8, 10, 2022)));
  var somaNovember9 = (Number(await getAmount(Receipt, 9, 10, 2022)) - Number(await getAmount(Payment, 9, 10, 2022)));
  var somaNovember10 = (Number(await getAmount(Receipt, 10, 10, 2022)) - Number(await getAmount(Payment, 10, 10, 2022)));
  var somaNovember11 = (Number(await getAmount(Receipt, 11, 10, 2022)) - Number(await getAmount(Payment, 11, 10, 2022)));
  var somaNovember12 = (Number(await getAmount(Receipt, 12, 10, 2022)) - Number(await getAmount(Payment, 12, 10, 2022)));
  var somaNovember13 = (Number(await getAmount(Receipt, 13, 10, 2022)) - Number(await getAmount(Payment, 13, 10, 2022)));
  var somaNovember14 = (Number(await getAmount(Receipt, 14, 10, 2022)) - Number(await getAmount(Payment, 14, 10, 2022)));
  var somaNovember15 = (Number(await getAmount(Receipt, 15, 10, 2022)) - Number(await getAmount(Payment, 15, 10, 2022)));
  var somaNovember16 = (Number(await getAmount(Receipt, 16, 10, 2022)) - Number(await getAmount(Payment, 16, 10, 2022)));
  var somaNovember17 = (Number(await getAmount(Receipt, 17, 10, 2022)) - Number(await getAmount(Payment, 17, 10, 2022)));
  var somaNovember18 = (Number(await getAmount(Receipt, 18, 10, 2022)) - Number(await getAmount(Payment, 18, 10, 2022)));
  var somaNovember19 = (Number(await getAmount(Receipt, 19, 10, 2022)) - Number(await getAmount(Payment, 19, 10, 2022)));
  var somaNovember20 = (Number(await getAmount(Receipt, 20, 10, 2022)) - Number(await getAmount(Payment, 20, 10, 2022)));
  var somaNovember21 = (Number(await getAmount(Receipt, 21, 10, 2022)) - Number(await getAmount(Payment, 21, 10, 2022)));
  var somaNovember22 = (Number(await getAmount(Receipt, 22, 10, 2022)) - Number(await getAmount(Payment, 22, 10, 2022)));
  var somaNovember23 = (Number(await getAmount(Receipt, 23, 10, 2022)) - Number(await getAmount(Payment, 23, 10, 2022)));
  var somaNovember24 = (Number(await getAmount(Receipt, 24, 10, 2022)) - Number(await getAmount(Payment, 24, 10, 2022)));
  var somaNovember25 = (Number(await getAmount(Receipt, 25, 10, 2022)) - Number(await getAmount(Payment, 25, 10, 2022)));
  var somaNovember26 = (Number(await getAmount(Receipt, 26, 10, 2022)) - Number(await getAmount(Payment, 26, 10, 2022)));
  var somaNovember27 = (Number(await getAmount(Receipt, 27, 10, 2022)) - Number(await getAmount(Payment, 27, 10, 2022)));
  var somaNovember28 = (Number(await getAmount(Receipt, 28, 10, 2022)) - Number(await getAmount(Payment, 28, 10, 2022)));
  var somaNovember29 = (Number(await getAmount(Receipt, 29, 10, 2022)) - Number(await getAmount(Payment, 29, 10, 2022)));
  var somaNovember30 = (Number(await getAmount(Receipt, 30, 10, 2022)) - Number(await getAmount(Payment, 30, 10, 2022)));
  //var somaNovember31 = (Number(await getAmount(Receipt, 31, 10, 2022)) - Number(await getAmount(Payment, 31, 10, 2022)));

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  var amountNovember1 = somaNovember1;
  var amountNovember2 = (parseInt(somaNovember1) + parseInt(somaNovember2));
  var amountNovember3 = (parseInt(amountNovember2) + parseInt(somaNovember3));
  var amountNovember4 = (parseInt(amountNovember3) + parseInt(somaNovember4));
  var amountNovember5 = (parseInt(amountNovember4) + parseInt(somaNovember5));
  var amountNovember6 = (parseInt(amountNovember5) + parseInt(somaNovember6));
  var amountNovember7 = (parseInt(amountNovember6) + parseInt(somaNovember7));
  var amountNovember8 = (parseInt(amountNovember7) + parseInt(somaNovember8));
  var amountNovember9 = (parseInt(amountNovember8) + parseInt(somaNovember9));
  var amountNovember10 = (parseInt(amountNovember9) + parseInt(somaNovember10));
  var amountNovember11 = (parseInt(amountNovember10) + parseInt(somaNovember11));
  var amountNovember12 = (parseInt(amountNovember11) + parseInt(somaNovember12));
  var amountNovember13 = (parseInt(amountNovember12) + parseInt(somaNovember13));
  var amountNovember14 = (parseInt(amountNovember13) + parseInt(somaNovember14));
  var amountNovember15 = (parseInt(amountNovember14) + parseInt(somaNovember15));
  var amountNovember16 = (parseInt(amountNovember15) + parseInt(somaNovember16));
  var amountNovember17 = (parseInt(amountNovember16) + parseInt(somaNovember17));
  var amountNovember18 = (parseInt(amountNovember17) + parseInt(somaNovember18));
  var amountNovember19 = (parseInt(amountNovember18) + parseInt(somaNovember19));
  var amountNovember20 = (parseInt(amountNovember19) + parseInt(somaNovember20));
  var amountNovember21 = (parseInt(amountNovember20) + parseInt(somaNovember21));
  var amountNovember22 = (parseInt(amountNovember21) + parseInt(somaNovember22));
  var amountNovember23 = (parseInt(amountNovember22) + parseInt(somaNovember23));
  var amountNovember24 = (parseInt(amountNovember23) + parseInt(somaNovember24));
  var amountNovember25 = (parseInt(amountNovember24) + parseInt(somaNovember25));
  var amountNovember26 = (parseInt(amountNovember25) + parseInt(somaNovember26));
  var amountNovember27 = (parseInt(amountNovember26) + parseInt(somaNovember27));
  var amountNovember28 = (parseInt(amountNovember27) + parseInt(somaNovember28));
  var amountNovember29 = (parseInt(amountNovember28) + parseInt(somaNovember29));
  var amountNovember30 = (parseInt(amountNovember29) + parseInt(somaNovember30));
  //var amountNovember31 = (parseInt(amountNovember30) + parseInt(somaNovember31));

  var amountDaysNovember = ([
    amountNovember1.toLocaleFixed(2), amountNovember2.toLocaleFixed(2), amountNovember3.toLocaleFixed(2),
    amountNovember4.toLocaleFixed(2), amountNovember5.toLocaleFixed(2), amountNovember6.toLocaleFixed(2),
    amountNovember7.toLocaleFixed(2), amountNovember8.toLocaleFixed(2), amountNovember9.toLocaleFixed(2),
    amountNovember10.toLocaleFixed(2), amountNovember11.toLocaleFixed(2), amountNovember12.toLocaleFixed(2),
    amountNovember13.toLocaleFixed(2), amountNovember14.toLocaleFixed(2), amountNovember15.toLocaleFixed(2),
    amountNovember16.toLocaleFixed(2), amountNovember17.toLocaleFixed(2), amountNovember18.toLocaleFixed(2),
    amountNovember19.toLocaleFixed(2), amountNovember20.toLocaleFixed(2), amountNovember21.toLocaleFixed(2),
    amountNovember22.toLocaleFixed(2), amountNovember23.toLocaleFixed(2), amountNovember24.toLocaleFixed(2),
    amountNovember25.toLocaleFixed(2), amountNovember26.toLocaleFixed(2), amountNovember27.toLocaleFixed(2),
    amountNovember28.toLocaleFixed(2), amountNovember29.toLocaleFixed(2), amountNovember30.toLocaleFixed(2),
    //amountNovember31.toLocaleFixed(2),
  ]);

  var somaDaysNovember = ([
    somaNovember1, somaNovember2, somaNovember3,
    somaNovember4, somaNovember5, somaNovember6,
    somaNovember7, somaNovember8, somaNovember9,
    somaNovember10, somaNovember11, somaNovember12,
    somaNovember13, somaNovember14, somaNovember15,
    somaNovember16, somaNovember17, somaNovember18,
    somaNovember19, somaNovember20, somaNovember21,
    somaNovember22, somaNovember23, somaNovember24,
    somaNovember25, somaNovember26, somaNovember27,
    somaNovember28, somaNovember29, somaNovember30,
    //somaNovember31,
  ]);

  var ReceiptsNovember2022ChartJS = ([
    (Number(await getAmount(Receipt, 1, 10, 2022))),
    (Number(await getAmount(Receipt, 2, 10, 2022))),
    (Number(await getAmount(Receipt, 3, 10, 2022))),
    (Number(await getAmount(Receipt, 4, 10, 2022))),
    (Number(await getAmount(Receipt, 5, 10, 2022))),
    (Number(await getAmount(Receipt, 6, 10, 2022))),
    (Number(await getAmount(Receipt, 7, 10, 2022))),
    (Number(await getAmount(Receipt, 8, 10, 2022))),
    (Number(await getAmount(Receipt, 9, 10, 2022))),
    (Number(await getAmount(Receipt, 10, 10, 2022))),
    (Number(await getAmount(Receipt, 11, 10, 2022))),
    (Number(await getAmount(Receipt, 12, 10, 2022))),
    (Number(await getAmount(Receipt, 13, 10, 2022))),
    (Number(await getAmount(Receipt, 14, 10, 2022))),
    (Number(await getAmount(Receipt, 15, 10, 2022))),
    (Number(await getAmount(Receipt, 16, 10, 2022))),
    (Number(await getAmount(Receipt, 17, 10, 2022))),
    (Number(await getAmount(Receipt, 18, 10, 2022))),
    (Number(await getAmount(Receipt, 19, 10, 2022))),
    (Number(await getAmount(Receipt, 20, 10, 2022))),
    (Number(await getAmount(Receipt, 21, 10, 2022))),
    (Number(await getAmount(Receipt, 22, 10, 2022))),
    (Number(await getAmount(Receipt, 23, 10, 2022))),
    (Number(await getAmount(Receipt, 24, 10, 2022))),
    (Number(await getAmount(Receipt, 25, 10, 2022))),
    (Number(await getAmount(Receipt, 26, 10, 2022))),
    (Number(await getAmount(Receipt, 27, 10, 2022))),
    (Number(await getAmount(Receipt, 28, 10, 2022))),
    (Number(await getAmount(Receipt, 29, 10, 2022))),
    (Number(await getAmount(Receipt, 30, 10, 2022))),
    //(Number(await getAmount(Receipt, 31, 10, 2022))),
  ]);

  var PaymentsNovember2022ChartJS = ([
    (-Number(await getAmount(Payment, 1, 10, 2022))),
    (-Number(await getAmount(Payment, 2, 10, 2022))),
    (-Number(await getAmount(Payment, 3, 10, 2022))),
    (-Number(await getAmount(Payment, 4, 10, 2022))),
    (-Number(await getAmount(Payment, 5, 10, 2022))),
    (-Number(await getAmount(Payment, 6, 10, 2022))),
    (-Number(await getAmount(Payment, 7, 10, 2022))),
    (-Number(await getAmount(Payment, 8, 10, 2022))),
    (-Number(await getAmount(Payment, 9, 10, 2022))),
    (-Number(await getAmount(Payment, 10, 10, 2022))),
    (-Number(await getAmount(Payment, 11, 10, 2022))),
    (-Number(await getAmount(Payment, 12, 10, 2022))),
    (-Number(await getAmount(Payment, 13, 10, 2022))),
    (-Number(await getAmount(Payment, 14, 10, 2022))),
    (-Number(await getAmount(Payment, 15, 10, 2022))),
    (-Number(await getAmount(Payment, 16, 10, 2022))),
    (-Number(await getAmount(Payment, 17, 10, 2022))),
    (-Number(await getAmount(Payment, 18, 10, 2022))),
    (-Number(await getAmount(Payment, 19, 10, 2022))),
    (-Number(await getAmount(Payment, 20, 10, 2022))),
    (-Number(await getAmount(Payment, 21, 10, 2022))),
    (-Number(await getAmount(Payment, 22, 10, 2022))),
    (-Number(await getAmount(Payment, 23, 10, 2022))),
    (-Number(await getAmount(Payment, 24, 10, 2022))),
    (-Number(await getAmount(Payment, 25, 10, 2022))),
    (-Number(await getAmount(Payment, 26, 10, 2022))),
    (-Number(await getAmount(Payment, 27, 10, 2022))),
    (-Number(await getAmount(Payment, 28, 10, 2022))),
    (-Number(await getAmount(Payment, 29, 10, 2022))),
    (-Number(await getAmount(Payment, 30, 10, 2022))),
    //(-Number(await getAmount(Payment, 31, 10, 2022))),
  ]);
  /////////////////////////////////////////////////////////Dezembro
  //filtragem de dados, por peridodo que eles foram adicionados no (getAmount)
  ///////////////////////////////////////getAmount

  var ReceiptsDecember2022 = ([
    (Number(await getAmount(Receipt, 1, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 2, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 3, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 4, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 5, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 6, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 7, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 8, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 9, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 10, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 11, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 12, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 13, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 14, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 15, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 16, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 17, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 18, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 19, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 20, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 21, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 22, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 23, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 24, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 25, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 26, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 27, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 28, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 29, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 30, 11, 2022))).toLocaleFixed(2),
    (Number(await getAmount(Receipt, 31, 11, 2022))).toLocaleFixed(2),
  ]);

  var PaymentsDecember2022 = ([
    (-Number(await getAmount(Payment, 1, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 2, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 3, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 4, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 5, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 6, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 7, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 8, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 9, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 10, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 11, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 12, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 13, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 14, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 15, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 16, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 17, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 18, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 19, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 20, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 21, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 22, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 23, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 24, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 25, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 26, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 27, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 28, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 29, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 30, 11, 2022))).toLocaleFixed(2),
    (-Number(await getAmount(Payment, 31, 11, 2022))).toLocaleFixed(2),
  ]);

  var somaDecember1 = (Number(await getAmount(Receipt, 1, 11, 2022)) - Number(await getAmount(Payment, 1, 11, 2022)));
  var somaDecember2 = (Number(await getAmount(Receipt, 2, 11, 2022)) - Number(await getAmount(Payment, 2, 11, 2022)));
  var somaDecember3 = (Number(await getAmount(Receipt, 3, 11, 2022)) - Number(await getAmount(Payment, 3, 11, 2022)));
  var somaDecember4 = (Number(await getAmount(Receipt, 4, 11, 2022)) - Number(await getAmount(Payment, 4, 11, 2022)));
  var somaDecember5 = (Number(await getAmount(Receipt, 5, 11, 2022)) - Number(await getAmount(Payment, 5, 11, 2022)));
  var somaDecember6 = (Number(await getAmount(Receipt, 6, 11, 2022)) - Number(await getAmount(Payment, 6, 11, 2022)));
  var somaDecember7 = (Number(await getAmount(Receipt, 7, 11, 2022)) - Number(await getAmount(Payment, 7, 11, 2022)));
  var somaDecember8 = (Number(await getAmount(Receipt, 8, 11, 2022)) - Number(await getAmount(Payment, 8, 11, 2022)));
  var somaDecember9 = (Number(await getAmount(Receipt, 9, 11, 2022)) - Number(await getAmount(Payment, 9, 11, 2022)));
  var somaDecember10 = (Number(await getAmount(Receipt, 10, 11, 2022)) - Number(await getAmount(Payment, 10, 11, 2022)));
  var somaDecember11 = (Number(await getAmount(Receipt, 11, 11, 2022)) - Number(await getAmount(Payment, 11, 11, 2022)));
  var somaDecember12 = (Number(await getAmount(Receipt, 12, 11, 2022)) - Number(await getAmount(Payment, 12, 11, 2022)));
  var somaDecember13 = (Number(await getAmount(Receipt, 13, 11, 2022)) - Number(await getAmount(Payment, 13, 11, 2022)));
  var somaDecember14 = (Number(await getAmount(Receipt, 14, 11, 2022)) - Number(await getAmount(Payment, 14, 11, 2022)));
  var somaDecember15 = (Number(await getAmount(Receipt, 15, 11, 2022)) - Number(await getAmount(Payment, 15, 11, 2022)));
  var somaDecember16 = (Number(await getAmount(Receipt, 16, 11, 2022)) - Number(await getAmount(Payment, 16, 11, 2022)));
  var somaDecember17 = (Number(await getAmount(Receipt, 17, 11, 2022)) - Number(await getAmount(Payment, 17, 11, 2022)));
  var somaDecember18 = (Number(await getAmount(Receipt, 18, 11, 2022)) - Number(await getAmount(Payment, 18, 11, 2022)));
  var somaDecember19 = (Number(await getAmount(Receipt, 19, 11, 2022)) - Number(await getAmount(Payment, 19, 11, 2022)));
  var somaDecember20 = (Number(await getAmount(Receipt, 20, 11, 2022)) - Number(await getAmount(Payment, 20, 11, 2022)));
  var somaDecember21 = (Number(await getAmount(Receipt, 21, 11, 2022)) - Number(await getAmount(Payment, 21, 11, 2022)));
  var somaDecember22 = (Number(await getAmount(Receipt, 22, 11, 2022)) - Number(await getAmount(Payment, 22, 11, 2022)));
  var somaDecember23 = (Number(await getAmount(Receipt, 23, 11, 2022)) - Number(await getAmount(Payment, 23, 11, 2022)));
  var somaDecember24 = (Number(await getAmount(Receipt, 24, 11, 2022)) - Number(await getAmount(Payment, 24, 11, 2022)));
  var somaDecember25 = (Number(await getAmount(Receipt, 25, 11, 2022)) - Number(await getAmount(Payment, 25, 11, 2022)));
  var somaDecember26 = (Number(await getAmount(Receipt, 26, 11, 2022)) - Number(await getAmount(Payment, 26, 11, 2022)));
  var somaDecember27 = (Number(await getAmount(Receipt, 27, 11, 2022)) - Number(await getAmount(Payment, 27, 11, 2022)));
  var somaDecember28 = (Number(await getAmount(Receipt, 28, 11, 2022)) - Number(await getAmount(Payment, 28, 11, 2022)));
  var somaDecember29 = (Number(await getAmount(Receipt, 29, 11, 2022)) - Number(await getAmount(Payment, 29, 11, 2022)));
  var somaDecember30 = (Number(await getAmount(Receipt, 30, 11, 2022)) - Number(await getAmount(Payment, 30, 11, 2022)));
  var somaDecember31 = (Number(await getAmount(Receipt, 31, 11, 2022)) - Number(await getAmount(Payment, 31, 11, 2022)));

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  var amountDecember1 = somaDecember1;
  var amountDecember2 = (parseInt(somaDecember1) + parseInt(somaDecember2));
  var amountDecember3 = (parseInt(amountDecember2) + parseInt(somaDecember3));
  var amountDecember4 = (parseInt(amountDecember3) + parseInt(somaDecember4));
  var amountDecember5 = (parseInt(amountDecember4) + parseInt(somaDecember5));
  var amountDecember6 = (parseInt(amountDecember5) + parseInt(somaDecember6));
  var amountDecember7 = (parseInt(amountDecember6) + parseInt(somaDecember7));
  var amountDecember8 = (parseInt(amountDecember7) + parseInt(somaDecember8));
  var amountDecember9 = (parseInt(amountDecember8) + parseInt(somaDecember9));
  var amountDecember10 = (parseInt(amountDecember9) + parseInt(somaDecember10));
  var amountDecember11 = (parseInt(amountDecember10) + parseInt(somaDecember11));
  var amountDecember12 = (parseInt(amountDecember11) + parseInt(somaDecember12));
  var amountDecember13 = (parseInt(amountDecember12) + parseInt(somaDecember13));
  var amountDecember14 = (parseInt(amountDecember13) + parseInt(somaDecember14));
  var amountDecember15 = (parseInt(amountDecember14) + parseInt(somaDecember15));
  var amountDecember16 = (parseInt(amountDecember15) + parseInt(somaDecember16));
  var amountDecember17 = (parseInt(amountDecember16) + parseInt(somaDecember17));
  var amountDecember18 = (parseInt(amountDecember17) + parseInt(somaDecember18));
  var amountDecember19 = (parseInt(amountDecember18) + parseInt(somaDecember19));
  var amountDecember20 = (parseInt(amountDecember19) + parseInt(somaDecember20));
  var amountDecember21 = (parseInt(amountDecember20) + parseInt(somaDecember21));
  var amountDecember22 = (parseInt(amountDecember21) + parseInt(somaDecember22));
  var amountDecember23 = (parseInt(amountDecember22) + parseInt(somaDecember23));
  var amountDecember24 = (parseInt(amountDecember23) + parseInt(somaDecember24));
  var amountDecember25 = (parseInt(amountDecember24) + parseInt(somaDecember25));
  var amountDecember26 = (parseInt(amountDecember25) + parseInt(somaDecember26));
  var amountDecember27 = (parseInt(amountDecember26) + parseInt(somaDecember27));
  var amountDecember28 = (parseInt(amountDecember27) + parseInt(somaDecember28));
  var amountDecember29 = (parseInt(amountDecember28) + parseInt(somaDecember29));
  var amountDecember30 = (parseInt(amountDecember29) + parseInt(somaDecember30));
  var amountDecember31 = (parseInt(amountDecember30) + parseInt(somaDecember31));

  var amountDaysDecember = ([
    amountDecember1.toLocaleFixed(2), amountDecember2.toLocaleFixed(2), amountDecember3.toLocaleFixed(2),
    amountDecember4.toLocaleFixed(2), amountDecember5.toLocaleFixed(2), amountDecember6.toLocaleFixed(2),
    amountDecember7.toLocaleFixed(2), amountDecember8.toLocaleFixed(2), amountDecember9.toLocaleFixed(2),
    amountDecember10.toLocaleFixed(2), amountDecember11.toLocaleFixed(2), amountDecember12.toLocaleFixed(2),
    amountDecember13.toLocaleFixed(2), amountDecember14.toLocaleFixed(2), amountDecember15.toLocaleFixed(2),
    amountDecember16.toLocaleFixed(2), amountDecember17.toLocaleFixed(2), amountDecember18.toLocaleFixed(2),
    amountDecember19.toLocaleFixed(2), amountDecember20.toLocaleFixed(2), amountDecember21.toLocaleFixed(2),
    amountDecember22.toLocaleFixed(2), amountDecember23.toLocaleFixed(2), amountDecember24.toLocaleFixed(2),
    amountDecember25.toLocaleFixed(2), amountDecember26.toLocaleFixed(2), amountDecember27.toLocaleFixed(2),
    amountDecember28.toLocaleFixed(2), amountDecember29.toLocaleFixed(2), amountDecember30.toLocaleFixed(2),
    amountDecember31.toLocaleFixed(2),
  ]);
  var somaDaysDecember = ([
    somaDecember1, somaDecember2, somaDecember3,
    somaDecember4, somaDecember5, somaDecember6,
    somaDecember7, somaDecember8, somaDecember9,
    somaDecember10, somaDecember11, somaDecember12,
    somaDecember13, somaDecember14, somaDecember15,
    somaDecember16, somaDecember17, somaDecember18,
    somaDecember19, somaDecember20, somaDecember21,
    somaDecember22, somaDecember23, somaDecember24,
    somaDecember25, somaDecember26, somaDecember27,
    somaDecember28, somaDecember29, somaDecember30,
    somaDecember31,
  ]);

  var ReceiptsDecember2022ChartJS = ([
    (Number(await getAmount(Receipt, 1, 11, 2022))),
    (Number(await getAmount(Receipt, 2, 11, 2022))),
    (Number(await getAmount(Receipt, 3, 11, 2022))),
    (Number(await getAmount(Receipt, 4, 11, 2022))),
    (Number(await getAmount(Receipt, 5, 11, 2022))),
    (Number(await getAmount(Receipt, 6, 11, 2022))),
    (Number(await getAmount(Receipt, 7, 11, 2022))),
    (Number(await getAmount(Receipt, 8, 11, 2022))),
    (Number(await getAmount(Receipt, 9, 11, 2022))),
    (Number(await getAmount(Receipt, 10, 11, 2022))),
    (Number(await getAmount(Receipt, 11, 11, 2022))),
    (Number(await getAmount(Receipt, 12, 11, 2022))),
    (Number(await getAmount(Receipt, 13, 11, 2022))),
    (Number(await getAmount(Receipt, 14, 11, 2022))),
    (Number(await getAmount(Receipt, 15, 11, 2022))),
    (Number(await getAmount(Receipt, 16, 11, 2022))),
    (Number(await getAmount(Receipt, 17, 11, 2022))),
    (Number(await getAmount(Receipt, 18, 11, 2022))),
    (Number(await getAmount(Receipt, 19, 11, 2022))),
    (Number(await getAmount(Receipt, 20, 11, 2022))),
    (Number(await getAmount(Receipt, 21, 11, 2022))),
    (Number(await getAmount(Receipt, 22, 11, 2022))),
    (Number(await getAmount(Receipt, 23, 11, 2022))),
    (Number(await getAmount(Receipt, 24, 11, 2022))),
    (Number(await getAmount(Receipt, 25, 11, 2022))),
    (Number(await getAmount(Receipt, 26, 11, 2022))),
    (Number(await getAmount(Receipt, 27, 11, 2022))),
    (Number(await getAmount(Receipt, 28, 11, 2022))),
    (Number(await getAmount(Receipt, 29, 11, 2022))),
    (Number(await getAmount(Receipt, 30, 11, 2022))),
    (Number(await getAmount(Receipt, 31, 11, 2022))),
  ]);

  var PaymentsDecember2022ChartJS = ([
    (-Number(await getAmount(Payment, 1, 11, 2022))),
    (-Number(await getAmount(Payment, 2, 11, 2022))),
    (-Number(await getAmount(Payment, 3, 11, 2022))),
    (-Number(await getAmount(Payment, 4, 11, 2022))),
    (-Number(await getAmount(Payment, 5, 11, 2022))),
    (-Number(await getAmount(Payment, 6, 11, 2022))),
    (-Number(await getAmount(Payment, 7, 11, 2022))),
    (-Number(await getAmount(Payment, 8, 11, 2022))),
    (-Number(await getAmount(Payment, 9, 11, 2022))),
    (-Number(await getAmount(Payment, 10, 11, 2022))),
    (-Number(await getAmount(Payment, 11, 11, 2022))),
    (-Number(await getAmount(Payment, 12, 11, 2022))),
    (-Number(await getAmount(Payment, 13, 11, 2022))),
    (-Number(await getAmount(Payment, 14, 11, 2022))),
    (-Number(await getAmount(Payment, 15, 11, 2022))),
    (-Number(await getAmount(Payment, 16, 11, 2022))),
    (-Number(await getAmount(Payment, 17, 11, 2022))),
    (-Number(await getAmount(Payment, 18, 11, 2022))),
    (-Number(await getAmount(Payment, 19, 11, 2022))),
    (-Number(await getAmount(Payment, 20, 11, 2022))),
    (-Number(await getAmount(Payment, 21, 11, 2022))),
    (-Number(await getAmount(Payment, 22, 11, 2022))),
    (-Number(await getAmount(Payment, 23, 11, 2022))),
    (-Number(await getAmount(Payment, 24, 11, 2022))),
    (-Number(await getAmount(Payment, 25, 11, 2022))),
    (-Number(await getAmount(Payment, 26, 11, 2022))),
    (-Number(await getAmount(Payment, 27, 11, 2022))),
    (-Number(await getAmount(Payment, 28, 11, 2022))),
    (-Number(await getAmount(Payment, 29, 11, 2022))),
    (-Number(await getAmount(Payment, 30, 11, 2022))),
    (-Number(await getAmount(Payment, 31, 11, 2022))),
  ]);



  Receipt.findAll({

    include: [{
      model: CategoryReceitas,
    }, {
      model: CategoryOthersReceitas,
    }, {
      model: CategoryFinancialReceitas,
    }, ],
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
      CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
        CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
          CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
            CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
              CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                  CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                    CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                      CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdministrativas) => {
                        CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                          CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
                            CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
                              CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
                                Payment.findAll({
                                    include: [{
                                        model: CategoryDespesasParcelamentosDividas,
                                      },
                                      {
                                        model: CategoryDespesasEmprestimosFinanciamentos,
                                      },
                                      {
                                        model: CategoryDespesasBensImobilizados,
                                      },
                                      {
                                        model: CategoryOutrasDespesas,
                                      },
                                      {
                                        model: CategoryDespesasFinanceiras,
                                      },
                                      {
                                        model: CategoryDespesasDiretoria,
                                      },
                                      {
                                        model: CategoryDespesasVeiculos,
                                      }, {
                                        model: CategoryDespesasImovel,
                                      }, {
                                        model: CategoryDespesasComerciais,
                                      }, {
                                        model: CategoryDespesasAdministrativas,
                                      }, {
                                        model: CategoryDespesasColaboradores,
                                      }, {
                                        model: CategoryDespesasSalariosEncargos,
                                      },
                                      {
                                        model: CategoryDespesasVendasEServicos,
                                      }, {
                                        model: CategoryDespesasImpostos,
                                      },
                                    ],
                                  })
                                  .then((payments) => {
                                    CategoryReceitas.findAll().then((categoriesreceitas) => {
                                      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
                                        CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
                                          CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
                                            res.render("admin/fluxoCaixa/index", {
                                              receipts: receipts,
                                              payments: payments,
                                              categoriesreceita: categoriesreceitas,
                                              categoriesOthersReceita: categoriesOthersReceitas,
                                              categoriesFinancialReceita: categoriesFinancialReceitas,
                                              categoriesDespesasImpostos: categoriesDespesasImpostos,
                                              categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                              categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                              categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                              categoriesDespesasAdministrativas: categoriesDespesasAdministrativas,
                                              categoriesDespesasComerciais: categoriesDespesasComerciais,
                                              categoriesDespesasImoveis: categoriesDespesasImoveis,
                                              categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                              categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                              categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                              categoriesOutrasDespesas: categoriesOutrasDespesas,
                                              categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                              categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                              categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,
                                              categoriesFretesEntregas: categoriesFretesEntregas,
                                              totalPayments: totalPayments,
                                              totalReceipts: totalReceipts,
                                              soma: soma,
                                              thisJanuaryDays,
                                              thisFebruaryDays,
                                              thisMarchDays,
                                              thisAprilDays,
                                              thisMayDays,
                                              thisJuneDays,
                                              thisJulyDays,
                                              thisAugustDays,
                                              thisSeptemberDays,
                                              thisOctoberDays,
                                              thisNovemberDays,
                                              thisDecemberDays,
                                              ReceiptsJanuary2022,
                                              PaymentsJanuary2022,
                                              amountDaysJanuary,
                                              somaDaysJanuary,
                                              ReceiptsJanuary2022ChartJS,
                                              PaymentsJanuary2022ChartJS,
                                              ReceiptsFebruary2022,
                                              PaymentsFebruary2022,
                                              amountDaysFebruary,
                                              somaDaysFebruary,
                                              ReceiptsFebruary2022ChartJS,
                                              PaymentsFebruary2022ChartJS,
                                              ReceiptsMarch2022,
                                              PaymentsMarch2022,
                                              amountDaysMarch,
                                              somaDaysMarch,
                                              ReceiptsMarch2022ChartJS,
                                              PaymentsMarch2022ChartJS,
                                              ReceiptsApril2022,
                                              PaymentsApril2022,
                                              amountDaysApril,
                                              somaDaysApril,
                                              ReceiptsApril2022ChartJS,
                                              PaymentsApril2022ChartJS,
                                              ReceiptsMay2022,
                                              PaymentsMay2022,
                                              amountDaysMay,
                                              somaDaysMay,
                                              ReceiptsMay2022ChartJS,
                                              PaymentsMay2022ChartJS,
                                              ReceiptsJune2022,
                                              PaymentsJune2022,
                                              amountDaysJune,
                                              somaDaysJune,
                                              ReceiptsJune2022ChartJS,
                                              PaymentsJune2022ChartJS,
                                              ReceiptsJuly2022,
                                              PaymentsJuly2022,
                                              amountDaysJuly,
                                              somaDaysJuly,
                                              ReceiptsJuly2022ChartJS,
                                              PaymentsJuly2022ChartJS,
                                              ReceiptsAugust2022,
                                              PaymentsAugust2022,
                                              amountDaysAugust,
                                              somaDaysAugust,
                                              ReceiptsAugust2022ChartJS,
                                              PaymentsAugust2022ChartJS,
                                              ReceiptsSeptember2022,
                                              PaymentsSeptember2022,
                                              amountDaysSeptember,
                                              somaDaysSeptember,
                                              ReceiptsSeptember2022ChartJS,
                                              PaymentsSeptember2022ChartJS,
                                              ReceiptsOctober2022,
                                              PaymentsOctober2022,
                                              amountDaysOctober,
                                              somaDaysOctober,
                                              ReceiptsOctober2022ChartJS,
                                              PaymentsOctober2022ChartJS,
                                              ReceiptsNovember2022,
                                              PaymentsNovember2022,
                                              amountDaysNovember,
                                              somaDaysNovember,
                                              ReceiptsNovember2022ChartJS,
                                              PaymentsNovember2022ChartJS,
                                              ReceiptsDecember2022,
                                              PaymentsDecember2022,
                                              amountDaysDecember,
                                              somaDaysDecember,
                                              ReceiptsDecember2022ChartJS,
                                              PaymentsDecember2022ChartJS,
                                              somaJ,
                                              somaF,
                                              somaMar,
                                              somaAp,
                                              somaMa,
                                              somaJn,
                                              somaJl,
                                              somaAg,
                                              somaSt,
                                              somaOt,
                                              somaNv,
                                              somaDz,
                                              paymentsJ,
                                              paymentsF,
                                              paymentsMar,
                                              paymentsAp,
                                              paymentsMa,
                                              paymentsJn,
                                              paymentsJl,
                                              paymentsAg,
                                              paymentsSt,
                                              paymentsOt,
                                              paymentsNv,
                                              paymentsDz,
                                              receiptsJ,
                                              receiptsF,
                                              receiptsMar,
                                              receiptsAp,
                                              receiptsMa,
                                              receiptsJn,
                                              receiptsJl,
                                              receiptsAg,
                                              receiptsSt,
                                              receiptsOt,
                                              receiptsNv,
                                              receiptsDz,
                                              ////
                                              somaJF,
                                              somaFF,
                                              somaMarF,
                                              somaApF,
                                              somaMaF,
                                              somaJnF,
                                              somaJlF,
                                              somaAgF,
                                              somaStF,
                                              somaOtF,
                                              somaNvF,
                                              somaDzF,
                                              paymentsJF,
                                              paymentsFF,
                                              paymentsMarF,
                                              paymentsApF,
                                              paymentsMaF,
                                              paymentsJnF,
                                              paymentsJlF,
                                              paymentsAgF,
                                              paymentsStF,
                                              paymentsOtF,
                                              paymentsNvF,
                                              paymentsDzF,
                                              receiptsJF,
                                              receiptsFF,
                                              receiptsMarF,
                                              receiptsApF,
                                              receiptsMaF,
                                              receiptsJnF,
                                              receiptsJlF,
                                              receiptsAgF,
                                              receiptsStF,
                                              receiptsOtF,
                                              receiptsNvF,
                                              receiptsDzF,
                                              ///
                                              DespesasVendasEServicoJ,
                                              DespesasVendasEServicoF,
                                              DespesasVendasEServicoMar,
                                              DespesasVendasEServicoAp,
                                              DespesasVendasEServicoMa,
                                              DespesasVendasEServicoJn,
                                              DespesasVendasEServicoJl,
                                              DespesasVendasEServicoAg,
                                              DespesasVendasEServicoSt,
                                              DespesasVendasEServicoOt,
                                              DespesasVendasEServicoNv,
                                              DespesasVendasEServicoDz,
                                              totalPaymentsDespesasVendasEServico,
                                              totalPaymentsDespesasSalariosEncargo,
                                              DespesasSalariosEncargoJ,
                                              DespesasSalariosEncargoF,
                                              DespesasSalariosEncargoMar,
                                              DespesasSalariosEncargoAp,
                                              DespesasSalariosEncargoMa,
                                              DespesasSalariosEncargoJn,
                                              DespesasSalariosEncargoJl,
                                              DespesasSalariosEncargoAg,
                                              DespesasSalariosEncargoSt,
                                              DespesasSalariosEncargoOt,
                                              DespesasSalariosEncargoNv,
                                              DespesasSalariosEncargoDz,
                                              totalPaymentsDespesasColaboradores,
                                              DespesasColaboradoresJ,
                                              DespesasColaboradoresF,
                                              DespesasColaboradoresMar,
                                              DespesasColaboradoresAp,
                                              DespesasColaboradoresMa,
                                              DespesasColaboradoresJn,
                                              DespesasColaboradoresJl,
                                              DespesasColaboradoresAg,
                                              DespesasColaboradoresSt,
                                              DespesasColaboradoresOt,
                                              DespesasColaboradoresNv,
                                              DespesasColaboradoresDz,
                                              totalPaymentsDespesasAdministrativa,
                                              DespesasAdministrativaJ,
                                              DespesasAdministrativaF,
                                              DespesasAdministrativaMar,
                                              DespesasAdministrativaAp,
                                              DespesasAdministrativaMa,
                                              DespesasAdministrativaJn,
                                              DespesasAdministrativaJl,
                                              DespesasAdministrativaAg,
                                              DespesasAdministrativaSt,
                                              DespesasAdministrativaOt,
                                              DespesasAdministrativaNv,
                                              DespesasAdministrativaDz,
                                              totalPaymentsDespesasImoveis,
                                              DespesasImoveisJ,
                                              DespesasImoveisF,
                                              DespesasImoveisMar,
                                              DespesasImoveisAp,
                                              DespesasImoveisMa,
                                              DespesasImoveisJn,
                                              DespesasImoveisJl,
                                              DespesasImoveisAg,
                                              DespesasImoveisSt,
                                              DespesasImoveisOt,
                                              DespesasImoveisNv,
                                              DespesasImoveisDz,
                                              totalPaymentsDespesasVeiculos,
                                              DespesasVeiculosJ,
                                              DespesasVeiculosF,
                                              DespesasVeiculosMar,
                                              DespesasVeiculosAp,
                                              DespesasVeiculosMa,
                                              DespesasVeiculosJn,
                                              DespesasVeiculosJl,
                                              DespesasVeiculosAg,
                                              DespesasVeiculosSt,
                                              DespesasVeiculosOt,
                                              DespesasVeiculosNv,
                                              DespesasVeiculosDz,
                                              //
                                              DespesasBensImobilizadosJ,
                                              DespesasBensImobilizadosF,
                                              DespesasBensImobilizadosMar,
                                              DespesasBensImobilizadosAp,
                                              DespesasBensImobilizadosMa,
                                              DespesasBensImobilizadosJn,
                                              DespesasBensImobilizadosJl,
                                              DespesasBensImobilizadosAg,
                                              DespesasBensImobilizadosSt,
                                              DespesasBensImobilizadosOt,
                                              DespesasBensImobilizadosNv,
                                              DespesasBensImobilizadosDz,
                                              totalPaymentsDespesasBensImobilizados,
                                            });
                                          });
                                        })
                                      })
                                    })
                                  })
                              });
                            })
                          })
                        })
                      })
                    })
                  });
                })
              })
            })
          })
        })
      })
    })
  })
});

app.get("/admin/DREGerencial", adminAuth, async (req, res) => {


  var totalPayments = 0;
  var totalReceipts = 0;
  var soma = 0;
  //filtragem de dados, por peridodo que eles foram adicionados no BD
  //formatar numeros em valores decimais (.toLocaleFixed(2))
  Number.prototype.toLocaleFixed = function (n) {
    return this.toLocaleString(undefined, {
      minimumFractionDigits: n,
      maximumFractionDigits: n
    });
  };
  
  //////////////////////total
  var amountP = await Payment.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  var amountPayments = (Number(amountP['sum(`valor`)']))
  var totalPayments = (-Number(amountP['sum(`valor`)'])).toLocaleFixed(2)

  var amountR = await Receipt.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  var amountReceipts = (Number(amountR['sum(`valor`)']))
  var totalReceipts = (Number(amountR['sum(`valor`)'])).toLocaleFixed(2)

  var soma = (Number(-amountPayments) + Number(amountReceipts)).toLocaleFixed(2);

  ////Receitas VendasProdutosServicos
  const getAmountReceitaVendasProdutosServicos = async (table, month, year) => {
    const dt1 = new Date(year, month - 1, 1);
    const dt2 = new Date(year, month, 0);

    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],
      where: {
        categoriesreceitaId: [100, 101, 102, 103, 104, 105 ],
        data: {
          [Op.between]: [dt1, dt2],
        },
      },
      raw: true
    });

    return Number(row['sum(`valor`)']);
  };
  var ReceitaVendasProdutosServicosJ = (await getAmountReceitaVendasProdutosServicos(Receipt, 1, 2022)).toLocaleFixed(2);
  var ReceitaVendasProdutosServicosF = (await getAmountReceitaVendasProdutosServicos(Receipt, 2, 2022)).toLocaleFixed(2);
  var ReceitaVendasProdutosServicosMar = (await getAmountReceitaVendasProdutosServicos(Receipt, 3, 2022)).toLocaleFixed(2);
  var ReceitaVendasProdutosServicosAp = (await getAmountReceitaVendasProdutosServicos(Receipt, 4, 2022)).toLocaleFixed(2);
  var ReceitaVendasProdutosServicosMa = (await getAmountReceitaVendasProdutosServicos(Receipt, 5, 2022)).toLocaleFixed(2);
  var ReceitaVendasProdutosServicosJn = (await getAmountReceitaVendasProdutosServicos(Receipt, 6, 2022)).toLocaleFixed(2);
  var ReceitaVendasProdutosServicosJl = (await getAmountReceitaVendasProdutosServicos(Receipt, 7, 2022)).toLocaleFixed(2);
  var ReceitaVendasProdutosServicosAg = (await getAmountReceitaVendasProdutosServicos(Receipt, 8, 2022)).toLocaleFixed(2);
  var ReceitaVendasProdutosServicosSt = (await getAmountReceitaVendasProdutosServicos(Receipt, 9, 2022)).toLocaleFixed(2);
  var ReceitaVendasProdutosServicosOt = (await getAmountReceitaVendasProdutosServicos(Receipt, 10, 2022)).toLocaleFixed(2);
  var ReceitaVendasProdutosServicosNv = (await getAmountReceitaVendasProdutosServicos(Receipt, 11, 2022)).toLocaleFixed(2);
  var ReceitaVendasProdutosServicosDz = (await getAmountReceitaVendasProdutosServicos(Receipt, 12, 2022)).toLocaleFixed(2);

  //////////////////////total ReceitaVendasProdutosServicos
  var amountReceitaVendasProdutosServicos = await Receipt.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesreceitaId: [100, 101, 102, 103, 104, 105 ],
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  var totalReceitaVendasProdutosServicos = (Number(amountReceitaVendasProdutosServicos['sum(`valor`)'])).toLocaleFixed(2)


  ////Receitas de Fretes e Entregas
  const getAmountReceitaFretesEntregas = async (table, month, year) => {
    const dt1 = new Date(year, month - 1, 1);
    const dt2 = new Date(year, month, 0);

    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],
      where: {
        categoriesFretesEntregaId: [1, 2, 3, 4, 5, 6 ],
        data: {
          [Op.between]: [dt1, dt2],
        },
      },
      raw: true
    });

    return Number(row['sum(`valor`)']);
  };
  var ReceitaFretesEntregasJ = (await getAmountReceitaFretesEntregas(Receipt, 1, 2022)).toLocaleFixed(2);
  var ReceitaFretesEntregasF = (await getAmountReceitaFretesEntregas(Receipt, 2, 2022)).toLocaleFixed(2);
  var ReceitaFretesEntregasMar = (await getAmountReceitaFretesEntregas(Receipt, 3, 2022)).toLocaleFixed(2);
  var ReceitaFretesEntregasAp = (await getAmountReceitaFretesEntregas(Receipt, 4, 2022)).toLocaleFixed(2);
  var ReceitaFretesEntregasMa = (await getAmountReceitaFretesEntregas(Receipt, 5, 2022)).toLocaleFixed(2);
  var ReceitaFretesEntregasJn = (await getAmountReceitaFretesEntregas(Receipt, 6, 2022)).toLocaleFixed(2);
  var ReceitaFretesEntregasJl = (await getAmountReceitaFretesEntregas(Receipt, 7, 2022)).toLocaleFixed(2);
  var ReceitaFretesEntregasAg = (await getAmountReceitaFretesEntregas(Receipt, 8, 2022)).toLocaleFixed(2);
  var ReceitaFretesEntregasSt = (await getAmountReceitaFretesEntregas(Receipt, 9, 2022)).toLocaleFixed(2);
  var ReceitaFretesEntregasOt = (await getAmountReceitaFretesEntregas(Receipt, 10, 2022)).toLocaleFixed(2);
  var ReceitaFretesEntregasNv = (await getAmountReceitaFretesEntregas(Receipt, 11, 2022)).toLocaleFixed(2);
  var ReceitaFretesEntregasDz = (await getAmountReceitaFretesEntregas(Receipt, 12, 2022)).toLocaleFixed(2);

  //////////////////////total ReceitaFretesEntregas
  var amountReceitaFretesEntregas = await Receipt.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesFretesEntregaId: [1, 2, 3, 4, 5, 6 ],
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  var totalReceitaFretesEntregas = (Number(amountReceitaFretesEntregas['sum(`valor`)'])).toLocaleFixed(2)


  ////Receitas Operacionais (Vendas de Produtos e Serviços + Fretes e Entregas)

  var ReceitaOperacionaisJ = ((await getAmountReceitaFretesEntregas(Receipt, 1, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 1, 2022))).toLocaleFixed(2);
  var ReceitaOperacionaisF = ((await getAmountReceitaFretesEntregas(Receipt, 2, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 2, 2022))).toLocaleFixed(2);
  var ReceitaOperacionaisMar = ((await getAmountReceitaFretesEntregas(Receipt, 3, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 3, 2022))).toLocaleFixed(2);
  var ReceitaOperacionaisAp = ((await getAmountReceitaFretesEntregas(Receipt, 4, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 4, 2022))).toLocaleFixed(2);
  var ReceitaOperacionaisMa = ((await getAmountReceitaFretesEntregas(Receipt, 5, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 5, 2022))).toLocaleFixed(2);
  var ReceitaOperacionaisJn = ((await getAmountReceitaFretesEntregas(Receipt, 6, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 6, 2022))).toLocaleFixed(2);
  var ReceitaOperacionaisJl = ((await getAmountReceitaFretesEntregas(Receipt, 7, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 7, 2022))).toLocaleFixed(2);
  var ReceitaOperacionaisAg = ((await getAmountReceitaFretesEntregas(Receipt, 8, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 8, 2022))).toLocaleFixed(2);
  var ReceitaOperacionaisSt = ((await getAmountReceitaFretesEntregas(Receipt, 9, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 9, 2022))).toLocaleFixed(2);
  var ReceitaOperacionaisOt = ((await getAmountReceitaFretesEntregas(Receipt, 10, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 10, 2022))).toLocaleFixed(2);
  var ReceitaOperacionaisNv = ((await getAmountReceitaFretesEntregas(Receipt, 11, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 11, 2022))).toLocaleFixed(2);
  var ReceitaOperacionaisDz = ((await getAmountReceitaFretesEntregas(Receipt, 12, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 12, 2022))).toLocaleFixed(2);
  var totalReceitaOperacionais = ((Number(amountReceitaVendasProdutosServicos['sum(`valor`)'])) + (Number(amountReceitaFretesEntregas['sum(`valor`)']))).toLocaleFixed(2);



  ////Receita Bruta de Vendas (Vendas de Produtos e Serviços + Fretes e Entregas)

  var ReceitaBrutaVendasJR = ((await getAmountReceitaFretesEntregas(Receipt, 1, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 1, 2022)))
  var ReceitaBrutaVendasFR = ((await getAmountReceitaFretesEntregas(Receipt, 2, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 2, 2022)))
  var ReceitaBrutaVendasMarR = ((await getAmountReceitaFretesEntregas(Receipt, 3, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 3, 2022)))
  var ReceitaBrutaVendasApR =  ((await getAmountReceitaFretesEntregas(Receipt, 4, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 4, 2022)))
  var ReceitaBrutaVendasMaR = ((await getAmountReceitaFretesEntregas(Receipt, 5, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 5, 2022)))
  var ReceitaBrutaVendasJnR =  ((await getAmountReceitaFretesEntregas(Receipt, 6, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 6, 2022)))
  var ReceitaBrutaVendasJlR = ((await getAmountReceitaFretesEntregas(Receipt, 7, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 7, 2022)))
  var ReceitaBrutaVendasAgR =  ((await getAmountReceitaFretesEntregas(Receipt, 8, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 8, 2022)))
  var ReceitaBrutaVendasStR = ((await getAmountReceitaFretesEntregas(Receipt, 9, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 9, 2022)))
  var ReceitaBrutaVendasOtR =  ((await getAmountReceitaFretesEntregas(Receipt, 10, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 10, 2022)))
  var ReceitaBrutaVendasNvR = ((await getAmountReceitaFretesEntregas(Receipt, 11, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 11, 2022)))
  var ReceitaBrutaVendasDzR = ((await getAmountReceitaFretesEntregas(Receipt, 12, 2022)) + (await getAmountReceitaVendasProdutosServicos(Receipt, 12, 2022)))

  //////////////////////total ReceitaBrutaVendas

  var totalReceitaBrutaVendasR = ((Number(amountReceitaVendasProdutosServicos['sum(`valor`)'])) + (Number(amountReceitaFretesEntregas['sum(`valor`)'])))
/////
  var ReceitaBrutaVendasJ = (ReceitaBrutaVendasJR).toLocaleFixed(2);
  var ReceitaBrutaVendasF = (ReceitaBrutaVendasFR).toLocaleFixed(2);
  var ReceitaBrutaVendasMar = (ReceitaBrutaVendasMarR).toLocaleFixed(2);
  var ReceitaBrutaVendasAp =  (ReceitaBrutaVendasApR).toLocaleFixed(2);
  var ReceitaBrutaVendasMa = (ReceitaBrutaVendasMaR).toLocaleFixed(2);
  var ReceitaBrutaVendasJn =  (ReceitaBrutaVendasJnR).toLocaleFixed(2);
  var ReceitaBrutaVendasJl = (ReceitaBrutaVendasJlR).toLocaleFixed(2);
  var ReceitaBrutaVendasAg =  (ReceitaBrutaVendasAgR).toLocaleFixed(2);
  var ReceitaBrutaVendasSt = (ReceitaBrutaVendasStR).toLocaleFixed(2);
  var ReceitaBrutaVendasOt =  (ReceitaBrutaVendasOtR).toLocaleFixed(2);
  var ReceitaBrutaVendasNv = (ReceitaBrutaVendasNvR).toLocaleFixed(2);
  var ReceitaBrutaVendasDz = (ReceitaBrutaVendasDzR).toLocaleFixed(2);

  var totalReceitaBrutaVendas = (totalReceitaBrutaVendasR).toLocaleFixed(2);
////
  ////Impostos sobre vendas
  const getAmountImpostosSobreVendas = async (table, month, year) => {
    const dt1 = new Date(year, month - 1, 1);
    const dt2 = new Date(year, month, 0);

    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],
      where: {
        categoriesDespesasImpostoId: [100, 101, 102, 103, 104],
        data: {
          [Op.between]: [dt1, dt2],
        },
      },
      raw: true
    });

    return Number(row['sum(`valor`)']);
  };
  var ReceitaImpostosSobreVendasJ = (-Number(await getAmountImpostosSobreVendas(Payment, 1, 2022))).toLocaleFixed(2);
  var ReceitaImpostosSobreVendasF = (-Number(await getAmountImpostosSobreVendas(Payment, 2, 2022))).toLocaleFixed(2);
  var ReceitaImpostosSobreVendasMar = (-Number(await getAmountImpostosSobreVendas(Payment, 3, 2022))).toLocaleFixed(2);
  var ReceitaImpostosSobreVendasAp = (-Number(await getAmountImpostosSobreVendas(Payment, 4, 2022))).toLocaleFixed(2);
  var ReceitaImpostosSobreVendasMa = (-Number(await getAmountImpostosSobreVendas(Payment, 5, 2022))).toLocaleFixed(2);
  var ReceitaImpostosSobreVendasJn = (-Number(await getAmountImpostosSobreVendas(Payment, 6, 2022))).toLocaleFixed(2);
  var ReceitaImpostosSobreVendasJl = (-Number(await getAmountImpostosSobreVendas(Payment, 7, 2022))).toLocaleFixed(2);
  var ReceitaImpostosSobreVendasAg = (-Number(await getAmountImpostosSobreVendas(Payment, 8, 2022))).toLocaleFixed(2);
  var ReceitaImpostosSobreVendasSt = (-Number(await getAmountImpostosSobreVendas(Payment, 9, 2022))).toLocaleFixed(2);
  var ReceitaImpostosSobreVendasOt = (-Number(await getAmountImpostosSobreVendas(Payment, 10, 2022))).toLocaleFixed(2);
  var ReceitaImpostosSobreVendasNv = (-Number(await getAmountImpostosSobreVendas(Payment, 11, 2022))).toLocaleFixed(2);
  var ReceitaImpostosSobreVendasDz = (-Number(await getAmountImpostosSobreVendas(Payment, 12, 2022))).toLocaleFixed(2);
  

  //////////////////////total ReceitaImpostosSobreVendas
  var amountReceitaImpostosSobreVendas = await Payment.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasImpostoId: [100, 101, 102, 103, 104],
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  var totalReceitaImpostosSobreVendas = (-Number(amountReceitaImpostosSobreVendas['sum(`valor`)'])).toLocaleFixed(2)

 ////Comissões Sobre Vendas
 const getAmountComissoes = async (table, month, year) => {
  const dt1 = new Date(year, month - 1, 1);
  const dt2 = new Date(year, month, 0);

  const row = await table.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasVendasEServicoId: [200],
      data: {
        [Op.between]: [dt1, dt2],
      },
    },
    raw: true
  });

  return Number(row['sum(`valor`)']);
};

var DespesaComissoesVendasJ = (-Number(await getAmountComissoes(Payment, 1, 2022))).toLocaleFixed(2);
var DespesaComissoesVendasF = (-Number(await getAmountComissoes(Payment, 2, 2022))).toLocaleFixed(2);
var DespesaComissoesVendasMar = (-Number(await getAmountComissoes(Payment, 3, 2022))).toLocaleFixed(2);
var DespesaComissoesVendasAp = (-Number(await getAmountComissoes(Payment, 4, 2022))).toLocaleFixed(2);
var DespesaComissoesVendasMa = (-Number(await getAmountComissoes(Payment, 5, 2022))).toLocaleFixed(2);
var DespesaComissoesVendasJn = (-Number(await getAmountComissoes(Payment, 6, 2022))).toLocaleFixed(2);
var DespesaComissoesVendasJl = (-Number(await getAmountComissoes(Payment, 7, 2022))).toLocaleFixed(2);
var DespesaComissoesVendasAg = (-Number(await getAmountComissoes(Payment, 8, 2022))).toLocaleFixed(2);
var DespesaComissoesVendasSt = (-Number(await getAmountComissoes(Payment, 9, 2022))).toLocaleFixed(2);
var DespesaComissoesVendasOt = (-Number(await getAmountComissoes(Payment, 10, 2022))).toLocaleFixed(2);
var DespesaComissoesVendasNv = (-Number(await getAmountComissoes(Payment, 11, 2022))).toLocaleFixed(2);
var DespesaComissoesVendasDz = (-Number(await getAmountComissoes(Payment, 12, 2022))).toLocaleFixed(2);


//////////////////////total DespesaComissoesVendas
var amountDespesaComissoesVendas = await Payment.findOne({
  attributes: [sequelize.fn("sum", sequelize.col("valor"))],
  where: {
    categoriesDespesasVendasEServicoId: [200],
    data: {
      [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
    },
  },
  raw: true
});
var totalDespesaComissoesVendas = (-Number(amountDespesaComissoesVendas['sum(`valor`)'])).toLocaleFixed(2)


 ////Descontos Incondicionais
 const getAmountDescontosIncondicionais = async (table, month, year) => {
  const dt1 = new Date(year, month - 1, 1);
  const dt2 = new Date(year, month, 0);

  const row = await table.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasAdministrativaId: [528],
      data: {
        [Op.between]: [dt1, dt2],
      },
    },
    raw: true
  });

  return Number(row['sum(`valor`)']);
};

var DespesaDescontosIncondicionaisJ = (-Number(await getAmountDescontosIncondicionais(Payment, 1, 2022))).toLocaleFixed(2);
var DespesaDescontosIncondicionaisF = (-Number(await getAmountDescontosIncondicionais(Payment, 2, 2022))).toLocaleFixed(2);
var DespesaDescontosIncondicionaisMar = (-Number(await getAmountDescontosIncondicionais(Payment, 3, 2022))).toLocaleFixed(2);
var DespesaDescontosIncondicionaisAp = (-Number(await getAmountDescontosIncondicionais(Payment, 4, 2022))).toLocaleFixed(2);
var DespesaDescontosIncondicionaisMa = (-Number(await getAmountDescontosIncondicionais(Payment, 5, 2022))).toLocaleFixed(2);
var DespesaDescontosIncondicionaisJn = (-Number(await getAmountDescontosIncondicionais(Payment, 6, 2022))).toLocaleFixed(2);
var DespesaDescontosIncondicionaisJl = (-Number(await getAmountDescontosIncondicionais(Payment, 7, 2022))).toLocaleFixed(2);
var DespesaDescontosIncondicionaisAg = (-Number(await getAmountDescontosIncondicionais(Payment, 8, 2022))).toLocaleFixed(2);
var DespesaDescontosIncondicionaisSt = (-Number(await getAmountDescontosIncondicionais(Payment, 9, 2022))).toLocaleFixed(2);
var DespesaDescontosIncondicionaisOt = (-Number(await getAmountDescontosIncondicionais(Payment, 10, 2022))).toLocaleFixed(2);
var DespesaDescontosIncondicionaisNv = (-Number(await getAmountDescontosIncondicionais(Payment, 11, 2022))).toLocaleFixed(2);
var DespesaDescontosIncondicionaisDz = (-Number(await getAmountDescontosIncondicionais(Payment, 12, 2022))).toLocaleFixed(2);

//////////////////////total Despesas Descontos Incondicionais
var amountDespesaDescontosIncondicionais = await Payment.findOne({
  attributes: [sequelize.fn("sum", sequelize.col("valor"))],
  where: {
    categoriesDespesasAdministrativaId: [528],
    data: {
      [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
    },
  },
  raw: true
});

var totalDespesasDescontosIncondicionais = (-Number(amountDespesaDescontosIncondicionais['sum(`valor`)'])).toLocaleFixed(2)


 ////Devolução de Vendas
 const getAmountDevolucaoVenda = async (table, month, year) => {
  const dt1 = new Date(year, month - 1, 1);
  const dt2 = new Date(year, month, 0);

  const row = await table.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasVendasEServicoId: [204],
      data: {
        [Op.between]: [dt1, dt2],
      },
    },
    raw: true
  });

  return Number(row['sum(`valor`)']);
};

var DespesaDevolucaoVendaJ = (-Number(await getAmountDevolucaoVenda(Payment, 1, 2022))).toLocaleFixed(2);
var DespesaDevolucaoVendaF = (-Number(await getAmountDevolucaoVenda(Payment, 2, 2022))).toLocaleFixed(2);
var DespesaDevolucaoVendaMar = (-Number(await getAmountDevolucaoVenda(Payment, 3, 2022))).toLocaleFixed(2);
var DespesaDevolucaoVendaAp = (-Number(await getAmountDevolucaoVenda(Payment, 4, 2022))).toLocaleFixed(2);
var DespesaDevolucaoVendaMa = (-Number(await getAmountDevolucaoVenda(Payment, 5, 2022))).toLocaleFixed(2);
var DespesaDevolucaoVendaJn = (-Number(await getAmountDevolucaoVenda(Payment, 6, 2022))).toLocaleFixed(2);
var DespesaDevolucaoVendaJl = (-Number(await getAmountDevolucaoVenda(Payment, 7, 2022))).toLocaleFixed(2);
var DespesaDevolucaoVendaAg = (-Number(await getAmountDevolucaoVenda(Payment, 8, 2022))).toLocaleFixed(2);
var DespesaDevolucaoVendaSt = (-Number(await getAmountDevolucaoVenda(Payment, 9, 2022))).toLocaleFixed(2);
var DespesaDevolucaoVendaOt = (-Number(await getAmountDevolucaoVenda(Payment, 10, 2022))).toLocaleFixed(2);
var DespesaDevolucaoVendaNv = (-Number(await getAmountDevolucaoVenda(Payment, 11, 2022))).toLocaleFixed(2);
var DespesaDevolucaoVendaDz = (-Number(await getAmountDevolucaoVenda(Payment, 12, 2022))).toLocaleFixed(2);

//////////////////////total Despesas Devolução de Vendas
var amountDespesaDevolucaoVenda = await Payment.findOne({
  attributes: [sequelize.fn("sum", sequelize.col("valor"))],
  where: {
    categoriesDespesasVendasEServicoId: [204],
    data: {
      [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
    },
  },
  raw: true
});

var totalDespesasDevolucaoVenda = (-Number(amountDespesaDevolucaoVenda['sum(`valor`)'])).toLocaleFixed(2)

//// Deduções da Receita Bruta ( Impostos sobre Vendas + Comissões sobre vendas + Descontos Incondicionais + devolução de Vendas)
var DeducaoReceitaBrutaJ = (-Number((await getAmountImpostosSobreVendas(Payment, 1, 2022)) + (await getAmountComissoes(Payment, 1, 2022)) + (await getAmountDescontosIncondicionais(Payment, 1, 2022)) + (await getAmountDevolucaoVenda(Payment, 1, 2022)))).toLocaleFixed(2);
  var DeducaoReceitaBrutaF = (-Number((await getAmountImpostosSobreVendas(Payment, 2, 2022)) + (await getAmountComissoes(Payment, 2, 2022)) + (await getAmountDescontosIncondicionais(Payment, 2, 2022)) + (await getAmountDevolucaoVenda(Payment, 2, 2022)))).toLocaleFixed(2);
  var DeducaoReceitaBrutaMar = (-Number((await getAmountImpostosSobreVendas(Payment, 3, 2022)) + (await getAmountComissoes(Payment, 3, 2022)) + (await getAmountDescontosIncondicionais(Payment, 3, 2022)) + (await getAmountDevolucaoVenda(Payment, 3, 2022)))).toLocaleFixed(2);
  var DeducaoReceitaBrutaAp = (-Number((await getAmountImpostosSobreVendas(Payment, 4, 2022)) + (await getAmountComissoes(Payment, 4, 2022)) + (await getAmountDescontosIncondicionais(Payment, 4, 2022)) + (await getAmountDevolucaoVenda(Payment, 4, 2022)))).toLocaleFixed(2);
  var DeducaoReceitaBrutaMa = (-Number((await getAmountImpostosSobreVendas(Payment, 5, 2022)) + (await getAmountComissoes(Payment, 5, 2022)) + (await getAmountDescontosIncondicionais(Payment, 5, 2022)) + (await getAmountDevolucaoVenda(Payment, 5, 2022)))).toLocaleFixed(2);
  var DeducaoReceitaBrutaJn = (-Number((await getAmountImpostosSobreVendas(Payment, 6, 2022)) + (await getAmountComissoes(Payment, 6, 2022)) + (await getAmountDescontosIncondicionais(Payment, 6, 2022)) + (await getAmountDevolucaoVenda(Payment, 6, 2022)))).toLocaleFixed(2);
  var DeducaoReceitaBrutaJl = (-Number((await getAmountImpostosSobreVendas(Payment, 7, 2022)) + (await getAmountComissoes(Payment, 7, 2022)) + (await getAmountDescontosIncondicionais(Payment, 7, 2022)) + (await getAmountDevolucaoVenda(Payment, 7, 2022)))).toLocaleFixed(2);
  var DeducaoReceitaBrutaAg = (-Number((await getAmountImpostosSobreVendas(Payment, 8, 2022)) + (await getAmountComissoes(Payment, 8, 2022)) + (await getAmountDescontosIncondicionais(Payment, 8, 2022)) + (await getAmountDevolucaoVenda(Payment, 8, 2022)))).toLocaleFixed(2);
  var DeducaoReceitaBrutaSt = (-Number((await getAmountImpostosSobreVendas(Payment, 9, 2022)) + (await getAmountComissoes(Payment, 9, 2022)) + (await getAmountDescontosIncondicionais(Payment, 9, 2022)) + (await getAmountDevolucaoVenda(Payment, 9, 2022)))).toLocaleFixed(2);
  var DeducaoReceitaBrutaOt = (-Number((await getAmountImpostosSobreVendas(Payment, 10, 2022)) + (await getAmountComissoes(Payment, 10, 2022)) + (await getAmountDescontosIncondicionais(Payment, 10, 2022)) + (await getAmountDevolucaoVenda(Payment, 10, 2022)))).toLocaleFixed(2);
  var DeducaoReceitaBrutaNv = (-Number((await getAmountImpostosSobreVendas(Payment, 11, 2022)) + (await getAmountComissoes(Payment, 11, 2022)) + (await getAmountDescontosIncondicionais(Payment, 11, 2022)) + (await getAmountDevolucaoVenda(Payment, 11, 2022)))).toLocaleFixed(2);
  var DeducaoReceitaBrutaDz = (-Number((await getAmountImpostosSobreVendas(Payment, 12, 2022)) + (await getAmountComissoes(Payment, 12, 2022)) + (await getAmountDescontosIncondicionais(Payment, 12, 2022)) + (await getAmountDevolucaoVenda(Payment, 12, 2022)))).toLocaleFixed(2);
  var totalDeducaoReceitaBruta = (-(Number((amountReceitaImpostosSobreVendas['sum(`valor`)'])) + (Number(amountDespesaComissoesVendas['sum(`valor`)'])) + (Number(amountDespesaDescontosIncondicionais['sum(`valor`)'])) + (Number(amountDespesaDevolucaoVenda['sum(`valor`)'])))).toLocaleFixed(2);


  ///////Receita Líquida de Vendas (Receita Bruta de Vendas - Deduções da Receita Bruta )
  
  var ReceitaLiquidaVendaJ = (Number(ReceitaBrutaVendasJR) + (-Number((await getAmountImpostosSobreVendas(Payment, 1, 2022)) + (await getAmountComissoes(Payment, 1, 2022)) + (await getAmountDescontosIncondicionais(Payment, 1, 2022)) + (await getAmountDevolucaoVenda(Payment, 1, 2022))))).toLocaleFixed(2);
  var ReceitaLiquidaVendaF = (Number(ReceitaBrutaVendasFR) + (-Number((await getAmountImpostosSobreVendas(Payment, 2, 2022)) + (await getAmountComissoes(Payment, 2, 2022)) + (await getAmountDescontosIncondicionais(Payment, 2, 2022)) + (await getAmountDevolucaoVenda(Payment, 2, 2022))))).toLocaleFixed(2);
  var ReceitaLiquidaVendaMar = (Number(ReceitaBrutaVendasMarR) + (-Number((await getAmountImpostosSobreVendas(Payment, 3, 2022)) + (await getAmountComissoes(Payment, 3, 2022)) + (await getAmountDescontosIncondicionais(Payment, 3, 2022)) + (await getAmountDevolucaoVenda(Payment, 3, 2022))))).toLocaleFixed(2);
  var ReceitaLiquidaVendaAp = (Number(ReceitaBrutaVendasApR) + (-Number((await getAmountImpostosSobreVendas(Payment, 4, 2022)) + (await getAmountComissoes(Payment, 4, 2022)) + (await getAmountDescontosIncondicionais(Payment, 4, 2022)) + (await getAmountDevolucaoVenda(Payment, 4, 2022))))).toLocaleFixed(2);
  var ReceitaLiquidaVendaMa = (Number(ReceitaBrutaVendasMaR) + (-Number((await getAmountImpostosSobreVendas(Payment, 5, 2022)) + (await getAmountComissoes(Payment, 5, 2022)) + (await getAmountDescontosIncondicionais(Payment, 5, 2022)) + (await getAmountDevolucaoVenda(Payment, 5, 2022))))).toLocaleFixed(2);
  var ReceitaLiquidaVendaJn = (Number(ReceitaBrutaVendasJnR) + (-Number((await getAmountImpostosSobreVendas(Payment, 6, 2022)) + (await getAmountComissoes(Payment, 6, 2022)) + (await getAmountDescontosIncondicionais(Payment, 6, 2022)) + (await getAmountDevolucaoVenda(Payment, 6, 2022))))).toLocaleFixed(2);
  var ReceitaLiquidaVendaJl = (Number(ReceitaBrutaVendasJlR) + (-Number((await getAmountImpostosSobreVendas(Payment, 7, 2022)) + (await getAmountComissoes(Payment, 7, 2022)) + (await getAmountDescontosIncondicionais(Payment, 7, 2022)) + (await getAmountDevolucaoVenda(Payment, 7, 2022))))).toLocaleFixed(2);
  var ReceitaLiquidaVendaAg = (Number(ReceitaBrutaVendasAgR) + (-Number((await getAmountImpostosSobreVendas(Payment, 8, 2022)) + (await getAmountComissoes(Payment, 8, 2022)) + (await getAmountDescontosIncondicionais(Payment, 8, 2022)) + (await getAmountDevolucaoVenda(Payment, 8, 2022))))).toLocaleFixed(2);
  var ReceitaLiquidaVendaSt = (Number(ReceitaBrutaVendasStR) + (-Number((await getAmountImpostosSobreVendas(Payment, 9, 2022)) + (await getAmountComissoes(Payment, 9, 2022)) + (await getAmountDescontosIncondicionais(Payment, 9, 2022)) + (await getAmountDevolucaoVenda(Payment, 9, 2022))))).toLocaleFixed(2);
  var ReceitaLiquidaVendaOt = (Number(ReceitaBrutaVendasOtR) + (-Number((await getAmountImpostosSobreVendas(Payment, 10, 2022)) + (await getAmountComissoes(Payment, 10, 2022)) + (await getAmountDescontosIncondicionais(Payment, 10, 2022)) + (await getAmountDevolucaoVenda(Payment, 10, 2022))))).toLocaleFixed(2);
  var ReceitaLiquidaVendaNv = (Number(ReceitaBrutaVendasNvR) + (-Number((await getAmountImpostosSobreVendas(Payment, 11, 2022)) + (await getAmountComissoes(Payment, 11, 2022)) + (await getAmountDescontosIncondicionais(Payment, 11, 2022)) + (await getAmountDevolucaoVenda(Payment, 11, 2022))))).toLocaleFixed(2);
  var ReceitaLiquidaVendaDz = (Number(ReceitaBrutaVendasDzR) + (-Number((await getAmountImpostosSobreVendas(Payment, 12, 2022)) + (await getAmountComissoes(Payment, 12, 2022)) + (await getAmountDescontosIncondicionais(Payment, 12, 2022)) + (await getAmountDevolucaoVenda(Payment, 12, 2022))))).toLocaleFixed(2);
  var totalReceitaLiquidaVenda = ((Number(totalReceitaBrutaVendasR)) + (-(Number((amountReceitaImpostosSobreVendas['sum(`valor`)'])) + (Number(amountDespesaComissoesVendas['sum(`valor`)'])) + (Number(amountDespesaDescontosIncondicionais['sum(`valor`)'])) + (Number(amountDespesaDevolucaoVenda['sum(`valor`)']))))).toLocaleFixed(2);

  ///////Custo dos Produtos Vendidos (Materiais para Revenda)
  
  const getAmountCustoProdutoVendido = async (table, month, year) => {
    const dt1 = new Date(year, month - 1, 1);
    const dt2 = new Date(year, month, 0);
  
    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],
      where: {
        categoriesDespesasVendasEServicoId: [202],
        data: {
          [Op.between]: [dt1, dt2],
        },
      },
      raw: true
    });
  
    return Number(row['sum(`valor`)']);
  };
  
  var CustoProdutoVendidoJ = (-Number(await getAmountCustoProdutoVendido(Payment, 1, 2022))).toLocaleFixed(2);
  var CustoProdutoVendidoF = (-Number(await getAmountCustoProdutoVendido(Payment, 2, 2022))).toLocaleFixed(2);
  var CustoProdutoVendidoMar = (-Number(await getAmountCustoProdutoVendido(Payment, 3, 2022))).toLocaleFixed(2);
  var CustoProdutoVendidoAp = (-Number(await getAmountCustoProdutoVendido(Payment, 4, 2022))).toLocaleFixed(2);
  var CustoProdutoVendidoMa = (-Number(await getAmountCustoProdutoVendido(Payment, 5, 2022))).toLocaleFixed(2);
  var CustoProdutoVendidoJn = (-Number(await getAmountCustoProdutoVendido(Payment, 6, 2022))).toLocaleFixed(2);
  var CustoProdutoVendidoJl = (-Number(await getAmountCustoProdutoVendido(Payment, 7, 2022))).toLocaleFixed(2);
  var CustoProdutoVendidoAg = (-Number(await getAmountCustoProdutoVendido(Payment, 8, 2022))).toLocaleFixed(2);
  var CustoProdutoVendidoSt = (-Number(await getAmountCustoProdutoVendido(Payment, 9, 2022))).toLocaleFixed(2);
  var CustoProdutoVendidoOt = (-Number(await getAmountCustoProdutoVendido(Payment, 10, 2022))).toLocaleFixed(2);
  var CustoProdutoVendidoNv = (-Number(await getAmountCustoProdutoVendido(Payment, 11, 2022))).toLocaleFixed(2);
  var CustoProdutoVendidoDz = (-Number(await getAmountCustoProdutoVendido(Payment, 12, 2022))).toLocaleFixed(2);
  
  //////////////////////total Custo produto Vendido
  var amountCustoProdutoVendido = await Payment.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasVendasEServicoId: [202],
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  
  var totalCustoProdutoVendido = (-Number(amountCustoProdutoVendido['sum(`valor`)'])).toLocaleFixed(2)

  ///////Custo das Vendas de Produtos(Transporte de Mercadorias Vendidas)

  const getAmountCustoVendaProduto = async (table, month, year) => {
    const dt1 = new Date(year, month - 1, 1);
    const dt2 = new Date(year, month, 0);
  
    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],
      where: {
        categoriesDespesasVendasEServicoId: [203],
        data: {
          [Op.between]: [dt1, dt2],
        },
      },
      raw: true
    });
  
    return Number(row['sum(`valor`)']);
  };
  
  var CustoVendaProdutoJ = (-Number(await getAmountCustoVendaProduto(Payment, 1, 2022))).toLocaleFixed(2);
  var CustoVendaProdutoF = (-Number(await getAmountCustoVendaProduto(Payment, 2, 2022))).toLocaleFixed(2);
  var CustoVendaProdutoMar = (-Number(await getAmountCustoVendaProduto(Payment, 3, 2022))).toLocaleFixed(2);
  var CustoVendaProdutoAp = (-Number(await getAmountCustoVendaProduto(Payment, 4, 2022))).toLocaleFixed(2);
  var CustoVendaProdutoMa = (-Number(await getAmountCustoVendaProduto(Payment, 5, 2022))).toLocaleFixed(2);
  var CustoVendaProdutoJn = (-Number(await getAmountCustoVendaProduto(Payment, 6, 2022))).toLocaleFixed(2);
  var CustoVendaProdutoJl = (-Number(await getAmountCustoVendaProduto(Payment, 7, 2022))).toLocaleFixed(2);
  var CustoVendaProdutoAg = (-Number(await getAmountCustoVendaProduto(Payment, 8, 2022))).toLocaleFixed(2);
  var CustoVendaProdutoSt = (-Number(await getAmountCustoVendaProduto(Payment, 9, 2022))).toLocaleFixed(2);
  var CustoVendaProdutoOt = (-Number(await getAmountCustoVendaProduto(Payment, 10, 2022))).toLocaleFixed(2);
  var CustoVendaProdutoNv = (-Number(await getAmountCustoVendaProduto(Payment, 11, 2022))).toLocaleFixed(2);
  var CustoVendaProdutoDz = (-Number(await getAmountCustoVendaProduto(Payment, 12, 2022))).toLocaleFixed(2);
  
  //////////////////////total Custo produto Vendido
  var amountCustoVendaProduto = await Payment.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasVendasEServicoId: [203],
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  
  var totalCustoVendaProduto = (-Number(amountCustoVendaProduto['sum(`valor`)'])).toLocaleFixed(2)

  //////Custo dos Serviços Prestados(Materiais Aplicados na Prestação de Serviços)
  
  const getAmountCustoServicoPrestado = async (table, month, year) => {
    const dt1 = new Date(year, month - 1, 1);
    const dt2 = new Date(year, month, 0);
  
    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],
      where: {
        categoriesDespesasVendasEServicoId: [201],
        data: {
          [Op.between]: [dt1, dt2],
        },
      },
      raw: true
    });
  
    return Number(row['sum(`valor`)']);
  };
  
  var CustoServicoPrestadoJ = (-Number(await getAmountCustoServicoPrestado(Payment, 1, 2022))).toLocaleFixed(2);
  var CustoServicoPrestadoF = (-Number(await getAmountCustoServicoPrestado(Payment, 2, 2022))).toLocaleFixed(2);
  var CustoServicoPrestadoMar = (-Number(await getAmountCustoServicoPrestado(Payment, 3, 2022))).toLocaleFixed(2);
  var CustoServicoPrestadoAp = (-Number(await getAmountCustoServicoPrestado(Payment, 4, 2022))).toLocaleFixed(2);
  var CustoServicoPrestadoMa = (-Number(await getAmountCustoServicoPrestado(Payment, 5, 2022))).toLocaleFixed(2);
  var CustoServicoPrestadoJn = (-Number(await getAmountCustoServicoPrestado(Payment, 6, 2022))).toLocaleFixed(2);
  var CustoServicoPrestadoJl = (-Number(await getAmountCustoServicoPrestado(Payment, 7, 2022))).toLocaleFixed(2);
  var CustoServicoPrestadoAg = (-Number(await getAmountCustoServicoPrestado(Payment, 8, 2022))).toLocaleFixed(2);
  var CustoServicoPrestadoSt = (-Number(await getAmountCustoServicoPrestado(Payment, 9, 2022))).toLocaleFixed(2);
  var CustoServicoPrestadoOt = (-Number(await getAmountCustoServicoPrestado(Payment, 10, 2022))).toLocaleFixed(2);
  var CustoServicoPrestadoNv = (-Number(await getAmountCustoServicoPrestado(Payment, 11, 2022))).toLocaleFixed(2);
  var CustoServicoPrestadoDz = (-Number(await getAmountCustoServicoPrestado(Payment, 12, 2022))).toLocaleFixed(2);
  
  //////////////////////total Custo Serviço Prestado
  var amountCustoServicoPrestado = await Payment.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasVendasEServicoId: [201],
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  
  var totalCustoServicoPrestado = (-Number(amountCustoServicoPrestado['sum(`valor`)'])).toLocaleFixed(2)


  //////Custos Operacionais(Custo dos Produtos Vendidos + Custo das Vendas de Produtos + Custo dos Serviços Prestados)

  var CustoOperacionalJ = (-Number((await getAmountCustoProdutoVendido(Payment, 1, 2022)) + (await getAmountCustoVendaProduto(Payment, 1, 2022)) + (await getAmountCustoServicoPrestado(Payment, 1, 2022)))).toLocaleFixed(2);
  var CustoOperacionalF = (-Number((await getAmountCustoProdutoVendido(Payment, 2, 2022)) + (await getAmountCustoVendaProduto(Payment, 2, 2022)) + (await getAmountCustoServicoPrestado(Payment, 2, 2022)))).toLocaleFixed(2);
  var CustoOperacionalMar = (-Number((await getAmountCustoProdutoVendido(Payment, 3, 2022)) + (await getAmountCustoVendaProduto(Payment, 3, 2022)) + (await getAmountCustoServicoPrestado(Payment, 3, 2022)))).toLocaleFixed(2);
  var CustoOperacionalAp = (-Number((await getAmountCustoProdutoVendido(Payment, 4, 2022)) + (await getAmountCustoVendaProduto(Payment, 4, 2022)) + (await getAmountCustoServicoPrestado(Payment, 4, 2022)))).toLocaleFixed(2);
  var CustoOperacionalMa = (-Number((await getAmountCustoProdutoVendido(Payment, 5, 2022)) + (await getAmountCustoVendaProduto(Payment, 5, 2022)) + (await getAmountCustoServicoPrestado(Payment, 5, 2022)))).toLocaleFixed(2);
  var CustoOperacionalJn = (-Number((await getAmountCustoProdutoVendido(Payment, 6, 2022)) + (await getAmountCustoVendaProduto(Payment, 6, 2022)) + (await getAmountCustoServicoPrestado(Payment, 6, 2022)))).toLocaleFixed(2);
  var CustoOperacionalJl = (-Number((await getAmountCustoProdutoVendido(Payment, 7, 2022)) + (await getAmountCustoVendaProduto(Payment, 7, 2022)) + (await getAmountCustoServicoPrestado(Payment, 7, 2022)))).toLocaleFixed(2);
  var CustoOperacionalAg = (-Number((await getAmountCustoProdutoVendido(Payment, 8, 2022)) + (await getAmountCustoVendaProduto(Payment, 8, 2022)) + (await getAmountCustoServicoPrestado(Payment, 8, 2022)))).toLocaleFixed(2);
  var CustoOperacionalSt = (-Number((await getAmountCustoProdutoVendido(Payment, 9, 2022)) + (await getAmountCustoVendaProduto(Payment, 9, 2022)) + (await getAmountCustoServicoPrestado(Payment, 9, 2022)))).toLocaleFixed(2);
  var CustoOperacionalOt = (-Number((await getAmountCustoProdutoVendido(Payment, 10, 2022)) + (await getAmountCustoVendaProduto(Payment, 10, 2022)) + (await getAmountCustoServicoPrestado(Payment, 10, 2022)))).toLocaleFixed(2);
  var CustoOperacionalNv = (-Number((await getAmountCustoProdutoVendido(Payment, 11, 2022)) + (await getAmountCustoVendaProduto(Payment, 11, 2022)) + (await getAmountCustoServicoPrestado(Payment, 11, 2022)))).toLocaleFixed(2);
  var CustoOperacionalDz = (-Number((await getAmountCustoProdutoVendido(Payment, 12, 2022)) + (await getAmountCustoVendaProduto(Payment, 12, 2022)) + (await getAmountCustoServicoPrestado(Payment, 12, 2022)))).toLocaleFixed(2);
  var totalCustoOperacional = (-(Number(amountCustoProdutoVendido['sum(`valor`)'])) + (Number(amountCustoVendaProduto['sum(`valor`)'])) + (Number(amountCustoServicoPrestado['sum(`valor`)']))).toLocaleFixed(2);

  // //Lucro bruto (Receita Líquida de Vendas - Custos Operacionais)

  var LucroBrutoJB = 
  ((Number(ReceitaBrutaVendasJR) + (-Number((await getAmountImpostosSobreVendas(Payment, 1, 2022)) + (await getAmountComissoes(Payment, 1, 2022)) + (await getAmountDescontosIncondicionais(Payment, 1, 2022)) + (await getAmountDevolucaoVenda(Payment, 1, 2022)))))
   +
  (-Number((await getAmountCustoProdutoVendido(Payment, 1, 2022)) + (await getAmountCustoVendaProduto(Payment, 1, 2022)) + (await getAmountCustoServicoPrestado(Payment, 1, 2022)))));
  //////
  var LucroBrutoFB =
   ((Number(ReceitaBrutaVendasFR) + (-Number((await getAmountImpostosSobreVendas(Payment, 2, 2022)) + (await getAmountComissoes(Payment, 2, 2022)) + (await getAmountDescontosIncondicionais(Payment, 2, 2022)) + (await getAmountDevolucaoVenda(Payment, 2, 2022)))))
 + 
  (-Number((await getAmountCustoProdutoVendido(Payment, 2, 2022)) + (await getAmountCustoVendaProduto(Payment, 2, 2022)) + (await getAmountCustoServicoPrestado(Payment, 2, 2022)))));
  ////////
  var LucroBrutoMarB =
   ((Number(ReceitaBrutaVendasMarR) + (-Number((await getAmountImpostosSobreVendas(Payment, 3, 2022)) + (await getAmountComissoes(Payment, 3, 2022)) + (await getAmountDescontosIncondicionais(Payment, 3, 2022)) + (await getAmountDevolucaoVenda(Payment, 3, 2022)))))
+
  (-Number((await getAmountCustoProdutoVendido(Payment, 3, 2022)) + (await getAmountCustoVendaProduto(Payment, 3, 2022)) + (await getAmountCustoServicoPrestado(Payment, 3, 2022)))));
  ///////
  var LucroBrutoApB =
   ((Number(ReceitaBrutaVendasApR) + (-Number((await getAmountImpostosSobreVendas(Payment, 4, 2022)) + (await getAmountComissoes(Payment, 4, 2022)) + (await getAmountDescontosIncondicionais(Payment, 4, 2022)) + (await getAmountDevolucaoVenda(Payment, 4, 2022)))))
+
   (-Number((await getAmountCustoProdutoVendido(Payment, 4, 2022)) + (await getAmountCustoVendaProduto(Payment, 4, 2022)) + (await getAmountCustoServicoPrestado(Payment, 4, 2022)))));
   /////
  var LucroBrutoMaB =
   ((Number(ReceitaBrutaVendasMaR) + (-Number((await getAmountImpostosSobreVendas(Payment, 5, 2022)) + (await getAmountComissoes(Payment, 5, 2022)) + (await getAmountDescontosIncondicionais(Payment, 5, 2022)) + (await getAmountDevolucaoVenda(Payment, 5, 2022)))))
+
   (-Number((await getAmountCustoProdutoVendido(Payment, 5, 2022)) + (await getAmountCustoVendaProduto(Payment, 5, 2022)) + (await getAmountCustoServicoPrestado(Payment, 5, 2022)))));
   /////
  var LucroBrutoJnB = 
  ((Number(ReceitaBrutaVendasJnR) + (-Number((await getAmountImpostosSobreVendas(Payment, 6, 2022)) + (await getAmountComissoes(Payment, 6, 2022)) + (await getAmountDescontosIncondicionais(Payment, 6, 2022)) + (await getAmountDevolucaoVenda(Payment, 6, 2022)))))
+
  (-Number((await getAmountCustoProdutoVendido(Payment, 6, 2022)) + (await getAmountCustoVendaProduto(Payment, 6, 2022)) + (await getAmountCustoServicoPrestado(Payment, 6, 2022)))));
  ////
  var LucroBrutoJlB =
   ((Number(ReceitaBrutaVendasJlR) + (-Number((await getAmountImpostosSobreVendas(Payment, 7, 2022)) + (await getAmountComissoes(Payment, 7, 2022)) + (await getAmountDescontosIncondicionais(Payment, 7, 2022)) + (await getAmountDevolucaoVenda(Payment, 7, 2022)))))
+
   (-Number((await getAmountCustoProdutoVendido(Payment, 7, 2022)) + (await getAmountCustoVendaProduto(Payment, 7, 2022)) + (await getAmountCustoServicoPrestado(Payment, 7, 2022)))));
   /////
  var LucroBrutoAgB =
   ((Number(ReceitaBrutaVendasAgR) + (-Number((await getAmountImpostosSobreVendas(Payment, 8, 2022)) + (await getAmountComissoes(Payment, 8, 2022)) + (await getAmountDescontosIncondicionais(Payment, 8, 2022)) + (await getAmountDevolucaoVenda(Payment, 8, 2022)))))
+
  (-Number((await getAmountCustoProdutoVendido(Payment, 8, 2022)) + (await getAmountCustoVendaProduto(Payment, 8, 2022)) + (await getAmountCustoServicoPrestado(Payment, 8, 2022)))));
  /////
  var LucroBrutoStB =
   ((Number(ReceitaBrutaVendasStR) + (-Number((await getAmountImpostosSobreVendas(Payment, 9, 2022)) + (await getAmountComissoes(Payment, 9, 2022)) + (await getAmountDescontosIncondicionais(Payment, 9, 2022)) + (await getAmountDevolucaoVenda(Payment, 9, 2022)))))
+
  (-Number((await getAmountCustoProdutoVendido(Payment, 9, 2022)) + (await getAmountCustoVendaProduto(Payment, 9, 2022)) + (await getAmountCustoServicoPrestado(Payment, 9, 2022)))))
  ///////
  var LucroBrutoOtB = 
   ((Number(ReceitaBrutaVendasOtR) + (-Number((await getAmountImpostosSobreVendas(Payment, 10, 2022)) + (await getAmountComissoes(Payment, 10, 2022)) + (await getAmountDescontosIncondicionais(Payment, 10, 2022)) + (await getAmountDevolucaoVenda(Payment, 10, 2022)))))
+
   (-Number((await getAmountCustoProdutoVendido(Payment, 10, 2022)) + (await getAmountCustoVendaProduto(Payment, 10, 2022)) + (await getAmountCustoServicoPrestado(Payment, 10, 2022)))))
   ////
  var LucroBrutoNvB =
    ((Number(ReceitaBrutaVendasNvR) + (-Number((await getAmountImpostosSobreVendas(Payment, 11, 2022)) + (await getAmountComissoes(Payment, 11, 2022)) + (await getAmountDescontosIncondicionais(Payment, 11, 2022)) + (await getAmountDevolucaoVenda(Payment, 11, 2022)))))
+
   (-Number((await getAmountCustoProdutoVendido(Payment, 11, 2022)) + (await getAmountCustoVendaProduto(Payment, 11, 2022)) + (await getAmountCustoServicoPrestado(Payment, 11, 2022)))));
   //////
  var LucroBrutoDzB = 
  ((Number(ReceitaBrutaVendasDzR) + (-Number((await getAmountImpostosSobreVendas(Payment, 12, 2022)) + (await getAmountComissoes(Payment, 12, 2022)) + (await getAmountDescontosIncondicionais(Payment, 12, 2022)) + (await getAmountDevolucaoVenda(Payment, 12, 2022)))))
+
   (-Number((await getAmountCustoProdutoVendido(Payment, 12, 2022)) + (await getAmountCustoVendaProduto(Payment, 12, 2022)) + (await getAmountCustoServicoPrestado(Payment, 12, 2022)))));
   //////
  var totalLucroBrutoB = 
  ((Number(totalReceitaBrutaVendasR)) + (-(Number((amountReceitaImpostosSobreVendas['sum(`valor`)'])) + (Number(amountDespesaComissoesVendas['sum(`valor`)'])) + (Number(amountDespesaDescontosIncondicionais['sum(`valor`)'])) + (Number(amountDespesaDevolucaoVenda['sum(`valor`)'])))
+  
  (-(Number(amountCustoProdutoVendido['sum(`valor`)'])) + (Number(amountCustoVendaProduto['sum(`valor`)'])) + (Number(amountCustoServicoPrestado['sum(`valor`)'])))));
  /////////


var LucroBrutoJ = LucroBrutoJB.toLocaleFixed(2);
var LucroBrutoF = LucroBrutoFB.toLocaleFixed(2);
var LucroBrutoMar = LucroBrutoMarB.toLocaleFixed(2);
var LucroBrutoAp = LucroBrutoApB.toLocaleFixed(2);
var LucroBrutoMa = LucroBrutoMaB.toLocaleFixed(2);
var LucroBrutoJn = LucroBrutoJnB.toLocaleFixed(2);
var LucroBrutoJl = LucroBrutoJlB.toLocaleFixed(2);
var LucroBrutoAg = LucroBrutoAgB.toLocaleFixed(2);
var LucroBrutoSt = (LucroBrutoStB).toLocaleFixed(2);
var LucroBrutoOt = (LucroBrutoOtB).toLocaleFixed(2);
var LucroBrutoNv = (LucroBrutoNvB).toLocaleFixed(2);
var LucroBrutoDz = (LucroBrutoDzB).toLocaleFixed(2);
var totalLucroBruto = (totalLucroBrutoB).toLocaleFixed(2);


////////Despesas Comerciais

const getAmountDespesaComercial = async (table, month, year) => {
  const dt1 = new Date(year, month - 1, 1);
  const dt2 = new Date(year, month, 0);

  const row = await table.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasComerciaiId: [600, 601, 602, 603, 604, 605],
      data: {
        [Op.between]: [dt1, dt2],
      },
    },
    raw: true
  });

  return Number(row['sum(`valor`)']);
};

var DespesaComercialJ = (-Number(await getAmountDespesaComercial(Payment, 1, 2022))).toLocaleFixed(2);
var DespesaComercialF = (-Number(await getAmountDespesaComercial(Payment, 2, 2022))).toLocaleFixed(2);
var DespesaComercialMar = (-Number(await getAmountDespesaComercial(Payment, 3, 2022))).toLocaleFixed(2);
var DespesaComercialAp = (-Number(await getAmountDespesaComercial(Payment, 4, 2022))).toLocaleFixed(2);
var DespesaComercialMa = (-Number(await getAmountDespesaComercial(Payment, 5, 2022))).toLocaleFixed(2);
var DespesaComercialJn = (-Number(await getAmountDespesaComercial(Payment, 6, 2022))).toLocaleFixed(2);
var DespesaComercialJl = (-Number(await getAmountDespesaComercial(Payment, 7, 2022))).toLocaleFixed(2);
var DespesaComercialAg = (-Number(await getAmountDespesaComercial(Payment, 8, 2022))).toLocaleFixed(2);
var DespesaComercialSt = (-Number(await getAmountDespesaComercial(Payment, 9, 2022))).toLocaleFixed(2);
var DespesaComercialOt = (-Number(await getAmountDespesaComercial(Payment, 10, 2022))).toLocaleFixed(2);
var DespesaComercialNv = (-Number(await getAmountDespesaComercial(Payment, 11, 2022))).toLocaleFixed(2);
var DespesaComercialDz = (-Number(await getAmountDespesaComercial(Payment, 12, 2022))).toLocaleFixed(2);

//////////////////////total Despesas Comerciais
var amountDespesaComercial = await Payment.findOne({
  attributes: [sequelize.fn("sum", sequelize.col("valor"))],
  where: {
    categoriesDespesasComerciaiId: [600, 601, 602, 603, 604, 605],
    data: {
      [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
    },
  },
  raw: true
});

var totalDespesaComercial = (-Number(amountDespesaComercial['sum(`valor`)'])).toLocaleFixed(2)

//////Despesas Administrativas

const getAmountDespesaAdministrativa = async (table, month, year) => {
  const dt1 = new Date(year, month - 1, 1);
  const dt2 = new Date(year, month, 0);

  const row = await table.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasAdministrativaId: [500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537],
      data: {
        [Op.between]: [dt1, dt2],
      },
    },
    raw: true
  });

  return Number(row['sum(`valor`)']);
};

var DespesaAdministrativaJ = (-Number(await getAmountDespesaAdministrativa(Payment, 1, 2022))).toLocaleFixed(2);
var DespesaAdministrativaF = (-Number(await getAmountDespesaAdministrativa(Payment, 2, 2022))).toLocaleFixed(2);
var DespesaAdministrativaMar = (-Number(await getAmountDespesaAdministrativa(Payment, 3, 2022))).toLocaleFixed(2);
var DespesaAdministrativaAp = (-Number(await getAmountDespesaAdministrativa(Payment, 4, 2022))).toLocaleFixed(2);
var DespesaAdministrativaMa = (-Number(await getAmountDespesaAdministrativa(Payment, 5, 2022))).toLocaleFixed(2);
var DespesaAdministrativaJn = (-Number(await getAmountDespesaAdministrativa(Payment, 6, 2022))).toLocaleFixed(2);
var DespesaAdministrativaJl = (-Number(await getAmountDespesaAdministrativa(Payment, 7, 2022))).toLocaleFixed(2);
var DespesaAdministrativaAg = (-Number(await getAmountDespesaAdministrativa(Payment, 8, 2022))).toLocaleFixed(2);
var DespesaAdministrativaSt = (-Number(await getAmountDespesaAdministrativa(Payment, 9, 2022))).toLocaleFixed(2);
var DespesaAdministrativaOt = (-Number(await getAmountDespesaAdministrativa(Payment, 10, 2022))).toLocaleFixed(2);
var DespesaAdministrativaNv = (-Number(await getAmountDespesaAdministrativa(Payment, 11, 2022))).toLocaleFixed(2);
var DespesaAdministrativaDz = (-Number(await getAmountDespesaAdministrativa(Payment, 12, 2022))).toLocaleFixed(2);

//////////////////////total Despesas Administrativas
var amountDespesaAdministrativa = await Payment.findOne({
  attributes: [sequelize.fn("sum", sequelize.col("valor"))],
  where: {
    categoriesDespesasAdministrativaId: [500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537],
    data: {
      [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
    },
  },
  raw: true
});

var totalDespesaAdministrativa = (-Number(amountDespesaAdministrativa['sum(`valor`)'])).toLocaleFixed(2)

/////Despesas Operacionais

var DespesaOperacionalJO = (-Number((await getAmountDespesaAdministrativa(Payment, 1, 2022)) + (await getAmountDespesaComercial(Payment, 1, 2022))))
var DespesaOperacionalFO = (-Number((await getAmountDespesaAdministrativa(Payment, 2, 2022)) + (await getAmountDespesaComercial(Payment, 2, 2022))))
var DespesaOperacionalMarO = (-Number((await getAmountDespesaAdministrativa(Payment, 3, 2022)) + (await getAmountDespesaComercial(Payment, 3, 2022))))
var DespesaOperacionalApO = (-Number((await getAmountDespesaAdministrativa(Payment, 4, 2022)) + (await getAmountDespesaComercial(Payment, 4, 2022))))
var DespesaOperacionalMaO = (-Number((await getAmountDespesaAdministrativa(Payment, 5, 2022)) + (await getAmountDespesaComercial(Payment, 5, 2022))))
var DespesaOperacionalJnO = (-Number((await getAmountDespesaAdministrativa(Payment, 6, 2022)) + (await getAmountDespesaComercial(Payment, 6, 2022))))
var DespesaOperacionalJlO = (-Number((await getAmountDespesaAdministrativa(Payment, 7, 2022)) + (await getAmountDespesaComercial(Payment, 7, 2022))))
var DespesaOperacionalAgO = (-Number((await getAmountDespesaAdministrativa(Payment, 8, 2022)) + (await getAmountDespesaComercial(Payment, 8, 2022))))
var DespesaOperacionalStO = (-Number((await getAmountDespesaAdministrativa(Payment, 9, 2022)) + (await getAmountDespesaComercial(Payment, 9, 2022))))
var DespesaOperacionalOtO = (-Number((await getAmountDespesaAdministrativa(Payment, 10, 2022)) + (await getAmountDespesaComercial(Payment, 10, 2022))))
var DespesaOperacionalNvO = (-Number((await getAmountDespesaAdministrativa(Payment, 11, 2022)) + (await getAmountDespesaComercial(Payment, 11, 2022))))
var DespesaOperacionalDzO = (-Number((await getAmountDespesaAdministrativa(Payment, 12, 2022)) + (await getAmountDespesaComercial(Payment, 12, 2022))))

var totalDespesaOperacionalO = (-Number((amountDespesaAdministrativa['sum(`valor`)']) + (-Number(amountDespesaComercial['sum(`valor`)']))))
/////
var DespesaOperacionalJ = (DespesaOperacionalJO).toLocaleFixed(2);
var DespesaOperacionalF = (DespesaOperacionalFO).toLocaleFixed(2);
var DespesaOperacionalMar = (DespesaOperacionalMarO).toLocaleFixed(2);
var DespesaOperacionalAp = (DespesaOperacionalApO).toLocaleFixed(2);
var DespesaOperacionalMa = (DespesaOperacionalMaO).toLocaleFixed(2);
var DespesaOperacionalJn = (DespesaOperacionalJnO).toLocaleFixed(2);
var DespesaOperacionalJl = (DespesaOperacionalJlO).toLocaleFixed(2);
var DespesaOperacionalAg = (DespesaOperacionalAgO).toLocaleFixed(2);
var DespesaOperacionalSt = (DespesaOperacionalStO).toLocaleFixed(2);
var DespesaOperacionalOt = (DespesaOperacionalOtO).toLocaleFixed(2);
var DespesaOperacionalNv = (DespesaOperacionalNvO).toLocaleFixed(2);
var DespesaOperacionalDz = (DespesaOperacionalDzO).toLocaleFixed(2);
var totalDespesaOperacional = (totalDespesaOperacionalO).toLocaleFixed(2);



///Lucro / Prejuízo Operacional (Lucro Bruto - Despesas Operacionais)

var LucroPrejuizoOperacionalJL = (Number(LucroBrutoJB) - (-Number(DespesaOperacionalJO)))
var LucroPrejuizoOperacionalFL = (Number(LucroBrutoFB) - (-Number(DespesaOperacionalFO)))
var LucroPrejuizoOperacionalMarL = (Number(LucroBrutoMarB) - (-Number(DespesaOperacionalMarO)))
var LucroPrejuizoOperacionalApL = (Number(LucroBrutoApB) - (-Number(DespesaOperacionalApO)))
var LucroPrejuizoOperacionalMaL = (Number(LucroBrutoMaB) - (-Number(DespesaOperacionalMaO)))
var LucroPrejuizoOperacionalJnL = (Number(LucroBrutoJnB) - (-Number(DespesaOperacionalJnO)))
var LucroPrejuizoOperacionalJlL = (Number(LucroBrutoJlB) - (-Number(DespesaOperacionalJlO)))
var LucroPrejuizoOperacionalAgL = (Number(LucroBrutoAgB) - (-Number(DespesaOperacionalAgO)))
var LucroPrejuizoOperacionalStL = (Number(LucroBrutoStB) - (-Number(DespesaOperacionalStO)))
var LucroPrejuizoOperacionalOtL = (Number(LucroBrutoOtB) - (-Number(DespesaOperacionalOtO)))
var LucroPrejuizoOperacionalNvL = (Number(LucroBrutoNvB) - (-Number(DespesaOperacionalNvO)))
var LucroPrejuizoOperacionalDzL = (Number(LucroBrutoDzB) - (-Number(DespesaOperacionalDzO)))
var totalLucroPrejuizoOperacionalL = (Number(totalLucroBrutoB) - (-Number(totalDespesaOperacionalO)))
/////

var LucroPrejuizoOperacionalJ = (LucroPrejuizoOperacionalJL).toLocaleFixed(2);
var LucroPrejuizoOperacionalF = (LucroPrejuizoOperacionalFL).toLocaleFixed(2);
var LucroPrejuizoOperacionalMar = (LucroPrejuizoOperacionalMarL).toLocaleFixed(2);
var LucroPrejuizoOperacionalAp = (LucroPrejuizoOperacionalApL).toLocaleFixed(2);
var LucroPrejuizoOperacionalMa = (LucroPrejuizoOperacionalMaL).toLocaleFixed(2);
var LucroPrejuizoOperacionalJn = (LucroPrejuizoOperacionalJnL).toLocaleFixed(2);
var LucroPrejuizoOperacionalJl = (LucroPrejuizoOperacionalJlL).toLocaleFixed(2);
var LucroPrejuizoOperacionalAg = (LucroPrejuizoOperacionalAgL).toLocaleFixed(2);
var LucroPrejuizoOperacionalSt = (LucroPrejuizoOperacionalStL).toLocaleFixed(2);
var LucroPrejuizoOperacionalOt = (LucroPrejuizoOperacionalOtL).toLocaleFixed(2);
var LucroPrejuizoOperacionalNv = (LucroPrejuizoOperacionalNvL).toLocaleFixed(2);
var LucroPrejuizoOperacionalDz = (LucroPrejuizoOperacionalDzL).toLocaleFixed(2);
var totalLucroPrejuizoOperacional = (totalLucroPrejuizoOperacionalL).toLocaleFixed(2);
/////

  ////Receitas e Rendimentos Financeiros
  const getAmountReceitaRendimentosFinanceiros = async (table, month, year) => {
    const dt1 = new Date(year, month - 1, 1);
    const dt2 = new Date(year, month, 0);

    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],
      where: {
        categoriesFinancialReceitaId: [300, 301, 302 ],
        data: {
          [Op.between]: [dt1, dt2],
        },
      },
      raw: true
    });

    return Number(row['sum(`valor`)']);
  };
  var ReceitaRendimentosFinanceirosJ = (await getAmountReceitaRendimentosFinanceiros(Receipt, 1, 2022)).toLocaleFixed(2);
  var ReceitaRendimentosFinanceirosF = (await getAmountReceitaRendimentosFinanceiros(Receipt, 2, 2022)).toLocaleFixed(2);
  var ReceitaRendimentosFinanceirosMar = (await getAmountReceitaRendimentosFinanceiros(Receipt, 3, 2022)).toLocaleFixed(2);
  var ReceitaRendimentosFinanceirosAp = (await getAmountReceitaRendimentosFinanceiros(Receipt, 4, 2022)).toLocaleFixed(2);
  var ReceitaRendimentosFinanceirosMa = (await getAmountReceitaRendimentosFinanceiros(Receipt, 5, 2022)).toLocaleFixed(2);
  var ReceitaRendimentosFinanceirosJn = (await getAmountReceitaRendimentosFinanceiros(Receipt, 6, 2022)).toLocaleFixed(2);
  var ReceitaRendimentosFinanceirosJl = (await getAmountReceitaRendimentosFinanceiros(Receipt, 7, 2022)).toLocaleFixed(2);
  var ReceitaRendimentosFinanceirosAg = (await getAmountReceitaRendimentosFinanceiros(Receipt, 8, 2022)).toLocaleFixed(2);
  var ReceitaRendimentosFinanceirosSt = (await getAmountReceitaRendimentosFinanceiros(Receipt, 9, 2022)).toLocaleFixed(2);
  var ReceitaRendimentosFinanceirosOt = (await getAmountReceitaRendimentosFinanceiros(Receipt, 10, 2022)).toLocaleFixed(2);
  var ReceitaRendimentosFinanceirosNv = (await getAmountReceitaRendimentosFinanceiros(Receipt, 11, 2022)).toLocaleFixed(2);
  var ReceitaRendimentosFinanceirosDz = (await getAmountReceitaRendimentosFinanceiros(Receipt, 12, 2022)).toLocaleFixed(2);

  //////////////////////total ReceitaRendimentosFinanceiros
  var amountReceitaRendimentosFinanceiros = await Receipt.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesFinancialReceitaId: [300, 301, 302 ],
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  var totalReceitaRendimentosFinanceiros = (Number(amountReceitaRendimentosFinanceiros['sum(`valor`)'])).toLocaleFixed(2)


  ////Despesas Financeiras
  const getAmountDespesaFinanceiras = async (table, month, year) => {
    const dt1 = new Date(year, month - 1, 1);
    const dt2 = new Date(year, month, 0);

    const row = await table.findOne({
      attributes: [sequelize.fn("sum", sequelize.col("valor"))],
      where: {
        categoriesDespesasFinanceiraId: [1000, 1001, 1002, 1003, 1004, 1005, 1006],
        data: {
          [Op.between]: [dt1, dt2],
        },
      },
      raw: true
    });

    return Number(row['sum(`valor`)']);
  };
  var DespesaFinanceirasJ = (-Number(await getAmountDespesaFinanceiras(Payment, 1, 2022))).toLocaleFixed(2);
  var DespesaFinanceirasF = (-Number(await getAmountDespesaFinanceiras(Payment, 2, 2022))).toLocaleFixed(2);
  var DespesaFinanceirasMar = (-Number(await getAmountDespesaFinanceiras(Payment, 3, 2022))).toLocaleFixed(2);
  var DespesaFinanceirasAp = (-Number(await getAmountDespesaFinanceiras(Payment, 4, 2022))).toLocaleFixed(2);
  var DespesaFinanceirasMa = (-Number(await getAmountDespesaFinanceiras(Payment, 5, 2022))).toLocaleFixed(2);
  var DespesaFinanceirasJn = (-Number(await getAmountDespesaFinanceiras(Payment, 6, 2022))).toLocaleFixed(2);
  var DespesaFinanceirasJl = (-Number(await getAmountDespesaFinanceiras(Payment, 7, 2022))).toLocaleFixed(2);
  var DespesaFinanceirasAg = (-Number(await getAmountDespesaFinanceiras(Payment, 8, 2022))).toLocaleFixed(2);
  var DespesaFinanceirasSt = (-Number(await getAmountDespesaFinanceiras(Payment, 9, 2022))).toLocaleFixed(2);
  var DespesaFinanceirasOt = (-Number(await getAmountDespesaFinanceiras(Payment, 10, 2022))).toLocaleFixed(2);
  var DespesaFinanceirasNv = (-Number(await getAmountDespesaFinanceiras(Payment, 11, 2022))).toLocaleFixed(2);
  var DespesaFinanceirasDz = (-Number(await getAmountDespesaFinanceiras(Payment, 12, 2022))).toLocaleFixed(2);

  //////////////////////total DespesaFinanceiras
  var amountDespesaFinanceiras = await Payment.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasFinanceiraId:  [1000, 1001, 1002, 1003, 1004, 1005, 1006],
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },
    raw: true
  });
  var totalDespesaFinanceiras = (-Number(amountDespesaFinanceiras['sum(`valor`)'])).toLocaleFixed(2)

  ////Receitas e Despesas Financeiras (Receitas e Rendimentos Financeiros - Despesas Financeiras)

  var ReceitaDespesaFinanceirasJR = ((await getAmountReceitaRendimentosFinanceiros(Receipt, 1, 2022)) - (await getAmountDespesaFinanceiras(Payment, 1, 2022)))
  var ReceitaDespesaFinanceirasFR = ((await getAmountReceitaRendimentosFinanceiros(Receipt, 2, 2022)) - (await getAmountDespesaFinanceiras(Payment, 2, 2022)))
  var ReceitaDespesaFinanceirasMarR = ((await getAmountReceitaRendimentosFinanceiros(Receipt, 3, 2022)) - (await getAmountDespesaFinanceiras(Payment, 3, 2022)))
  var ReceitaDespesaFinanceirasApR = ((await getAmountReceitaRendimentosFinanceiros(Receipt, 4, 2022)) - (await getAmountDespesaFinanceiras(Payment, 4, 2022)))
  var ReceitaDespesaFinanceirasMaR = ((await getAmountReceitaRendimentosFinanceiros(Receipt, 5, 2022)) - (await getAmountDespesaFinanceiras(Payment, 5, 2022)))
  var ReceitaDespesaFinanceirasJnR = ((await getAmountReceitaRendimentosFinanceiros(Receipt, 6, 2022)) - (await getAmountDespesaFinanceiras(Payment, 6, 2022)))
  var ReceitaDespesaFinanceirasJlR = ((await getAmountReceitaRendimentosFinanceiros(Receipt, 7, 2022)) - (await getAmountDespesaFinanceiras(Payment, 7, 2022)))
  var ReceitaDespesaFinanceirasAgR = ((await getAmountReceitaRendimentosFinanceiros(Receipt, 8, 2022)) - (await getAmountDespesaFinanceiras(Payment, 8, 2022)))
  var ReceitaDespesaFinanceirasStR = ((await getAmountReceitaRendimentosFinanceiros(Receipt, 9, 2022)) - (await getAmountDespesaFinanceiras(Payment, 9, 2022)))
  var ReceitaDespesaFinanceirasOtR = ((await getAmountReceitaRendimentosFinanceiros(Receipt, 10, 2022)) - (await getAmountDespesaFinanceiras(Payment, 10, 2022)))
  var ReceitaDespesaFinanceirasNvR = ((await getAmountReceitaRendimentosFinanceiros(Receipt, 11, 2022)) - (await getAmountDespesaFinanceiras(Payment, 11, 2022)))
  var ReceitaDespesaFinanceirasDzR = ((await getAmountReceitaRendimentosFinanceiros(Receipt, 12, 2022)) - (await getAmountDespesaFinanceiras(Payment, 12, 2022)))
  var totalReceitaDespesaFinanceirasR = (((amountReceitaRendimentosFinanceiros['sum(`valor`)'])) - ((amountDespesaFinanceiras['sum(`valor`)'])))
  //////////
  var ReceitaDespesaFinanceirasJ = (ReceitaDespesaFinanceirasJR).toLocaleFixed(2);
  var ReceitaDespesaFinanceirasF = (ReceitaDespesaFinanceirasFR).toLocaleFixed(2);
  var ReceitaDespesaFinanceirasMar = (ReceitaDespesaFinanceirasMarR).toLocaleFixed(2);
  var ReceitaDespesaFinanceirasAp = (ReceitaDespesaFinanceirasApR).toLocaleFixed(2);
  var ReceitaDespesaFinanceirasMa = (ReceitaDespesaFinanceirasMaR).toLocaleFixed(2);
  var ReceitaDespesaFinanceirasJn = (ReceitaDespesaFinanceirasJnR).toLocaleFixed(2);
  var ReceitaDespesaFinanceirasJl = (ReceitaDespesaFinanceirasJlR).toLocaleFixed(2);
  var ReceitaDespesaFinanceirasAg = (ReceitaDespesaFinanceirasAgR).toLocaleFixed(2);
  var ReceitaDespesaFinanceirasSt = (ReceitaDespesaFinanceirasStR).toLocaleFixed(2);
  var ReceitaDespesaFinanceirasOt = (ReceitaDespesaFinanceirasOtR).toLocaleFixed(2);
  var ReceitaDespesaFinanceirasNv = (ReceitaDespesaFinanceirasNvR).toLocaleFixed(2);
  var ReceitaDespesaFinanceirasDz = (ReceitaDespesaFinanceirasDzR).toLocaleFixed(2);
  var totalReceitaDespesaFinanceiras = (totalReceitaDespesaFinanceirasR).toLocaleFixed(2);
  //////////


//////Outras Receitas Não Operacionais

const getAmountReceitaNaoOperacional = async (table, month, year) => {
  const dt1 = new Date(year, month - 1, 1);
  const dt2 = new Date(year, month, 0);

  const row = await table.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesOthersReceitaId: [200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212],
      data: {
        [Op.between]: [dt1, dt2],
      },
    },
    raw: true
  });

  return Number(row['sum(`valor`)']);
};
var ReceitaNaoOperacionalJO = (await getAmountReceitaNaoOperacional(Receipt, 1, 2022))
var ReceitaNaoOperacionalFO = (await getAmountReceitaNaoOperacional(Receipt, 2, 2022))
var ReceitaNaoOperacionalMarO = (await getAmountReceitaNaoOperacional(Receipt, 3, 2022))
var ReceitaNaoOperacionalApO = (await getAmountReceitaNaoOperacional(Receipt, 4, 2022))
var ReceitaNaoOperacionalMaO = (await getAmountReceitaNaoOperacional(Receipt, 5, 2022))
var ReceitaNaoOperacionalJnO = (await getAmountReceitaNaoOperacional(Receipt, 6, 2022))
var ReceitaNaoOperacionalJlO = (await getAmountReceitaNaoOperacional(Receipt, 7, 2022))
var ReceitaNaoOperacionalAgO = (await getAmountReceitaNaoOperacional(Receipt, 8, 2022))
var ReceitaNaoOperacionalStO = (await getAmountReceitaNaoOperacional(Receipt, 9, 2022))
var ReceitaNaoOperacionalOtO = (await getAmountReceitaNaoOperacional(Receipt, 10, 2022))
var ReceitaNaoOperacionalNvO = (await getAmountReceitaNaoOperacional(Receipt, 11, 2022))
var ReceitaNaoOperacionalDzO = (await getAmountReceitaNaoOperacional(Receipt, 12, 2022))

//////////////////////total Outras Receitas Não Operacionais
var amountReceitaNaoOperacional = await Receipt.findOne({
  attributes: [sequelize.fn("sum", sequelize.col("valor"))],
  where: {
    categoriesOthersReceitaId: [200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212],
    data: {
      [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
    },
  },
  raw: true
});
var totalReceitaNaoOperacionalO = (Number(amountReceitaNaoOperacional['sum(`valor`)']))
///////

var ReceitaNaoOperacionalJ = (ReceitaNaoOperacionalJO).toLocaleFixed(2);
var ReceitaNaoOperacionalF = (ReceitaNaoOperacionalFO).toLocaleFixed(2);
var ReceitaNaoOperacionalMar = (ReceitaNaoOperacionalMarO).toLocaleFixed(2);
var ReceitaNaoOperacionalAp = (ReceitaNaoOperacionalApO).toLocaleFixed(2);
var ReceitaNaoOperacionalMa = (ReceitaNaoOperacionalMaO).toLocaleFixed(2);
var ReceitaNaoOperacionalJn = (ReceitaNaoOperacionalJnO).toLocaleFixed(2);
var ReceitaNaoOperacionalJl = (ReceitaNaoOperacionalJlO).toLocaleFixed(2);
var ReceitaNaoOperacionalAg = (ReceitaNaoOperacionalAgO).toLocaleFixed(2);
var ReceitaNaoOperacionalSt = (ReceitaNaoOperacionalStO).toLocaleFixed(2);
var ReceitaNaoOperacionalOt = (ReceitaNaoOperacionalOtO).toLocaleFixed(2);
var ReceitaNaoOperacionalNv = (ReceitaNaoOperacionalNvO).toLocaleFixed(2);
var ReceitaNaoOperacionalDz = (ReceitaNaoOperacionalDzO).toLocaleFixed(2);
var totalReceitaNaoOperacional = (totalReceitaNaoOperacionalO).toLocaleFixed(2);


//////Outras Despesas Não Operacionais

const getAmountDespesaNaoOperacional = async (table, month, year) => {
  const dt1 = new Date(year, month - 1, 1);
  const dt2 = new Date(year, month, 0);

  const row = await table.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesOutrasDespesaId: [1100, 1101, 1102, 1103, 1104],
      data: {
        [Op.between]: [dt1, dt2],
      },
    },
    raw: true
  });

  return Number(row['sum(`valor`)']);
};
var DespesaNaoOperacionalJO = (await getAmountDespesaNaoOperacional(Payment, 1, 2022))
var DespesaNaoOperacionalFO = (await getAmountDespesaNaoOperacional(Payment, 2, 2022))
var DespesaNaoOperacionalMarO = (await getAmountDespesaNaoOperacional(Payment, 3, 2022))
var DespesaNaoOperacionalApO = (await getAmountDespesaNaoOperacional(Payment, 4, 2022))
var DespesaNaoOperacionalMaO = (await getAmountDespesaNaoOperacional(Payment, 5, 2022))
var DespesaNaoOperacionalJnO = (await getAmountDespesaNaoOperacional(Payment, 6, 2022))
var DespesaNaoOperacionalJlO = (await getAmountDespesaNaoOperacional(Payment, 7, 2022))
var DespesaNaoOperacionalAgO = (await getAmountDespesaNaoOperacional(Payment, 8, 2022))
var DespesaNaoOperacionalStO = (await getAmountDespesaNaoOperacional(Payment, 9, 2022))
var DespesaNaoOperacionalOtO = (await getAmountDespesaNaoOperacional(Payment, 10, 2022))
var DespesaNaoOperacionalNvO = (await getAmountDespesaNaoOperacional(Payment, 11, 2022))
var DespesaNaoOperacionalDzO = (await getAmountDespesaNaoOperacional(Payment, 12, 2022))

//////////////////////total Outras Despesas Não Operacionais
var amountDespesaNaoOperacional = await Payment.findOne({
  attributes: [sequelize.fn("sum", sequelize.col("valor"))],
  where: {
    categoriesOutrasDespesaId: [1100, 1101, 1102, 1103, 1104],
    data: {
      [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
    },
  },
  raw: true
});
var totalDespesaNaoOperacionalO = (Number(amountDespesaNaoOperacional['sum(`valor`)']))
///////

var DespesaNaoOperacionalJ = (-Number(DespesaNaoOperacionalJO)).toLocaleFixed(2);
var DespesaNaoOperacionalF = (-Number(DespesaNaoOperacionalFO)).toLocaleFixed(2);
var DespesaNaoOperacionalMar = (-Number(DespesaNaoOperacionalMarO)).toLocaleFixed(2);
var DespesaNaoOperacionalAp = (-Number(DespesaNaoOperacionalApO)).toLocaleFixed(2);
var DespesaNaoOperacionalMa = (-Number(DespesaNaoOperacionalMaO)).toLocaleFixed(2);
var DespesaNaoOperacionalJn = (-Number(DespesaNaoOperacionalJnO)).toLocaleFixed(2);
var DespesaNaoOperacionalJl = (-Number(DespesaNaoOperacionalJlO)).toLocaleFixed(2);
var DespesaNaoOperacionalAg = (-Number(DespesaNaoOperacionalAgO)).toLocaleFixed(2);
var DespesaNaoOperacionalSt = (-Number(DespesaNaoOperacionalStO)).toLocaleFixed(2);
var DespesaNaoOperacionalOt = (-Number(DespesaNaoOperacionalOtO)).toLocaleFixed(2);
var DespesaNaoOperacionalNv = (-Number(DespesaNaoOperacionalNvO)).toLocaleFixed(2);
var DespesaNaoOperacionalDz = (-Number(DespesaNaoOperacionalDzO)).toLocaleFixed(2);
var totalDespesaNaoOperacional = (-Number(totalDespesaNaoOperacionalO)).toLocaleFixed(2);

////Outras Receitas e Despesas Não Operacionais (Outras Receitas Não Operacionais - Outras Despesas Não Operacionais)

var OutraReceitaDespesaNaoOperacionalJO = ((ReceitaNaoOperacionalJO) - (DespesaNaoOperacionalJO))
var OutraReceitaDespesaNaoOperacionalFO = ((ReceitaNaoOperacionalFO) - (DespesaNaoOperacionalFO))
var OutraReceitaDespesaNaoOperacionalMarO = ((ReceitaNaoOperacionalMarO) - (DespesaNaoOperacionalMarO))
var OutraReceitaDespesaNaoOperacionalApO = ((ReceitaNaoOperacionalApO) - (DespesaNaoOperacionalApO))
var OutraReceitaDespesaNaoOperacionalMaO = ((ReceitaNaoOperacionalMaO) - (DespesaNaoOperacionalMaO))
var OutraReceitaDespesaNaoOperacionalJnO = ((ReceitaNaoOperacionalJnO) - (DespesaNaoOperacionalJnO))
var OutraReceitaDespesaNaoOperacionalJlO = ((ReceitaNaoOperacionalJlO) - (DespesaNaoOperacionalJlO))
var OutraReceitaDespesaNaoOperacionalAgO = ((ReceitaNaoOperacionalAgO) - (DespesaNaoOperacionalAgO))
var OutraReceitaDespesaNaoOperacionalStO = ((ReceitaNaoOperacionalStO) - (DespesaNaoOperacionalStO))
var OutraReceitaDespesaNaoOperacionalOtO = ((ReceitaNaoOperacionalOtO) - (DespesaNaoOperacionalOtO))
var OutraReceitaDespesaNaoOperacionalNvO = ((ReceitaNaoOperacionalNvO) - (DespesaNaoOperacionalNvO))
var OutraReceitaDespesaNaoOperacionalDzO = ((ReceitaNaoOperacionalDzO) - (DespesaNaoOperacionalDzO))
var totalOutraReceitaDespesaNaoOperacionalO = ((totalReceitaNaoOperacionalO) - (totalDespesaNaoOperacionalO))
///////////////

var OutraReceitaDespesaNaoOperacionalJ = (OutraReceitaDespesaNaoOperacionalJO).toLocaleFixed(2);
var OutraReceitaDespesaNaoOperacionalF = (OutraReceitaDespesaNaoOperacionalFO).toLocaleFixed(2);
var OutraReceitaDespesaNaoOperacionalMar = (OutraReceitaDespesaNaoOperacionalMarO).toLocaleFixed(2);
var OutraReceitaDespesaNaoOperacionalAp = (OutraReceitaDespesaNaoOperacionalApO).toLocaleFixed(2);
var OutraReceitaDespesaNaoOperacionalMa = (OutraReceitaDespesaNaoOperacionalMaO).toLocaleFixed(2);
var OutraReceitaDespesaNaoOperacionalJn = (OutraReceitaDespesaNaoOperacionalJnO).toLocaleFixed(2);
var OutraReceitaDespesaNaoOperacionalJl = (OutraReceitaDespesaNaoOperacionalJlO).toLocaleFixed(2);
var OutraReceitaDespesaNaoOperacionalAg = (OutraReceitaDespesaNaoOperacionalAgO).toLocaleFixed(2);
var OutraReceitaDespesaNaoOperacionalSt = (OutraReceitaDespesaNaoOperacionalStO).toLocaleFixed(2);
var OutraReceitaDespesaNaoOperacionalOt = (OutraReceitaDespesaNaoOperacionalOtO).toLocaleFixed(2);
var OutraReceitaDespesaNaoOperacionalNv = (OutraReceitaDespesaNaoOperacionalNvO).toLocaleFixed(2);
var OutraReceitaDespesaNaoOperacionalDz = (OutraReceitaDespesaNaoOperacionalDzO).toLocaleFixed(2);
var totalOutraReceitaDespesaNaoOperacional = (totalOutraReceitaDespesaNaoOperacionalO).toLocaleFixed(2);
///////////////

////Lucro / Prejuízo Líquido (Lucro / Prejuízo Operacional + Receitas e Despesas Financeiras + Outras Receitas e Despesas Não Operacionais)

var LucroPrejuizoLiquidoJL = ((LucroPrejuizoOperacionalJL) + (ReceitaDespesaFinanceirasJR) + (OutraReceitaDespesaNaoOperacionalJO))
var LucroPrejuizoLiquidoFL = ((LucroPrejuizoOperacionalFL) + (ReceitaDespesaFinanceirasFR) + (OutraReceitaDespesaNaoOperacionalFO))
var LucroPrejuizoLiquidoMarL = ((LucroPrejuizoOperacionalMarL) + (ReceitaDespesaFinanceirasMarR) + (OutraReceitaDespesaNaoOperacionalMarO))
var LucroPrejuizoLiquidoApL = ((LucroPrejuizoOperacionalApL) + (ReceitaDespesaFinanceirasApR) + (OutraReceitaDespesaNaoOperacionalApO))
var LucroPrejuizoLiquidoMaL = ((LucroPrejuizoOperacionalMaL) + (ReceitaDespesaFinanceirasMaR) + (OutraReceitaDespesaNaoOperacionalMaO))
var LucroPrejuizoLiquidoJnL = ((LucroPrejuizoOperacionalJnL) + (ReceitaDespesaFinanceirasJnR) + (OutraReceitaDespesaNaoOperacionalJnO))
var LucroPrejuizoLiquidoJlL = ((LucroPrejuizoOperacionalJlL) + (ReceitaDespesaFinanceirasJlR) + (OutraReceitaDespesaNaoOperacionalJlO))
var LucroPrejuizoLiquidoAgL = ((LucroPrejuizoOperacionalAgL) + (ReceitaDespesaFinanceirasAgR) + (OutraReceitaDespesaNaoOperacionalAgO))
var LucroPrejuizoLiquidoStL = ((LucroPrejuizoOperacionalStL) + (ReceitaDespesaFinanceirasStR) + (OutraReceitaDespesaNaoOperacionalStO))
var LucroPrejuizoLiquidoOtL = ((LucroPrejuizoOperacionalOtL) + (ReceitaDespesaFinanceirasOtR) + (OutraReceitaDespesaNaoOperacionalOtO))
var LucroPrejuizoLiquidoNvL = ((LucroPrejuizoOperacionalNvL) + (ReceitaDespesaFinanceirasNvR) + (OutraReceitaDespesaNaoOperacionalNvO))
var LucroPrejuizoLiquidoDzL = ((LucroPrejuizoOperacionalDzL) + (ReceitaDespesaFinanceirasDzR) + (OutraReceitaDespesaNaoOperacionalDzO))
var totalLucroPrejuizoLiquidoL = ((totalLucroPrejuizoOperacionalL) + (totalReceitaDespesaFinanceirasR) + (totalOutraReceitaDespesaNaoOperacionalO))
///////////////

var LucroPrejuizoLiquidoJ = (LucroPrejuizoLiquidoJL).toLocaleFixed(2);
var LucroPrejuizoLiquidoF = (LucroPrejuizoLiquidoFL).toLocaleFixed(2);
var LucroPrejuizoLiquidoMar = (LucroPrejuizoLiquidoMarL).toLocaleFixed(2);
var LucroPrejuizoLiquidoAp = (LucroPrejuizoLiquidoApL).toLocaleFixed(2);
var LucroPrejuizoLiquidoMa = (LucroPrejuizoLiquidoMaL).toLocaleFixed(2);
var LucroPrejuizoLiquidoJn = (LucroPrejuizoLiquidoJnL).toLocaleFixed(2);
var LucroPrejuizoLiquidoJl = (LucroPrejuizoLiquidoJlL).toLocaleFixed(2);
var LucroPrejuizoLiquidoAg = (LucroPrejuizoLiquidoAgL).toLocaleFixed(2);
var LucroPrejuizoLiquidoSt = (LucroPrejuizoLiquidoStL).toLocaleFixed(2);
var LucroPrejuizoLiquidoOt = (LucroPrejuizoLiquidoOtL).toLocaleFixed(2);
var LucroPrejuizoLiquidoNv = (LucroPrejuizoLiquidoNvL).toLocaleFixed(2);
var LucroPrejuizoLiquidoDz = (LucroPrejuizoLiquidoDzL).toLocaleFixed(2);
var totalLucroPrejuizoLiquido = (totalLucroPrejuizoLiquidoL).toLocaleFixed(2);
///////////////


//////Investimentos em Imobilizado

const getAmountInvestimentoImobilizado = async (table, month, year) => {
  const dt1 = new Date(year, month - 1, 1);
  const dt2 = new Date(year, month, 0);

  const row = await table.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasBensImobilizadoId: [1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 2112, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222],
      data: {
        [Op.between]: [dt1, dt2],
      },
    },
    raw: true
  });

  return Number(row['sum(`valor`)']);
};

var InvestimentoImobilizadoJI = (await getAmountInvestimentoImobilizado(Payment, 1, 2022))
var InvestimentoImobilizadoFI = (await getAmountInvestimentoImobilizado(Payment, 2, 2022))
var InvestimentoImobilizadoMarI = (await getAmountInvestimentoImobilizado(Payment, 3, 2022))
var InvestimentoImobilizadoApI = (await getAmountInvestimentoImobilizado(Payment, 4, 2022))
var InvestimentoImobilizadoMaI = (await getAmountInvestimentoImobilizado(Payment, 5, 2022))
var InvestimentoImobilizadoJnI = (await getAmountInvestimentoImobilizado(Payment, 6, 2022))
var InvestimentoImobilizadoJlI = (await getAmountInvestimentoImobilizado(Payment, 7, 2022))
var InvestimentoImobilizadoAgI = (await getAmountInvestimentoImobilizado(Payment, 8, 2022))
var InvestimentoImobilizadoStI = (await getAmountInvestimentoImobilizado(Payment, 9, 2022))
var InvestimentoImobilizadoOtI = (await getAmountInvestimentoImobilizado(Payment, 10, 2022))
var InvestimentoImobilizadoNvI = (await getAmountInvestimentoImobilizado(Payment, 11, 2022))
var InvestimentoImobilizadoDzI = (await getAmountInvestimentoImobilizado(Payment, 12, 2022))
///

//////////////////////total Investimentos em Imobilizado
var amountInvestimentoImobilizado = await Payment.findOne({
  attributes: [sequelize.fn("sum", sequelize.col("valor"))],
  where: {
    categoriesDespesasBensImobilizadoId: [1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 2112, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222],
    data: {
      [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
    },
  },
  raw: true
});
var totalInvestimentoImobilizadoI = (Number(amountInvestimentoImobilizado['sum(`valor`)']))
///////

var InvestimentoImobilizadoJ = (-Number(InvestimentoImobilizadoJI)).toLocaleFixed(2);
var InvestimentoImobilizadoF = (-Number(InvestimentoImobilizadoFI)).toLocaleFixed(2);
var InvestimentoImobilizadoMar = (-Number(InvestimentoImobilizadoMarI)).toLocaleFixed(2);
var InvestimentoImobilizadoAp = (-Number(InvestimentoImobilizadoApI)).toLocaleFixed(2);
var InvestimentoImobilizadoMa = (-Number(InvestimentoImobilizadoMaI)).toLocaleFixed(2);
var InvestimentoImobilizadoJn = (-Number(InvestimentoImobilizadoJnI)).toLocaleFixed(2);
var InvestimentoImobilizadoJl = (-Number(InvestimentoImobilizadoJlI)).toLocaleFixed(2);
var InvestimentoImobilizadoAg = (-Number(InvestimentoImobilizadoAgI)).toLocaleFixed(2);
var InvestimentoImobilizadoSt = (-Number(InvestimentoImobilizadoStI)).toLocaleFixed(2);
var InvestimentoImobilizadoOt = (-Number(InvestimentoImobilizadoOtI)).toLocaleFixed(2);
var InvestimentoImobilizadoNv = (-Number(InvestimentoImobilizadoNvI)).toLocaleFixed(2);
var InvestimentoImobilizadoDz = (-Number(InvestimentoImobilizadoDzI)).toLocaleFixed(2);

var totalInvestimentoImobilizado = (-Number(totalInvestimentoImobilizadoI)).toLocaleFixed(2);
///

//////Empréstimos e Dívidas

const getAmountEmprestimoDividas = async (table, month, year) => {
  const dt1 = new Date(year, month - 1, 1);
  const dt2 = new Date(year, month, 0);

  const row = await table.findOne({
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    where: {
      categoriesDespesasEmprestimosFinanciamentoId: [1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307],
      data: {
        [Op.between]: [dt1, dt2],
      },
    },
    raw: true
  });

  return Number(row['sum(`valor`)']);
};
var EmprestimoDividasJE = (await getAmountEmprestimoDividas(Payment, 1, 2022))
var EmprestimoDividasFE = (await getAmountEmprestimoDividas(Payment, 2, 2022))
var EmprestimoDividasMarE = (await getAmountEmprestimoDividas(Payment, 3, 2022))
var EmprestimoDividasApE = (await getAmountEmprestimoDividas(Payment, 4, 2022))
var EmprestimoDividasMaE = (await getAmountEmprestimoDividas(Payment, 5, 2022))
var EmprestimoDividasJnE = (await getAmountEmprestimoDividas(Payment, 6, 2022))
var EmprestimoDividasJlE = (await getAmountEmprestimoDividas(Payment, 7, 2022))
var EmprestimoDividasAgE = (await getAmountEmprestimoDividas(Payment, 8, 2022))
var EmprestimoDividasStE = (await getAmountEmprestimoDividas(Payment, 9, 2022))
var EmprestimoDividasOtE = (await getAmountEmprestimoDividas(Payment, 10, 2022))
var EmprestimoDividasNvE = (await getAmountEmprestimoDividas(Payment, 11, 2022))
var EmprestimoDividasDzE = (await getAmountEmprestimoDividas(Payment, 12, 2022))

//////////////////////total Empréstimos e Dívidas
var amountEmprestimoDividas = await Payment.findOne({
  attributes: [sequelize.fn("sum", sequelize.col("valor"))],
  where: {
    categoriesDespesasEmprestimosFinanciamentoId: [1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307],
    data: {
      [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
    },
  },
  raw: true
});
var totalEmprestimoDividasE = (Number(amountEmprestimoDividas['sum(`valor`)']))
///////

var EmprestimoDividasJ = (-Number(EmprestimoDividasJE)).toLocaleFixed(2);
var EmprestimoDividasF = (-Number(EmprestimoDividasFE)).toLocaleFixed(2);
var EmprestimoDividasMar = (-Number(EmprestimoDividasMarE)).toLocaleFixed(2);
var EmprestimoDividasAp = (-Number(EmprestimoDividasApE)).toLocaleFixed(2);
var EmprestimoDividasMa = (-Number(EmprestimoDividasMaE)).toLocaleFixed(2);
var EmprestimoDividasJn = (-Number(EmprestimoDividasJnE)).toLocaleFixed(2);
var EmprestimoDividasJl = (-Number(EmprestimoDividasJlE)).toLocaleFixed(2);
var EmprestimoDividasAg = (-Number(EmprestimoDividasAgE)).toLocaleFixed(2);
var EmprestimoDividasSt = (-Number(EmprestimoDividasStE)).toLocaleFixed(2);
var EmprestimoDividasOt = (-Number(EmprestimoDividasOtE)).toLocaleFixed(2);
var EmprestimoDividasNv = (-Number(EmprestimoDividasNvE)).toLocaleFixed(2);
var EmprestimoDividasDz = (-Number(EmprestimoDividasDzE)).toLocaleFixed(2);

var totalEmprestimoDividas = (-Number(totalEmprestimoDividasE)).toLocaleFixed(2);

/////Despesas com Investimentos e Empréstimos  (Investimentos em Imobilizado + Empréstimos e Dívidas)

var DespesaInvestimentoEmprestimoJD = (-Number((InvestimentoImobilizadoJI) + (EmprestimoDividasJE)))
var DespesaInvestimentoEmprestimoFD = (-Number((InvestimentoImobilizadoFI) + (EmprestimoDividasFE)))
var DespesaInvestimentoEmprestimoMarD = (-Number((InvestimentoImobilizadoMarI) + (EmprestimoDividasMarE)))
var DespesaInvestimentoEmprestimoApD = (-Number((InvestimentoImobilizadoApI) + (EmprestimoDividasApE)))
var DespesaInvestimentoEmprestimoMaD = (-Number((InvestimentoImobilizadoMaI) + (EmprestimoDividasMaE)))
var DespesaInvestimentoEmprestimoJnD = (-Number((InvestimentoImobilizadoJnI) + (EmprestimoDividasJnE)))
var DespesaInvestimentoEmprestimoJlD = (-Number((InvestimentoImobilizadoJlI) + (EmprestimoDividasJlE)))
var DespesaInvestimentoEmprestimoAgD = (-Number((InvestimentoImobilizadoAgI) + (EmprestimoDividasAgE)))
var DespesaInvestimentoEmprestimoStD = (-Number((InvestimentoImobilizadoStI) + (EmprestimoDividasStE)))
var DespesaInvestimentoEmprestimoOtD = (-Number((InvestimentoImobilizadoOtI) + (EmprestimoDividasOtE)))
var DespesaInvestimentoEmprestimoNvD = (-Number((InvestimentoImobilizadoNvI) + (EmprestimoDividasNvE)))
var DespesaInvestimentoEmprestimoDzD = (-Number((InvestimentoImobilizadoDzI) + (EmprestimoDividasDzE)))

var totalDespesaInvestimentoEmprestimoD = (-Number((totalInvestimentoImobilizadoI) + (totalEmprestimoDividasE)))
/////
var DespesaInvestimentoEmprestimoJ = (DespesaInvestimentoEmprestimoJD).toLocaleFixed(2);
var DespesaInvestimentoEmprestimoF = (DespesaInvestimentoEmprestimoFD).toLocaleFixed(2);
var DespesaInvestimentoEmprestimoMar = (DespesaInvestimentoEmprestimoMarD).toLocaleFixed(2);
var DespesaInvestimentoEmprestimoAp = (DespesaInvestimentoEmprestimoApD).toLocaleFixed(2);
var DespesaInvestimentoEmprestimoMa = (DespesaInvestimentoEmprestimoMaD).toLocaleFixed(2);
var DespesaInvestimentoEmprestimoJn = (DespesaInvestimentoEmprestimoJnD).toLocaleFixed(2);
var DespesaInvestimentoEmprestimoJl = (DespesaInvestimentoEmprestimoJlD).toLocaleFixed(2);
var DespesaInvestimentoEmprestimoAg = (DespesaInvestimentoEmprestimoAgD).toLocaleFixed(2);
var DespesaInvestimentoEmprestimoSt = (DespesaInvestimentoEmprestimoStD).toLocaleFixed(2);
var DespesaInvestimentoEmprestimoOt = (DespesaInvestimentoEmprestimoOtD).toLocaleFixed(2);
var DespesaInvestimentoEmprestimoNv = (DespesaInvestimentoEmprestimoNvD).toLocaleFixed(2);
var DespesaInvestimentoEmprestimoDz = (DespesaInvestimentoEmprestimoDzD).toLocaleFixed(2);

var totalDespesaInvestimentoEmprestimo = (totalDespesaInvestimentoEmprestimoD).toLocaleFixed(2);
///

/////Lucro / Prejuízo Final (Lucro / Prejuízo Líquido + Despesas com Investimentos e Empréstimos)

var LucroPrejuizoFinalJ = (Number((LucroPrejuizoLiquidoJL) + (DespesaInvestimentoEmprestimoJD))).toLocaleFixed(2);
var LucroPrejuizoFinalF = (Number((LucroPrejuizoLiquidoFL) + (DespesaInvestimentoEmprestimoFD))).toLocaleFixed(2);
var LucroPrejuizoFinalMar = (Number((LucroPrejuizoLiquidoMarL) + (DespesaInvestimentoEmprestimoMarD))).toLocaleFixed(2);
var LucroPrejuizoFinalAp = (Number((LucroPrejuizoLiquidoApL) + (DespesaInvestimentoEmprestimoApD))).toLocaleFixed(2);
var LucroPrejuizoFinalMa = (Number((LucroPrejuizoLiquidoMaL) + (DespesaInvestimentoEmprestimoMaD))).toLocaleFixed(2);
var LucroPrejuizoFinalJn = (Number((LucroPrejuizoLiquidoJnL) + (DespesaInvestimentoEmprestimoJnD))).toLocaleFixed(2);
var LucroPrejuizoFinalJl = (Number((LucroPrejuizoLiquidoJlL) + (DespesaInvestimentoEmprestimoJlD))).toLocaleFixed(2);
var LucroPrejuizoFinalAg = (Number((LucroPrejuizoLiquidoAgL) + (DespesaInvestimentoEmprestimoAgD))).toLocaleFixed(2);
var LucroPrejuizoFinalSt = (Number((LucroPrejuizoLiquidoStL) + (DespesaInvestimentoEmprestimoStD))).toLocaleFixed(2);
var LucroPrejuizoFinalOt = (Number((LucroPrejuizoLiquidoOtL) + (DespesaInvestimentoEmprestimoOtD))).toLocaleFixed(2);
var LucroPrejuizoFinalNv = (Number((LucroPrejuizoLiquidoNvL) + (DespesaInvestimentoEmprestimoNvD))).toLocaleFixed(2);
var LucroPrejuizoFinalDz = (Number((LucroPrejuizoLiquidoDzL) + (DespesaInvestimentoEmprestimoDzD))).toLocaleFixed(2);

var totalLucroPrejuizoFinal = (Number((totalLucroPrejuizoLiquidoL) + (totalDespesaInvestimentoEmprestimoD))).toLocaleFixed(2);



  Receipt.findAll({

    include: [{
        model: CategoryReceitas,
      }, {
        model: CategoryOthersReceitas,
      }, {
        model: CategoryFinancialReceitas,
      },
      {
        model: CategoryFretesEntregas,
      },
    ],
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
      CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
        CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
          CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
            CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
              CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                  CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                    CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                      CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdministrativas) => {
                        CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                          CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
                            CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
                              CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
                                Payment.findAll({
                                    include: [{
                                        model: CategoryDespesasParcelamentosDividas,
                                      },
                                      {
                                        model: CategoryDespesasEmprestimosFinanciamentos,
                                      },
                                      {
                                        model: CategoryDespesasBensImobilizados,
                                      },
                                      {
                                        model: CategoryOutrasDespesas,
                                      },
                                      {
                                        model: CategoryDespesasFinanceiras,
                                      },
                                      {
                                        model: CategoryDespesasDiretoria,
                                      },
                                      {
                                        model: CategoryDespesasVeiculos,
                                      }, {
                                        model: CategoryDespesasImovel,
                                      }, {
                                        model: CategoryDespesasComerciais,
                                      }, {
                                        model: CategoryDespesasAdministrativas,
                                      }, {
                                        model: CategoryDespesasColaboradores,
                                      }, {
                                        model: CategoryDespesasSalariosEncargos,
                                      },
                                      {
                                        model: CategoryDespesasVendasEServicos,
                                      }, {
                                        model: CategoryDespesasImpostos,
                                      },
                                    ],
                                  })
                                  .then((payments) => {
                                    CategoryReceitas.findAll().then((categoriesreceitas) => {
                                      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
                                        CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
                                          CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
                                            res.render("admin/DREGerencial/index", {
                                              receipts: receipts,
                                              payments: payments,
                                              categoriesreceita: categoriesreceitas,
                                              categoriesOthersReceita: categoriesOthersReceitas,
                                              categoriesFinancialReceita: categoriesFinancialReceitas,
                                              categoriesDespesasImpostos: categoriesDespesasImpostos,
                                              categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                              categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                              categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                              categoriesDespesasAdministrativas: categoriesDespesasAdministrativas,
                                              categoriesDespesasComerciais: categoriesDespesasComerciais,
                                              categoriesDespesasImoveis: categoriesDespesasImoveis,
                                              categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                              categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                              categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                              categoriesOutrasDespesas: categoriesOutrasDespesas,
                                              categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                              categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                              categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,
                                              categoriesFretesEntregas: categoriesFretesEntregas,
                                              totalPayments: totalPayments,
                                              totalReceipts: totalReceipts,
                                              soma: soma,
                                              ReceitaVendasProdutosServicosJ,
                                              ReceitaVendasProdutosServicosF,
                                              ReceitaVendasProdutosServicosMar,
                                              ReceitaVendasProdutosServicosAp,
                                              ReceitaVendasProdutosServicosMa,
                                              ReceitaVendasProdutosServicosJn,
                                              ReceitaVendasProdutosServicosJl,
                                              ReceitaVendasProdutosServicosAg,
                                              ReceitaVendasProdutosServicosSt,
                                              ReceitaVendasProdutosServicosOt,
                                              ReceitaVendasProdutosServicosNv,
                                              ReceitaVendasProdutosServicosDz,
                                              totalReceitaVendasProdutosServicos,
                                              ReceitaFretesEntregasJ,
                                              ReceitaFretesEntregasF,
                                              ReceitaFretesEntregasMar,
                                              ReceitaFretesEntregasAp,
                                              ReceitaFretesEntregasMa,
                                              ReceitaFretesEntregasJn,
                                              ReceitaFretesEntregasJl,
                                              ReceitaFretesEntregasAg,
                                              ReceitaFretesEntregasSt,
                                              ReceitaFretesEntregasOt,
                                              ReceitaFretesEntregasNv,
                                              ReceitaFretesEntregasDz,
                                              totalReceitaFretesEntregas,
                                              ReceitaOperacionaisJ,
                                              ReceitaOperacionaisF,
                                              ReceitaOperacionaisMar,
                                              ReceitaOperacionaisAp,
                                              ReceitaOperacionaisMa,
                                              ReceitaOperacionaisJn,
                                              ReceitaOperacionaisJl,
                                              ReceitaOperacionaisAg,
                                              ReceitaOperacionaisSt,
                                              ReceitaOperacionaisOt,
                                              ReceitaOperacionaisNv,
                                              ReceitaOperacionaisDz,
                                              totalReceitaOperacionais,
                                              ReceitaImpostosSobreVendasJ,
                                              ReceitaImpostosSobreVendasF,
                                              ReceitaImpostosSobreVendasMar,
                                              ReceitaImpostosSobreVendasAp,
                                              ReceitaImpostosSobreVendasMa,
                                              ReceitaImpostosSobreVendasJn,
                                              ReceitaImpostosSobreVendasJl,
                                              ReceitaImpostosSobreVendasAg,
                                              ReceitaImpostosSobreVendasSt,
                                              ReceitaImpostosSobreVendasOt,
                                              ReceitaImpostosSobreVendasNv,
                                              ReceitaImpostosSobreVendasDz,
                                              totalReceitaImpostosSobreVendas,
                                              ReceitaRendimentosFinanceirosJ,
                                              ReceitaRendimentosFinanceirosF,
                                              ReceitaRendimentosFinanceirosMar,
                                              ReceitaRendimentosFinanceirosAp,
                                              ReceitaRendimentosFinanceirosMa,
                                              ReceitaRendimentosFinanceirosJn,
                                              ReceitaRendimentosFinanceirosJl,
                                              ReceitaRendimentosFinanceirosAg,
                                              ReceitaRendimentosFinanceirosSt,
                                              ReceitaRendimentosFinanceirosOt,
                                              ReceitaRendimentosFinanceirosNv,
                                              ReceitaRendimentosFinanceirosDz,
                                              totalReceitaRendimentosFinanceiros,
                                              DespesaFinanceirasJ,
                                              DespesaFinanceirasF,
                                              DespesaFinanceirasMar,
                                              DespesaFinanceirasAp,
                                              DespesaFinanceirasMa,
                                              DespesaFinanceirasJn,
                                              DespesaFinanceirasJl,
                                              DespesaFinanceirasAg,
                                              DespesaFinanceirasSt,
                                              DespesaFinanceirasOt,
                                              DespesaFinanceirasNv,
                                              DespesaFinanceirasDz,
                                              totalDespesaFinanceiras,

                                              ReceitaDespesaFinanceirasJ,
                                              ReceitaDespesaFinanceirasF,
                                              ReceitaDespesaFinanceirasMar,
                                              ReceitaDespesaFinanceirasAp,
                                              ReceitaDespesaFinanceirasMa,
                                              ReceitaDespesaFinanceirasJn,
                                              ReceitaDespesaFinanceirasJl,
                                              ReceitaDespesaFinanceirasAg,
                                              ReceitaDespesaFinanceirasSt,
                                              ReceitaDespesaFinanceirasOt,
                                              ReceitaDespesaFinanceirasNv,
                                              ReceitaDespesaFinanceirasDz,
                                              totalReceitaDespesaFinanceiras,
                                              
                                              ReceitaBrutaVendasJ,
ReceitaBrutaVendasF ,
ReceitaBrutaVendasMar,
ReceitaBrutaVendasAp,
ReceitaBrutaVendasMa,
ReceitaBrutaVendasJn,
ReceitaBrutaVendasJl,
ReceitaBrutaVendasAg,
ReceitaBrutaVendasSt,
ReceitaBrutaVendasOt,
ReceitaBrutaVendasNv,
ReceitaBrutaVendasDz,
totalReceitaBrutaVendas,

DespesaComissoesVendasJ,
DespesaComissoesVendasF,
DespesaComissoesVendasMar,
DespesaComissoesVendasAp,
DespesaComissoesVendasMa,
DespesaComissoesVendasJn,
DespesaComissoesVendasJl,
DespesaComissoesVendasAg,
DespesaComissoesVendasSt,
DespesaComissoesVendasOt,
DespesaComissoesVendasNv,
DespesaComissoesVendasDz,
totalDespesaComissoesVendas,

DespesaDescontosIncondicionaisJ,
DespesaDescontosIncondicionaisF,
DespesaDescontosIncondicionaisMar,
DespesaDescontosIncondicionaisAp,
DespesaDescontosIncondicionaisMa,
DespesaDescontosIncondicionaisJn,
DespesaDescontosIncondicionaisJl,
DespesaDescontosIncondicionaisAg,
DespesaDescontosIncondicionaisSt,
DespesaDescontosIncondicionaisOt,
DespesaDescontosIncondicionaisNv,
DespesaDescontosIncondicionaisDz,
totalDespesasDescontosIncondicionais,

DespesaDevolucaoVendaJ,
DespesaDevolucaoVendaF,
DespesaDevolucaoVendaMar,
DespesaDevolucaoVendaAp,
DespesaDevolucaoVendaMa,
DespesaDevolucaoVendaJn,
DespesaDevolucaoVendaJl,
DespesaDevolucaoVendaAg,
DespesaDevolucaoVendaSt,
DespesaDevolucaoVendaOt,
DespesaDevolucaoVendaNv,
DespesaDevolucaoVendaDz,
totalDespesasDevolucaoVenda,

DeducaoReceitaBrutaJ,
DeducaoReceitaBrutaF,
DeducaoReceitaBrutaMar,
DeducaoReceitaBrutaAp,
DeducaoReceitaBrutaMa,
DeducaoReceitaBrutaJn,
DeducaoReceitaBrutaJl,
DeducaoReceitaBrutaAg,
DeducaoReceitaBrutaSt,
DeducaoReceitaBrutaOt,
DeducaoReceitaBrutaNv,
DeducaoReceitaBrutaDz,
totalDeducaoReceitaBruta,

ReceitaLiquidaVendaJ,
ReceitaLiquidaVendaF,
ReceitaLiquidaVendaMar,
ReceitaLiquidaVendaAp,
ReceitaLiquidaVendaMa,
ReceitaLiquidaVendaJn,
ReceitaLiquidaVendaJl,
ReceitaLiquidaVendaAg,
ReceitaLiquidaVendaSt,
ReceitaLiquidaVendaOt,
ReceitaLiquidaVendaNv,
ReceitaLiquidaVendaDz,
totalReceitaLiquidaVenda,

CustoProdutoVendidoJ,
CustoProdutoVendidoF,
CustoProdutoVendidoMar,
CustoProdutoVendidoAp,
CustoProdutoVendidoMa,
CustoProdutoVendidoJn,
CustoProdutoVendidoJl,
CustoProdutoVendidoAg,
CustoProdutoVendidoSt,
CustoProdutoVendidoOt,
CustoProdutoVendidoNv,
CustoProdutoVendidoDz,
totalCustoProdutoVendido,

CustoVendaProdutoJ,
CustoVendaProdutoF,
CustoVendaProdutoMar,
CustoVendaProdutoAp,
CustoVendaProdutoMa,
CustoVendaProdutoJn,
CustoVendaProdutoJl,
CustoVendaProdutoAg,
CustoVendaProdutoSt,
CustoVendaProdutoOt,
CustoVendaProdutoNv,
CustoVendaProdutoDz,
totalCustoVendaProduto,

CustoServicoPrestadoJ,
CustoServicoPrestadoF,
CustoServicoPrestadoMar,
CustoServicoPrestadoAp,
CustoServicoPrestadoMa,
CustoServicoPrestadoJn,
CustoServicoPrestadoJl,
CustoServicoPrestadoAg,
CustoServicoPrestadoSt,
CustoServicoPrestadoOt,
CustoServicoPrestadoNv,
CustoServicoPrestadoDz,
totalCustoServicoPrestado,

CustoOperacionalJ,
CustoOperacionalF,
CustoOperacionalMar,
CustoOperacionalAp,
CustoOperacionalMa,
CustoOperacionalJn,
CustoOperacionalJl,
CustoOperacionalAg,
CustoOperacionalSt,
CustoOperacionalOt,
CustoOperacionalNv,
CustoOperacionalDz,
totalCustoOperacional,

LucroBrutoJ,
LucroBrutoF,
LucroBrutoMar,
LucroBrutoAp,
LucroBrutoMa,
LucroBrutoJn,
LucroBrutoJl,
LucroBrutoAg,
LucroBrutoSt,
LucroBrutoOt,
LucroBrutoNv,
LucroBrutoDz,
totalLucroBruto,

DespesaComercialJ,
DespesaComercialF,
DespesaComercialMar,
DespesaComercialAp,
DespesaComercialMa,
DespesaComercialJn,
DespesaComercialJl,
DespesaComercialAg,
DespesaComercialSt,
DespesaComercialOt,
DespesaComercialNv,
DespesaComercialDz,
totalDespesaComercial,

DespesaAdministrativaJ,
DespesaAdministrativaF,
DespesaAdministrativaMar,
DespesaAdministrativaAp,
DespesaAdministrativaMa,
DespesaAdministrativaJn,
DespesaAdministrativaJl,
DespesaAdministrativaAg,
DespesaAdministrativaSt,
DespesaAdministrativaOt,
DespesaAdministrativaNv,
DespesaAdministrativaDz,
totalDespesaAdministrativa,

DespesaOperacionalJ,
DespesaOperacionalF,
DespesaOperacionalMar,
DespesaOperacionalAp,
DespesaOperacionalMa,
DespesaOperacionalJn,
DespesaOperacionalJl,
DespesaOperacionalAg,
DespesaOperacionalSt,
DespesaOperacionalOt,
DespesaOperacionalNv,
DespesaOperacionalDz,
totalDespesaOperacional,

LucroPrejuizoOperacionalJ,
LucroPrejuizoOperacionalF,
LucroPrejuizoOperacionalMar,
LucroPrejuizoOperacionalAp,
LucroPrejuizoOperacionalMa,
LucroPrejuizoOperacionalJn,
LucroPrejuizoOperacionalJl,
LucroPrejuizoOperacionalAg,
LucroPrejuizoOperacionalSt,
LucroPrejuizoOperacionalOt,
LucroPrejuizoOperacionalNv,
LucroPrejuizoOperacionalDz,
totalLucroPrejuizoOperacional,


ReceitaNaoOperacionalJ,
ReceitaNaoOperacionalF,
ReceitaNaoOperacionalMar,
ReceitaNaoOperacionalAp,
ReceitaNaoOperacionalMa,
ReceitaNaoOperacionalJn,
ReceitaNaoOperacionalJl,
ReceitaNaoOperacionalAg,
ReceitaNaoOperacionalSt,
ReceitaNaoOperacionalOt,
ReceitaNaoOperacionalNv,
ReceitaNaoOperacionalDz,
totalReceitaNaoOperacional,

DespesaNaoOperacionalJ,
DespesaNaoOperacionalF,
DespesaNaoOperacionalMar,
DespesaNaoOperacionalAp,
DespesaNaoOperacionalMa,
DespesaNaoOperacionalJn,
DespesaNaoOperacionalJl,
DespesaNaoOperacionalAg,
DespesaNaoOperacionalSt,
DespesaNaoOperacionalOt,
DespesaNaoOperacionalNv,
DespesaNaoOperacionalDz,
totalDespesaNaoOperacional,

OutraReceitaDespesaNaoOperacionalJ,
OutraReceitaDespesaNaoOperacionalF,
OutraReceitaDespesaNaoOperacionalMar,
OutraReceitaDespesaNaoOperacionalAp,
OutraReceitaDespesaNaoOperacionalMa,
OutraReceitaDespesaNaoOperacionalJn,
OutraReceitaDespesaNaoOperacionalJl,
OutraReceitaDespesaNaoOperacionalAg,
OutraReceitaDespesaNaoOperacionalSt,
OutraReceitaDespesaNaoOperacionalOt,
OutraReceitaDespesaNaoOperacionalNv,
OutraReceitaDespesaNaoOperacionalDz,
totalOutraReceitaDespesaNaoOperacional,

LucroPrejuizoLiquidoJ,
LucroPrejuizoLiquidoF,
LucroPrejuizoLiquidoMar,
LucroPrejuizoLiquidoAp,
LucroPrejuizoLiquidoMa,
LucroPrejuizoLiquidoJn,
LucroPrejuizoLiquidoJl,
LucroPrejuizoLiquidoAg,
LucroPrejuizoLiquidoSt,
LucroPrejuizoLiquidoOt,
LucroPrejuizoLiquidoNv,
LucroPrejuizoLiquidoDz,
totalLucroPrejuizoLiquido,

InvestimentoImobilizadoJ,
InvestimentoImobilizadoF,
InvestimentoImobilizadoMar,
InvestimentoImobilizadoAp,
InvestimentoImobilizadoMa,
InvestimentoImobilizadoJn,
InvestimentoImobilizadoJl,
InvestimentoImobilizadoAg,
InvestimentoImobilizadoSt,
InvestimentoImobilizadoOt,
InvestimentoImobilizadoNv,
InvestimentoImobilizadoDz,
totalInvestimentoImobilizado,

EmprestimoDividasJ,
EmprestimoDividasF,
EmprestimoDividasMar,
EmprestimoDividasAp,
EmprestimoDividasMa,
EmprestimoDividasJn,
EmprestimoDividasJl,
EmprestimoDividasAg,
EmprestimoDividasSt,
EmprestimoDividasOt,
EmprestimoDividasNv,
EmprestimoDividasDz,
totalEmprestimoDividas,

DespesaInvestimentoEmprestimoJ,
DespesaInvestimentoEmprestimoF,
DespesaInvestimentoEmprestimoMar,
DespesaInvestimentoEmprestimoAp,
DespesaInvestimentoEmprestimoMa,
DespesaInvestimentoEmprestimoJn,
DespesaInvestimentoEmprestimoJl,
DespesaInvestimentoEmprestimoAg,
DespesaInvestimentoEmprestimoSt,
DespesaInvestimentoEmprestimoOt,
DespesaInvestimentoEmprestimoNv,
DespesaInvestimentoEmprestimoDz,
totalDespesaInvestimentoEmprestimo,


LucroPrejuizoFinalJ,
LucroPrejuizoFinalF,
LucroPrejuizoFinalMar,
LucroPrejuizoFinalAp,
LucroPrejuizoFinalMa,
LucroPrejuizoFinalJn,
LucroPrejuizoFinalJl,
LucroPrejuizoFinalAg,
LucroPrejuizoFinalSt,
LucroPrejuizoFinalOt,
LucroPrejuizoFinalNv,
LucroPrejuizoFinalDz,
totalLucroPrejuizoFinal,





                                            });
                                          });
                                        })
                                      })
                                    })
                                  })
                              });
                            })
                          })
                        })
                      })
                    });
                  })
                })
              })
            })
          })
        })
      })
    })
  })
});


app.get("/:slug", (req, res) => {
  var slug = req.params.slug;
  Payment.findOne({
      where: {
        slug: slug,
      },
    })
    .then((payment) => {
      if (payment != undefined) {
        CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
          CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
            CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
              CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
                CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
                  CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                    CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                      CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                        CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                          CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdminstrativas) => {
                            CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                              CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
                                CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
                                  CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
                                    res.render("payment", {
                                      payment: payment,
                                      categoriesDespesasImpostos: categoriesDespesasImpostos,
                                      categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                      categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                      categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                      categoriesDespesasAdminstrativas: categoriesDespesasAdminstrativas,
                                      categoriesDespesasComerciais: categoriesDespesasComerciais,
                                      categoriesDespesasImoveis: categoriesDespesasImoveis,
                                      categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                      categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                      categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                      categoriesOutrasDespesas: categoriesOutrasDespesas,
                                      categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                      categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                      categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,

                                    })
                                  })
                                })
                              })
                            });
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          });
        });
      } else {
        res.redirect("/");
      }
    })
    .catch((err) => {
      res.redirect("/");
    });
});

app.get("/categoryDespesasParcelamentosDividas/:slug", (req, res) => {
  var slug = req.params.slug;
  CategoryDespesasParcelamentosDividas.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Payment
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
          CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
            CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
              CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdministrativas) => {
                  CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                    CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                      CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                        CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                          CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
                            CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
                              CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
                                CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
                                  CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
                                    res.render("admin/payments/index", {
                                      payments: category.payments,
                                      categoriesDespesasImpostos: categoriesDespesasImpostos,
                                      categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                      categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                      categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                      categoriesDespesasAdministrativas: categoriesDespesasAdministrativas,
                                      categoriesDespesasComerciais: categoriesDespesasComerciais,
                                      categoriesDespesasImoveis: categoriesDespesasImoveis,
                                      categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                      categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                      categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                      categoriesOutrasDespesas: categoriesOutrasDespesas,
                                      categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                      categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                      categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,

                                    });
                                  });
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      } else {
        res.redirect("admin/payments/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/payments/index");
    });
});

app.get("/categoryDespesasEmprestimosFinanciamentos/:slug", (req, res) => {
  var slug = req.params.slug;
  CategoryDespesasEmprestimosFinanciamentos.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Payment
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
          CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
            CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
              CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdministrativas) => {
                  CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                    CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                      CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                        CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                          CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
                            CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
                              CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
                                CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
                                  CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
                                    res.render("admin/payments/index", {
                                      payments: category.payments,
                                      categoriesDespesasImpostos: categoriesDespesasImpostos,
                                      categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                      categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                      categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                      categoriesDespesasAdministrativas: categoriesDespesasAdministrativas,
                                      categoriesDespesasComerciais: categoriesDespesasComerciais,
                                      categoriesDespesasImoveis: categoriesDespesasImoveis,
                                      categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                      categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                      categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                      categoriesOutrasDespesas: categoriesOutrasDespesas,
                                      categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                      categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                      categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,

                                    });
                                  });
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      } else {
        res.redirect("admin/payments/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/payments/index");
    });
});

app.get("/categoryDespesasBensImobilizados/:slug", (req, res) => {
  var slug = req.params.slug;
  CategoryDespesasBensImobilizados.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Payment
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
          CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
            CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
              CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdministrativas) => {
                  CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                    CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                      CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                        CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                          CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
                            CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
                              CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
                                CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
                                  CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
                                    res.render("admin/payments/index", {
                                      payments: category.payments,
                                      categoriesDespesasImpostos: categoriesDespesasImpostos,
                                      categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                      categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                      categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                      categoriesDespesasAdministrativas: categoriesDespesasAdministrativas,
                                      categoriesDespesasComerciais: categoriesDespesasComerciais,
                                      categoriesDespesasImoveis: categoriesDespesasImoveis,
                                      categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                      categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                      categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                      categoriesOutrasDespesas: categoriesOutrasDespesas,
                                      categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                      categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                      categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,

                                    });
                                  });
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      } else {
        res.redirect("admin/payments/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/payments/index");
    });
});

app.get("/categoryOutrasDespesas/:slug", (req, res) => {
  var slug = req.params.slug;
  CategoryOutrasDespesas.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Payment
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
          CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
            CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
              CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdministrativas) => {
                  CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                    CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                      CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                        CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                          CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
                            CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
                              CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
                                CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
                                  CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
                                    res.render("admin/payments/index", {
                                      payments: category.payments,
                                      categoriesDespesasImpostos: categoriesDespesasImpostos,
                                      categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                      categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                      categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                      categoriesDespesasAdministrativas: categoriesDespesasAdministrativas,
                                      categoriesDespesasComerciais: categoriesDespesasComerciais,
                                      categoriesDespesasImoveis: categoriesDespesasImoveis,
                                      categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                      categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                      categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                      categoriesOutrasDespesas: categoriesOutrasDespesas,
                                      categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                      categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                      categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,

                                    });
                                  });
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      } else {
        res.redirect("admin/payments/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/payments/index");
    });
});

app.get("/categoryDespesasFinanceiras/:slug", (req, res) => {
  var slug = req.params.slug;
  CategoryDespesasFinanceiras.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Payment
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
          CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
            CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
              CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdministrativas) => {
                  CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                    CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                      CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                        CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                          CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
                            CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
                              CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
                                CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
                                  CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
                                    res.render("admin/payments/index", {
                                      payments: category.payments,
                                      categoriesDespesasImpostos: categoriesDespesasImpostos,
                                      categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                      categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                      categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                      categoriesDespesasAdministrativas: categoriesDespesasAdministrativas,
                                      categoriesDespesasComerciais: categoriesDespesasComerciais,
                                      categoriesDespesasImoveis: categoriesDespesasImoveis,
                                      categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                      categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                      categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                      categoriesOutrasDespesas: categoriesOutrasDespesas,
                                      categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                      categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                      categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,

                                    });
                                  });
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      } else {
        res.redirect("admin/payments/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/payments/index");
    });
});

app.get("/categoryDespesasDiretoria/:slug", (req, res) => {
  var slug = req.params.slug;
  CategoryDespesasDiretoria.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Payment
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
          CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
            CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
              CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdministrativas) => {
                  CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                    CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                      CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                        CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                          CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
                            CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
                              CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
                                CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
                                  CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
                                    res.render("admin/payments/index", {
                                      payments: category.payments,
                                      categoriesDespesasImpostos: categoriesDespesasImpostos,
                                      categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                      categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                      categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                      categoriesDespesasAdministrativas: categoriesDespesasAdministrativas,
                                      categoriesDespesasComerciais: categoriesDespesasComerciais,
                                      categoriesDespesasImoveis: categoriesDespesasImoveis,
                                      categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                      categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                      categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                      categoriesOutrasDespesas: categoriesOutrasDespesas,
                                      categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                      categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                      categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,

                                    });
                                  });
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      } else {
        res.redirect("admin/payments/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/payments/index");
    });
});

app.get("/categoryDespesasVeiculos/:slug", (req, res) => {
  var slug = req.params.slug;
  CategoryDespesasVeiculos.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Payment
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
          CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
            CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
              CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdministrativas) => {
                  CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                    CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                      CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                        CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                          CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
                            CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
                              CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
                                CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
                                  CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
                                    res.render("admin/payments/index", {
                                      payments: category.payments,
                                      categoriesDespesasImpostos: categoriesDespesasImpostos,
                                      categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                      categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                      categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                      categoriesDespesasAdministrativas: categoriesDespesasAdministrativas,
                                      categoriesDespesasComerciais: categoriesDespesasComerciais,
                                      categoriesDespesasImoveis: categoriesDespesasImoveis,
                                      categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                      categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                      categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                      categoriesOutrasDespesas: categoriesOutrasDespesas,
                                      categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                      categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                      categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,

                                    });
                                  });
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      } else {
        res.redirect("admin/payments/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/payments/index");
    });
});

app.get("/categoryDespesasImovel/:slug", (req, res) => {
  var slug = req.params.slug;
  CategoryDespesasImovel.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Payment
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
          CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
            CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
              CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdministrativas) => {
                  CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                    CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                      CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                        CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                          CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
                            CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
                              CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
                                CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
                                  CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
                                    res.render("admin/payments/index", {
                                      payments: category.payments,
                                      categoriesDespesasImpostos: categoriesDespesasImpostos,
                                      categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                      categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                      categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                      categoriesDespesasAdministrativas: categoriesDespesasAdministrativas,
                                      categoriesDespesasComerciais: categoriesDespesasComerciais,
                                      categoriesDespesasImoveis: categoriesDespesasImoveis,
                                      categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                      categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                      categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                      categoriesOutrasDespesas: categoriesOutrasDespesas,
                                      categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                      categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                      categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,

                                    });
                                  });
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      } else {
        res.redirect("admin/payments/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/payments/index");
    });
});

app.get("/categoryDespesasComerciais/:slug", (req, res) => {
  var slug = req.params.slug;
  CategoryDespesasComerciais.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Payment
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
          CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
            CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
              CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdministrativas) => {
                  CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                    CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                      CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                        CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                          CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
                            CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
                              CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
                                CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
                                  CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
                                    res.render("admin/payments/index", {
                                      payments: category.payments,
                                      categoriesDespesasImpostos: categoriesDespesasImpostos,
                                      categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                      categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                      categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                      categoriesDespesasAdministrativas: categoriesDespesasAdministrativas,
                                      categoriesDespesasComerciais: categoriesDespesasComerciais,
                                      categoriesDespesasImoveis: categoriesDespesasImoveis,
                                      categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                      categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                      categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                      categoriesOutrasDespesas: categoriesOutrasDespesas,
                                      categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                      categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                      categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,

                                    });
                                  });
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      } else {
        res.redirect("admin/payments/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/payments/index");
    });
});

app.get("/categoryDespesasAdministrativas/:slug", (req, res) => {
  var slug = req.params.slug;
  CategoryDespesasAdministrativas.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Payment
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
          CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
            CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
              CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdministrativas) => {
                  CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                    CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                      CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                        CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                          CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
                            CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
                              CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
                                CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
                                  CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
                                    res.render("admin/payments/index", {
                                      payments: category.payments,
                                      categoriesDespesasImpostos: categoriesDespesasImpostos,
                                      categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                      categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                      categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                      categoriesDespesasAdministrativas: categoriesDespesasAdministrativas,
                                      categoriesDespesasComerciais: categoriesDespesasComerciais,
                                      categoriesDespesasImoveis: categoriesDespesasImoveis,
                                      categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                      categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                      categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                      categoriesOutrasDespesas: categoriesOutrasDespesas,
                                      categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                      categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                      categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,

                                    });
                                  });
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      } else {
        res.redirect("admin/payments/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/payments/index");
    });
});

app.get("/categoryDespesasColaboradores/:slug", (req, res) => {
  var slug = req.params.slug;
  CategoryDespesasColaboradores.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Payment
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
          CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
            CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
              CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdministrativas) => {
                  CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                    CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                      CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                        CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                          CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
                            CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
                              CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
                                CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
                                  CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
                                    res.render("admin/payments/index", {
                                      payments: category.payments,
                                      categoriesDespesasImpostos: categoriesDespesasImpostos,
                                      categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                      categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                      categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                      categoriesDespesasAdministrativas: categoriesDespesasAdministrativas,
                                      categoriesDespesasComerciais: categoriesDespesasComerciais,
                                      categoriesDespesasImoveis: categoriesDespesasImoveis,
                                      categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                      categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                      categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                      categoriesOutrasDespesas: categoriesOutrasDespesas,
                                      categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                      categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                      categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,

                                    });
                                  });
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      } else {
        res.redirect("admin/payments/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/payments/index");
    });
});

app.get("/categoryDespesasSalariosEncargos/:slug", (req, res) => {
  var slug = req.params.slug;
  CategoryDespesasSalariosEncargos.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Payment
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
          CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
            CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
              CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdministrativas) => {
                  CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                    CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                      CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                        CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                          CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
                            CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
                              CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
                                CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
                                  CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
                                    res.render("admin/payments/index", {
                                      payments: category.payments,
                                      categoriesDespesasImpostos: categoriesDespesasImpostos,
                                      categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                      categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                      categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                      categoriesDespesasAdministrativas: categoriesDespesasAdministrativas,
                                      categoriesDespesasComerciais: categoriesDespesasComerciais,
                                      categoriesDespesasImoveis: categoriesDespesasImoveis,
                                      categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                      categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                      categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                      categoriesOutrasDespesas: categoriesOutrasDespesas,
                                      categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                      categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                      categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,

                                    });
                                  });
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      } else {
        res.redirect("admin/payments/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/payments/index");
    });
});

app.get("/categoryDespesasVendasEServicos/:slug", (req, res) => {
  var slug = req.params.slug;
  CategoryDespesasVendasEServicos.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Payment
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
          CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
            CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
              CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdministrativas) => {
                  CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                    CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                      CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                        CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                          CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
                            CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
                              CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
                                CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
                                  CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
                                    res.render("admin/payments/index", {
                                      payments: category.payments,
                                      categoriesDespesasImpostos: categoriesDespesasImpostos,
                                      categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                      categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                      categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                      categoriesDespesasAdministrativas: categoriesDespesasAdministrativas,
                                      categoriesDespesasComerciais: categoriesDespesasComerciais,
                                      categoriesDespesasImoveis: categoriesDespesasImoveis,
                                      categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                      categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                      categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                      categoriesOutrasDespesas: categoriesOutrasDespesas,
                                      categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                      categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                      categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,

                                    });
                                  });
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      } else {
        res.redirect("admin/payments/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/payments/index");
    });
});


app.get("/categoryDespesasImpostos/:slug", (req, res) => {
  var slug = req.params.slug;
  CategoryDespesasImpostos.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Payment
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryDespesasImpostos.findAll().then((categoriesDespesasImpostos) => {
          CategoryDespesasVendasEServicos.findAll().then((categoriesDespesasVendasEServicos) => {
            CategoryDespesasSalariosEncargos.findAll().then((categoriesDespesasSalariosEncargos) => {
              CategoryDespesasColaboradores.findAll().then((categoriesDespesasColaboradores) => {
                CategoryDespesasAdministrativas.findAll().then((categoriesDespesasAdministrativas) => {
                  CategoryDespesasComerciais.findAll().then((categoriesDespesasComerciais) => {
                    CategoryDespesasImovel.findAll().then((categoriesDespesasImoveis) => {
                      CategoryDespesasVeiculos.findAll().then((categoriesDespesasVeiculos) => {
                        CategoryDespesasDiretoria.findAll().then((categoriesDespesasDiretoria) => {
                          CategoryDespesasFinanceiras.findAll().then((categoriesDespesasFinanceiras) => {
                            CategoryOutrasDespesas.findAll().then((categoriesOutrasDespesas) => {
                              CategoryDespesasBensImobilizados.findAll().then((categoriesDespesasBensImobilizados) => {
                                CategoryDespesasEmprestimosFinanciamentos.findAll().then((categoriesDespesasEmprestimosFinanciamentos) => {
                                  CategoryDespesasParcelamentosDividas.findAll().then((categoriesDespesasParcelamentosDividas) => {
                                    res.render("admin/payments/index", {
                                      payments: category.payments,
                                      categoriesDespesasImpostos: categoriesDespesasImpostos,
                                      categoriesDespesasVendasEServicos: categoriesDespesasVendasEServicos,
                                      categoriesDespesasSalariosEncargos: categoriesDespesasSalariosEncargos,
                                      categoriesDespesasColaboradores: categoriesDespesasColaboradores,
                                      categoriesDespesasAdministrativas: categoriesDespesasAdministrativas,
                                      categoriesDespesasComerciais: categoriesDespesasComerciais,
                                      categoriesDespesasImoveis: categoriesDespesasImoveis,
                                      categoriesDespesasVeiculos: categoriesDespesasVeiculos,
                                      categoriesDespesasDiretoria: categoriesDespesasDiretoria,
                                      categoriesDespesasFinanceiras: categoriesDespesasFinanceiras,
                                      categoriesOutrasDespesas: categoriesOutrasDespesas,
                                      categoriesDespesasBensImobilizados: categoriesDespesasBensImobilizados,
                                      categoriesDespesasEmprestimosFinanciamentos: categoriesDespesasEmprestimosFinanciamentos,
                                      categoriesDespesasParcelamentosDividas: categoriesDespesasParcelamentosDividas,

                                    });
                                  });
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      } else {
        res.redirect("admin/payments/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/payments/index");
    });
});


app.get("/:slug", (req, res) => {
  var slug = req.params.slug;
  Receipt.findOne({
      where: {
        slug: slug,
      },
    })
    .then((receipt) => {
      if (receipt != undefined) {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
            CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
              res.render("receipt", {
                receipt: receipt,
                categoriesreceitas: categoriesreceitas,
                categoriesOthersReceitas: categoriesOthersReceitas,
                categoriesFinancialReceitas: categoriesFinancialReceitas,
              });
            })
          })
        });
      } else {
        res.redirect("/");
      }
    })
    .catch((err) => {
      res.redirect("/");
    });
});

app.get("/categoryReceitas/:slug", adminAuth, async (req, res) => {

  var totalReceipts1 = 0;
  var totalReceipts2 = 0;
  var totalReceipts3 = 0;
  var totalReceipts4 = 0;
  var totalReceipts5 = 0;
  var totalReceipts6 = 0;
  var totalReceipts7 = 0;
  var totalReceipts8 = 0;
  var totalReceipts9 = 0;
  var totalReceipts10 = 0;
  var totalReceipts11 = 0;
  var totalReceipts12 = 0;
  var totalReceipts13 = 0;
  var totalReceipts14 = 0;
  var totalReceipts15 = 0;
  var totalReceipts16 = 0;
  var totalReceipts17 = 0;
  var totalReceipts18 = 0;
  var totalReceipts19 = 0;
  var totalReceipts20 = 0;
  var totalReceipts21 = 0;
  var totalReceipts22 = 0;
  var totalReceipts23 = 0;
  var totalReceipts24 = 0;
  var totalReceipts25 = 0;

  var amount1 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 61,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 62,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 63,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 64,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 65,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 66,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 67,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 68,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 69,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 70,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////categoriesOthersReceitaId

  var amount11 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////categoriesFinancialReceitaId
  var amount24 = await Receipt.findOne({
    where: {
      categoriesFinancialReceitaId: 50,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesFinancialReceitaId: 51,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var slug = req.params.slug;
  CategoryReceitas.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Receipt
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
            CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
              CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
                res.render("admin/receipts/index", {
                  receipts: category.receipts,
                  categoriesreceitas: categoriesreceitas,
                  categoriesOthersReceitas: categoriesOthersReceitas,
                  categoriesFinancialReceitas: categoriesFinancialReceitas,
                  categoriesFretesEntregas: categoriesFretesEntregas,
                  totalReceipts1: totalReceipts1,
                  totalReceipts2: totalReceipts2,
                  totalReceipts3: totalReceipts3,
                  totalReceipts4: totalReceipts4,
                  totalReceipts5: totalReceipts5,
                  totalReceipts6: totalReceipts6,
                  totalReceipts7: totalReceipts7,
                  totalReceipts8: totalReceipts8,
                  totalReceipts9: totalReceipts9,
                  totalReceipts10: totalReceipts10,
                  totalReceipts11: totalReceipts11,
                  totalReceipts12: totalReceipts12,
                  totalReceipts13: totalReceipts13,
                  totalReceipts14: totalReceipts14,
                  totalReceipts15: totalReceipts15,
                  totalReceipts16: totalReceipts16,
                  totalReceipts17: totalReceipts17,
                  totalReceipts18: totalReceipts18,
                  totalReceipts19: totalReceipts19,
                  totalReceipts20: totalReceipts20,
                  totalReceipts21: totalReceipts21,
                  totalReceipts22: totalReceipts22,
                  totalReceipts23: totalReceipts23,
                  totalReceipts24: totalReceipts24,
                  totalReceipts25: totalReceipts25,

                });
              });
            })
          });
        })
      } else {
        res.redirect("admin/receipts/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/receipts/index");
    });
});

app.get("/categoryOthersReceitas/:slug", adminAuth, async (req, res) => {
  var totalReceipts1 = 0;
  var totalReceipts2 = 0;
  var totalReceipts3 = 0;
  var totalReceipts4 = 0;
  var totalReceipts5 = 0;
  var totalReceipts6 = 0;
  var totalReceipts7 = 0;
  var totalReceipts8 = 0;
  var totalReceipts9 = 0;
  var totalReceipts10 = 0;
  var totalReceipts11 = 0;
  var totalReceipts12 = 0;
  var totalReceipts13 = 0;
  var totalReceipts14 = 0;
  var totalReceipts15 = 0;
  var totalReceipts16 = 0;
  var totalReceipts17 = 0;
  var totalReceipts18 = 0;
  var totalReceipts19 = 0;
  var totalReceipts20 = 0;
  var totalReceipts21 = 0;
  var totalReceipts22 = 0;
  var totalReceipts23 = 0;
  var totalReceipts24 = 0;
  var totalReceipts25 = 0;

  var amount1 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 61,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 62,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 63,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 64,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 65,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 66,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 67,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 68,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 69,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 70,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////categoriesOthersReceitaId

  var amount11 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////categoriesFinancialReceitaId
  var amount24 = await Receipt.findOne({
    where: {
      categoriesFinancialReceitaId: 50,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesFinancialReceitaId: 51,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////


  var slug = req.params.slug;
  CategoryOthersReceitas.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Receipt
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
            CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
              CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
                res.render("admin/receipts/index", {
                  receipts: category.receipts,
                  categoriesreceitas: categoriesreceitas,
                  categoriesOthersReceitas: categoriesOthersReceitas,
                  categoriesFinancialReceitas: categoriesFinancialReceitas,
                  categoriesFretesEntregas: categoriesFretesEntregas,
                  totalReceipts1: totalReceipts1,
                  totalReceipts2: totalReceipts2,
                  totalReceipts3: totalReceipts3,
                  totalReceipts4: totalReceipts4,
                  totalReceipts5: totalReceipts5,
                  totalReceipts6: totalReceipts6,
                  totalReceipts7: totalReceipts7,
                  totalReceipts8: totalReceipts8,
                  totalReceipts9: totalReceipts9,
                  totalReceipts10: totalReceipts10,
                  totalReceipts11: totalReceipts11,
                  totalReceipts12: totalReceipts12,
                  totalReceipts13: totalReceipts13,
                  totalReceipts14: totalReceipts14,
                  totalReceipts15: totalReceipts15,
                  totalReceipts16: totalReceipts16,
                  totalReceipts17: totalReceipts17,
                  totalReceipts18: totalReceipts18,
                  totalReceipts19: totalReceipts19,
                  totalReceipts20: totalReceipts20,
                  totalReceipts21: totalReceipts21,
                  totalReceipts22: totalReceipts22,
                  totalReceipts23: totalReceipts23,
                  totalReceipts24: totalReceipts24,
                  totalReceipts25: totalReceipts25,

                });
              })
            });
          });
        })
      } else {
        res.redirect("admin/receipts/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/receipts/index");
    });
});

app.get("/CategoryFinancialReceitas/:slug", adminAuth, async (req, res) => {
  var totalReceipts1 = 0;
  var totalReceipts2 = 0;
  var totalReceipts3 = 0;
  var totalReceipts4 = 0;
  var totalReceipts5 = 0;
  var totalReceipts6 = 0;
  var totalReceipts7 = 0;
  var totalReceipts8 = 0;
  var totalReceipts9 = 0;
  var totalReceipts10 = 0;
  var totalReceipts11 = 0;
  var totalReceipts12 = 0;
  var totalReceipts13 = 0;
  var totalReceipts14 = 0;
  var totalReceipts15 = 0;
  var totalReceipts16 = 0;
  var totalReceipts17 = 0;
  var totalReceipts18 = 0;
  var totalReceipts19 = 0;
  var totalReceipts20 = 0;
  var totalReceipts21 = 0;
  var totalReceipts22 = 0;
  var totalReceipts23 = 0;
  var totalReceipts24 = 0;
  var totalReceipts25 = 0;

  var amount1 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 61,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 62,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 63,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 64,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 65,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 66,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 67,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 68,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 69,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 70,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////categoriesOthersReceitaId

  var amount11 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////categoriesFinancialReceitaId
  var amount24 = await Receipt.findOne({
    where: {
      categoriesFinancialReceitaId: 50,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesFinancialReceitaId: 51,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////


  var slug = req.params.slug;
  CategoryFinancialReceitas.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Receipt
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
            CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
              CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
                res.render("admin/receipts/index", {
                  receipts: category.receipts,
                  categoriesreceitas: categoriesreceitas,
                  categoriesOthersReceitas: categoriesOthersReceitas,
                  categoriesFinancialReceitas: categoriesFinancialReceitas,
                  categoriesFretesEntregas: categoriesFretesEntregas,
                  totalReceipts1: totalReceipts1,
                  totalReceipts2: totalReceipts2,
                  totalReceipts3: totalReceipts3,
                  totalReceipts4: totalReceipts4,
                  totalReceipts5: totalReceipts5,
                  totalReceipts6: totalReceipts6,
                  totalReceipts7: totalReceipts7,
                  totalReceipts8: totalReceipts8,
                  totalReceipts9: totalReceipts9,
                  totalReceipts10: totalReceipts10,
                  totalReceipts11: totalReceipts11,
                  totalReceipts12: totalReceipts12,
                  totalReceipts13: totalReceipts13,
                  totalReceipts14: totalReceipts14,
                  totalReceipts15: totalReceipts15,
                  totalReceipts16: totalReceipts16,
                  totalReceipts17: totalReceipts17,
                  totalReceipts18: totalReceipts18,
                  totalReceipts19: totalReceipts19,
                  totalReceipts20: totalReceipts20,
                  totalReceipts21: totalReceipts21,
                  totalReceipts22: totalReceipts22,
                  totalReceipts23: totalReceipts23,
                  totalReceipts24: totalReceipts24,
                  totalReceipts25: totalReceipts25,

                });
              })
            });
          });
        })
      } else {
        res.redirect("admin/receipts/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/receipts/index");
    });
});

app.get("/CategoryFretesEntregas/:slug", adminAuth, async (req, res) => {
  var totalReceipts1 = 0;
  var totalReceipts2 = 0;
  var totalReceipts3 = 0;
  var totalReceipts4 = 0;
  var totalReceipts5 = 0;
  var totalReceipts6 = 0;
  var totalReceipts7 = 0;
  var totalReceipts8 = 0;
  var totalReceipts9 = 0;
  var totalReceipts10 = 0;
  var totalReceipts11 = 0;
  var totalReceipts12 = 0;
  var totalReceipts13 = 0;
  var totalReceipts14 = 0;
  var totalReceipts15 = 0;
  var totalReceipts16 = 0;
  var totalReceipts17 = 0;
  var totalReceipts18 = 0;
  var totalReceipts19 = 0;
  var totalReceipts20 = 0;
  var totalReceipts21 = 0;
  var totalReceipts22 = 0;
  var totalReceipts23 = 0;
  var totalReceipts24 = 0;
  var totalReceipts25 = 0;

  var amount1 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 61,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 62,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 63,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 64,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 65,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 66,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 67,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 68,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 69,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 70,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////categoriesOthersReceitaId

  var amount11 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesOthersReceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////categoriesFinancialReceitaId
  var amount24 = await Receipt.findOne({
    where: {
      categoriesFinancialReceitaId: 50,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesFinancialReceitaId: 51,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////


  var slug = req.params.slug;
  CategoryFretesEntregas.findOne({
      where: {
        slug: slug,
      },
      include: [{
        model: Receipt
      }],
    })
    .then((category) => {
      if (category != undefined) {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
            CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
              CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
                res.render("admin/receipts/index", {
                  receipts: category.receipts,
                  categoriesreceitas: categoriesreceitas,
                  categoriesOthersReceitas: categoriesOthersReceitas,
                  categoriesFinancialReceitas: categoriesFinancialReceitas,
                  categoriesFretesEntregas: categoriesFretesEntregas,
                  totalReceipts1: totalReceipts1,
                  totalReceipts2: totalReceipts2,
                  totalReceipts3: totalReceipts3,
                  totalReceipts4: totalReceipts4,
                  totalReceipts5: totalReceipts5,
                  totalReceipts6: totalReceipts6,
                  totalReceipts7: totalReceipts7,
                  totalReceipts8: totalReceipts8,
                  totalReceipts9: totalReceipts9,
                  totalReceipts10: totalReceipts10,
                  totalReceipts11: totalReceipts11,
                  totalReceipts12: totalReceipts12,
                  totalReceipts13: totalReceipts13,
                  totalReceipts14: totalReceipts14,
                  totalReceipts15: totalReceipts15,
                  totalReceipts16: totalReceipts16,
                  totalReceipts17: totalReceipts17,
                  totalReceipts18: totalReceipts18,
                  totalReceipts19: totalReceipts19,
                  totalReceipts20: totalReceipts20,
                  totalReceipts21: totalReceipts21,
                  totalReceipts22: totalReceipts22,
                  totalReceipts23: totalReceipts23,
                  totalReceipts24: totalReceipts24,
                  totalReceipts25: totalReceipts25,

                });
              })
            });
          });
        })
      } else {
        res.redirect("admin/receipts/index");
      }
    })
    .catch((err) => {
      res.redirect("admin/receipts/index");
    });
});


app.listen(port, () => {
  console.log("O servidor está rodando legal!");
});
