const express = require("express");
const router = express.Router();
const CategoryDespesasImpostos = require("../categoriesDespesas/impostosVendas&Servicos/CategoryDespesasImpostos");
const CategoryDespesasVendasEServicos = require("../categoriesDespesas/despesasVendas&Servicos/CategoryDespesasVendas&Servicos");
const CategoryDespesasSalariosEncargos = require("../categoriesDespesas/despesasSalarios&Encargos/CategoryDespesasSalariosEncargos");
const CategoryDespesasColaboradores = require("../categoriesDespesas/despesasColaboradores/CategoryDespesasColaboradores");
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
const Payment = require("./Payment");
const slugify = require("slugify");
const adminAuth = require("../middlewares/adminAuth");
const connection = require("../database/database");
const sequelize = require("sequelize");
const {
  Op
} = require("sequelize");


//lista todos os pagamento
router.get("/admin/payments", adminAuth, async (req, res, next) => {

  var totalPayments1 = 0;
  var totalPayments2 = 0;
  var totalPayments3 = 0;
  var totalPayments4 = 0;
  var totalPayments5 = 0;
  var totalPayments6 = 0;
  var totalPayments7 = 0;
  var totalPayments8 = 0;
  var totalPayments9 = 0;
  var totalPayments10 = 0;
  var totalPayments11 = 0;
  var totalPayments12 = 0;
  var totalPayments13 = 0;
  var totalPayments14 = 0;


   //formatar numeros em valores decimais (.toLocaleFixed(2))
  Number.prototype.toLocaleFixed = function (n) {
    return this.toLocaleString(undefined, {
      minimumFractionDigits: n,
      maximumFractionDigits: n
    });
  };
  /////categoriesDespesasImpostoId

  var amount1 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: [100, 101, 102, 103],
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Payment.findOne({
    where: {
      categoriesDespesasVendasEServicoId: [200, 201, 202, 203, 204, 205, 206, 207],
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Payment.findOne({
    where: {
      categoriesDespesasSalariosEncargoId: [400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415],
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Payment.findOne({
    where: {
      categoriesDespesasColaboradoreId: [300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314],
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Payment.findOne({
    where: {
      categoriesDespesasAdministrativaId: [500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537],
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////categoriesDespesasVendasEServicoId
  var amount6 = await Payment.findOne({
    where: {
      categoriesDespesasComerciaiId: [600, 601, 602, 603, 604, 605, 606],
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Payment.findOne({
    where: {
      categoriesDespesasImoveiId: [700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714],
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments7 = amount7['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount8 = await Payment.findOne({
    where: {
      categoriesDespesasVeiculoId: [800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810],
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments8 = amount8['sum(`valor`)']

  /////////////////////////////////////////////////////////////////

  var amount9 = await Payment.findOne({
    where: {
      categoriesDespesasDiretoriumId: [900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910],
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Payment.findOne({
    where: {
      categoriesDespesasFinanceiraId: [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010],
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////categoriesDespesasSalariosEncargoId
  var amount11 = await Payment.findOne({
    where: {
      categoriesOutrasDespesaId: [1100, 1101, 1102, 1103, 1104, 1105, 1106],
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Payment.findOne({
    where: {
      categoriesDespesasBensImobilizadoId: [1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1220, 1221],
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Payment.findOne({
    where: {
      categoriesDespesasEmprestimosFinanciamentoId: [1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309],
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Payment.findOne({
    where: {
      categoriesDespesasParcelamentosDividaId: [1400, 1401, 1402, 1403, 1404, 1405, 1406],
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////


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
    order: [
      ["createdAt", "DESC"]
    ],
    raw: true,
    nest: true,
  }).then((payments) => {
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
                                res.render("admin/payments/index", {
                                  payments: payments,
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
                                  totalPayments1: totalPayments1,
                                  totalPayments2: totalPayments2,
                                  totalPayments3: totalPayments3,
                                  totalPayments4: totalPayments4,
                                  totalPayments5: totalPayments5,
                                  totalPayments6: totalPayments6,
                                  totalPayments7: totalPayments7,
                                  totalPayments8: totalPayments8,
                                  totalPayments9: totalPayments9,
                                  totalPayments10: totalPayments10,
                                  totalPayments11: totalPayments11,
                                  totalPayments12: totalPayments12,
                                  totalPayments13: totalPayments13,
                                  totalPayments14: totalPayments14,

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
});

router.get("/admin/payments/new", adminAuth, (req, res) => {
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
                              res.render("admin/payments/new", {
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
});

router.post("/payments/save", adminAuth, (req, res) => {

  var data = req.body.data;
  var fornecedor = req.body.fornecedor;
  var valor = req.body.valor;
  var obs = req.body.obs;
  var category = req.body.category;

  Payment.bulkCreate(
    [{
        data: data,
        fornecedor: fornecedor,
        slug: slugify(fornecedor),
        valor: valor,
        obs: obs,
        categoriesDespesasImpostoId: category,
      },
      {
        data: data,
        fornecedor: fornecedor,
        slug: slugify(fornecedor),
        valor: valor,
        obs: obs,
        categoriesDespesasVendasEServicoId: category
      },
      {
        data: data,
        fornecedor: fornecedor,
        slug: slugify(fornecedor),
        valor: valor,
        obs: obs,
        categoriesDespesasSalariosEncargoId: category
      },
      {
        data: data,
        fornecedor: fornecedor,
        slug: slugify(fornecedor),
        valor: valor,
        obs: obs,
        categoriesDespesasColaboradoreId: category
      },
      {
        data: data,
        fornecedor: fornecedor,
        slug: slugify(fornecedor),
        valor: valor,
        obs: obs,
        categoriesDespesasAdministrativaId: category
      }, {
        data: data,
        fornecedor: fornecedor,
        slug: slugify(fornecedor),
        valor: valor,
        obs: obs,
        categoriesDespesasComerciaiId: category
      }, {
        data: data,
        fornecedor: fornecedor,
        slug: slugify(fornecedor),
        valor: valor,
        obs: obs,
        categoriesDespesasImoveiId: category
      },
      {
        data: data,
        fornecedor: fornecedor,
        slug: slugify(fornecedor),
        valor: valor,
        obs: obs,
        categoriesDespesasVeiculoId: category
      }, {
        data: data,
        fornecedor: fornecedor,
        slug: slugify(fornecedor),
        valor: valor,
        obs: obs,
        categoriesDespesasDiretoriumId: category
      }, {
        data: data,
        fornecedor: fornecedor,
        slug: slugify(fornecedor),
        valor: valor,
        obs: obs,
        categoriesDespesasFinanceiraId: category
      },
      {
        data: data,
        fornecedor: fornecedor,
        slug: slugify(fornecedor),
        valor: valor,
        obs: obs,
        categoriesOutrasDespesaId: category
      }, {
        data: data,
        fornecedor: fornecedor,
        slug: slugify(fornecedor),
        valor: valor,
        obs: obs,
        categoriesDespesasBensImobilizadoId: category
      }, {
        data: data,
        fornecedor: fornecedor,
        slug: slugify(fornecedor),
        valor: valor,
        obs: obs,
        categoriesDespesasEmprestimosFinanciamentoId: category
      },
      {
        data: data,
        fornecedor: fornecedor,
        slug: slugify(fornecedor),
        valor: valor,
        obs: obs,
        categoriesDespesasParcelamentosDividaId: category
      },

    ], {
      ignoreDuplicates: true,
    }

  ).then(() => {
    res.redirect("/admin/payments");
  });
})

router.post("/payments/delete", adminAuth, (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      Payment.destroy({
        where: {
          id: id,
        },
      }).then(() => {
        res.redirect("/admin/payments");
      });
    } else {
      // NÃO FOR UM NÚMERO
      res.redirect("/admin/payments");
    }
  } else {
    // NULL
    res.redirect("/admin/payments");
  }
});

router.get("/admin/payments/edit/:id", (req, res) => {
  var id = req.params.id;
  Payment.findByPk(id)
    .then((payment) => {
      if (payment != undefined) {
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
                                    res.render("admin/payments/edit", {
                                      payment: payment,
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
      } else {
        res.redirect("/");
      }
    })
    .catch((err) => {
      res.redirect("/");
    });
});

router.post("/payments/update", (req, res) => {
  var id = req.body.id;
  var data = req.body.data;
  var fornecedor = req.body.fornecedor;
  var valor = req.body.valor;
  var obs = req.body.obs;

  Payment.update({
      data: data,
      fornecedor,
      valor,
      obs: obs,
      slug: slugify(fornecedor),

    }, {
      where: {
        id: id,
      },
    })
    .then(() => {
      res.redirect("/admin/payments");
    })
    .catch((err) => {
      res.send("erro:" + err);
    });
});

router.get("/payments/page/:num", (req, res) => {
  var page = req.params.num;
  var offset = 0;

  if (isNaN(page) || page == 1) {
    offset = 0;
  } else {
    offset = (parseInt(page) - 1) * 20;
  }

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
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    offset: offset,
  }).then((payments) => {
    var next;
    if (offset + 2 >= payments.count) {
      next = false;
    } else {
      next = true;
    }

    var result = {
      page: parseInt(page),
      next: next,
      payments: payments,
    };

    CategoryDespesas.findAll().then((categoriesdespesas) => {
      res.render("admin/payments/page", {
        result: result,
        payments: payments,
        categoriesdespesas: categoriesdespesas,
      });
    });
  })
});

router.get("/admin/payments/filter/2021", adminAuth, async (req, res, next) => {

 
 
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
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Jan 01 2021"), new Date("Dec 31 2021")],
      },
    },

  }).then((payments) => {

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
                                res.render("admin/payments/filter", {
                                  payments: payments,
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
});

router.get("/admin/payments/filter/2022", adminAuth, async (req, res, next) => {

  
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
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Dec 31 2022")],
      },
    },

  }).then((payments) => {

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
                                res.render("admin/payments/filter", {
                                  payments: payments,
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
});

router.get("/admin/payments/filter/2023", adminAuth, async (req, res, next) => {



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
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Jan 01 2023"), new Date("Dec 31 2023")],
      },
    },

  }).then((payments) => {

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
                                res.render("admin/payments/index", {
                                  payments: payments,
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
});

router.get("/admin/payments/filter/janeiro", adminAuth, async (req, res, next) => {
  var totalPayments = 0;




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
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Jan 31 2022")],
      },
    },
  }).then((payments) => {

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
                                res.render("admin/payments/index", {
                                  payments: payments,
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
});

router.get("/admin/payments/filter/fevereiro", adminAuth, async (req, res, next) => {

  var totalPayments1 = 0;
  var totalPayments2 = 0;
  var totalPayments3 = 0;
  var totalPayments4 = 0;
  var totalPayments5 = 0;
  var totalPayments6 = 0;
  var totalPayments7 = 0;
  var totalPayments8 = 0;
  var totalPayments9 = 0;
  var totalPayments10 = 0;
  var totalPayments11 = 0;
  var totalPayments12 = 0;
  var totalPayments13 = 0;
  var totalPayments14 = 0;
  var totalPayments15 = 0;
  var totalPayments16 = 0;
  var totalPayments17 = 0;
  var totalPayments18 = 0;
  var totalPayments19 = 0;
  var totalPayments20 = 0;
  var totalPayments21 = 0;
  var totalPayments22 = 0;
  var totalPayments23 = 0;
  var totalPayments24 = 0;
  var totalPayments25 = 0;

  var amount1 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments7 = amount7['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount8 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments8 = amount8['sum(`valor`)']

  /////////////////////////////////////////////////////////////////

  var amount9 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount11 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



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
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Feb 01 2022"), new Date("Feb 30 2022")],
      },
    },

  }).then((payments) => {

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
                                res.render("admin/payments/index", {
                                  payments: payments,
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
                                  totalPayments1: totalPayments1,
                                  totalPayments2: totalPayments2,
                                  totalPayments3: totalPayments3,
                                  totalPayments4: totalPayments4,
                                  totalPayments5: totalPayments5,
                                  totalPayments6: totalPayments6,
                                  totalPayments7: totalPayments7,
                                  totalPayments8: totalPayments8,
                                  totalPayments9: totalPayments9,
                                  totalPayments10: totalPayments10,
                                  totalPayments11: totalPayments11,
                                  totalPayments12: totalPayments12,
                                  totalPayments13: totalPayments13,
                                  totalPayments14: totalPayments14,
                                  totalPayments15: totalPayments15,
                                  totalPayments16: totalPayments16,
                                  totalPayments17: totalPayments17,
                                  totalPayments18: totalPayments18,
                                  totalPayments19: totalPayments19,
                                  totalPayments20: totalPayments20,
                                  totalPayments21: totalPayments21,
                                  totalPayments22: totalPayments22,
                                  totalPayments23: totalPayments23,
                                  totalPayments24: totalPayments24,
                                  totalPayments25: totalPayments25,


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
});

router.get("/admin/payments/filter/marco", adminAuth, async (req, res, next) => {

  var totalPayments1 = 0;
  var totalPayments2 = 0;
  var totalPayments3 = 0;
  var totalPayments4 = 0;
  var totalPayments5 = 0;
  var totalPayments6 = 0;
  var totalPayments7 = 0;
  var totalPayments8 = 0;
  var totalPayments9 = 0;
  var totalPayments10 = 0;
  var totalPayments11 = 0;
  var totalPayments12 = 0;
  var totalPayments13 = 0;
  var totalPayments14 = 0;
  var totalPayments15 = 0;
  var totalPayments16 = 0;
  var totalPayments17 = 0;
  var totalPayments18 = 0;
  var totalPayments19 = 0;
  var totalPayments20 = 0;
  var totalPayments21 = 0;
  var totalPayments22 = 0;
  var totalPayments23 = 0;
  var totalPayments24 = 0;
  var totalPayments25 = 0;

  var amount1 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments7 = amount7['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount8 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments8 = amount8['sum(`valor`)']

  /////////////////////////////////////////////////////////////////

  var amount9 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount11 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



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
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Mar 01 2022"), new Date("Mar 30 2022")],
      },
    },

  }).then((payments) => {

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
                                res.render("admin/payments/index", {
                                  payments: payments,
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
                                  totalPayments1: totalPayments1,
                                  totalPayments2: totalPayments2,
                                  totalPayments3: totalPayments3,
                                  totalPayments4: totalPayments4,
                                  totalPayments5: totalPayments5,
                                  totalPayments6: totalPayments6,
                                  totalPayments7: totalPayments7,
                                  totalPayments8: totalPayments8,
                                  totalPayments9: totalPayments9,
                                  totalPayments10: totalPayments10,
                                  totalPayments11: totalPayments11,
                                  totalPayments12: totalPayments12,
                                  totalPayments13: totalPayments13,
                                  totalPayments14: totalPayments14,
                                  totalPayments15: totalPayments15,
                                  totalPayments16: totalPayments16,
                                  totalPayments17: totalPayments17,
                                  totalPayments18: totalPayments18,
                                  totalPayments19: totalPayments19,
                                  totalPayments20: totalPayments20,
                                  totalPayments21: totalPayments21,
                                  totalPayments22: totalPayments22,
                                  totalPayments23: totalPayments23,
                                  totalPayments24: totalPayments24,
                                  totalPayments25: totalPayments25,


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
});
router.get("/admin/payments/filter/abril", adminAuth, async (req, res, next) => {

  var totalPayments1 = 0;
  var totalPayments2 = 0;
  var totalPayments3 = 0;
  var totalPayments4 = 0;
  var totalPayments5 = 0;
  var totalPayments6 = 0;
  var totalPayments7 = 0;
  var totalPayments8 = 0;
  var totalPayments9 = 0;
  var totalPayments10 = 0;
  var totalPayments11 = 0;
  var totalPayments12 = 0;
  var totalPayments13 = 0;
  var totalPayments14 = 0;
  var totalPayments15 = 0;
  var totalPayments16 = 0;
  var totalPayments17 = 0;
  var totalPayments18 = 0;
  var totalPayments19 = 0;
  var totalPayments20 = 0;
  var totalPayments21 = 0;
  var totalPayments22 = 0;
  var totalPayments23 = 0;
  var totalPayments24 = 0;
  var totalPayments25 = 0;

  var amount1 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments7 = amount7['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount8 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments8 = amount8['sum(`valor`)']

  /////////////////////////////////////////////////////////////////

  var amount9 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount11 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



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
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Apr 01 2022"), new Date("Apr 30 2022")],
      },
    },

  }).then((payments) => {

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
                                res.render("admin/payments/index", {
                                  payments: payments,
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
                                  totalPayments1: totalPayments1,
                                  totalPayments2: totalPayments2,
                                  totalPayments3: totalPayments3,
                                  totalPayments4: totalPayments4,
                                  totalPayments5: totalPayments5,
                                  totalPayments6: totalPayments6,
                                  totalPayments7: totalPayments7,
                                  totalPayments8: totalPayments8,
                                  totalPayments9: totalPayments9,
                                  totalPayments10: totalPayments10,
                                  totalPayments11: totalPayments11,
                                  totalPayments12: totalPayments12,
                                  totalPayments13: totalPayments13,
                                  totalPayments14: totalPayments14,
                                  totalPayments15: totalPayments15,
                                  totalPayments16: totalPayments16,
                                  totalPayments17: totalPayments17,
                                  totalPayments18: totalPayments18,
                                  totalPayments19: totalPayments19,
                                  totalPayments20: totalPayments20,
                                  totalPayments21: totalPayments21,
                                  totalPayments22: totalPayments22,
                                  totalPayments23: totalPayments23,
                                  totalPayments24: totalPayments24,
                                  totalPayments25: totalPayments25,


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
});
router.get("/admin/payments/filter/maio", adminAuth, async (req, res, next) => {

  var totalPayments1 = 0;
  var totalPayments2 = 0;
  var totalPayments3 = 0;
  var totalPayments4 = 0;
  var totalPayments5 = 0;
  var totalPayments6 = 0;
  var totalPayments7 = 0;
  var totalPayments8 = 0;
  var totalPayments9 = 0;
  var totalPayments10 = 0;
  var totalPayments11 = 0;
  var totalPayments12 = 0;
  var totalPayments13 = 0;
  var totalPayments14 = 0;
  var totalPayments15 = 0;
  var totalPayments16 = 0;
  var totalPayments17 = 0;
  var totalPayments18 = 0;
  var totalPayments19 = 0;
  var totalPayments20 = 0;
  var totalPayments21 = 0;
  var totalPayments22 = 0;
  var totalPayments23 = 0;
  var totalPayments24 = 0;
  var totalPayments25 = 0;

  var amount1 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments7 = amount7['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount8 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments8 = amount8['sum(`valor`)']

  /////////////////////////////////////////////////////////////////

  var amount9 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount11 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



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
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("May 01 2022"), new Date("May 30 2022")],
      },
    },

  }).then((payments) => {

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
                                res.render("admin/payments/index", {
                                  payments: payments,
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
                                  totalPayments1: totalPayments1,
                                  totalPayments2: totalPayments2,
                                  totalPayments3: totalPayments3,
                                  totalPayments4: totalPayments4,
                                  totalPayments5: totalPayments5,
                                  totalPayments6: totalPayments6,
                                  totalPayments7: totalPayments7,
                                  totalPayments8: totalPayments8,
                                  totalPayments9: totalPayments9,
                                  totalPayments10: totalPayments10,
                                  totalPayments11: totalPayments11,
                                  totalPayments12: totalPayments12,
                                  totalPayments13: totalPayments13,
                                  totalPayments14: totalPayments14,
                                  totalPayments15: totalPayments15,
                                  totalPayments16: totalPayments16,
                                  totalPayments17: totalPayments17,
                                  totalPayments18: totalPayments18,
                                  totalPayments19: totalPayments19,
                                  totalPayments20: totalPayments20,
                                  totalPayments21: totalPayments21,
                                  totalPayments22: totalPayments22,
                                  totalPayments23: totalPayments23,
                                  totalPayments24: totalPayments24,
                                  totalPayments25: totalPayments25,


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
});
router.get("/admin/payments/filter/junho", adminAuth, async (req, res, next) => {

  var totalPayments1 = 0;
  var totalPayments2 = 0;
  var totalPayments3 = 0;
  var totalPayments4 = 0;
  var totalPayments5 = 0;
  var totalPayments6 = 0;
  var totalPayments7 = 0;
  var totalPayments8 = 0;
  var totalPayments9 = 0;
  var totalPayments10 = 0;
  var totalPayments11 = 0;
  var totalPayments12 = 0;
  var totalPayments13 = 0;
  var totalPayments14 = 0;
  var totalPayments15 = 0;
  var totalPayments16 = 0;
  var totalPayments17 = 0;
  var totalPayments18 = 0;
  var totalPayments19 = 0;
  var totalPayments20 = 0;
  var totalPayments21 = 0;
  var totalPayments22 = 0;
  var totalPayments23 = 0;
  var totalPayments24 = 0;
  var totalPayments25 = 0;

  var amount1 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments7 = amount7['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount8 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments8 = amount8['sum(`valor`)']

  /////////////////////////////////////////////////////////////////

  var amount9 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount11 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



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
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Jun 01 2022"), new Date("Jun 30 2022")],
      },
    },

  }).then((payments) => {

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
                                res.render("admin/payments/index", {
                                  payments: payments,
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
                                  totalPayments1: totalPayments1,
                                  totalPayments2: totalPayments2,
                                  totalPayments3: totalPayments3,
                                  totalPayments4: totalPayments4,
                                  totalPayments5: totalPayments5,
                                  totalPayments6: totalPayments6,
                                  totalPayments7: totalPayments7,
                                  totalPayments8: totalPayments8,
                                  totalPayments9: totalPayments9,
                                  totalPayments10: totalPayments10,
                                  totalPayments11: totalPayments11,
                                  totalPayments12: totalPayments12,
                                  totalPayments13: totalPayments13,
                                  totalPayments14: totalPayments14,
                                  totalPayments15: totalPayments15,
                                  totalPayments16: totalPayments16,
                                  totalPayments17: totalPayments17,
                                  totalPayments18: totalPayments18,
                                  totalPayments19: totalPayments19,
                                  totalPayments20: totalPayments20,
                                  totalPayments21: totalPayments21,
                                  totalPayments22: totalPayments22,
                                  totalPayments23: totalPayments23,
                                  totalPayments24: totalPayments24,
                                  totalPayments25: totalPayments25,


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
});

router.get("/admin/payments/filter/julho", adminAuth, async (req, res, next) => {

  var totalPayments1 = 0;
  var totalPayments2 = 0;
  var totalPayments3 = 0;
  var totalPayments4 = 0;
  var totalPayments5 = 0;
  var totalPayments6 = 0;
  var totalPayments7 = 0;
  var totalPayments8 = 0;
  var totalPayments9 = 0;
  var totalPayments10 = 0;
  var totalPayments11 = 0;
  var totalPayments12 = 0;
  var totalPayments13 = 0;
  var totalPayments14 = 0;
  var totalPayments15 = 0;
  var totalPayments16 = 0;
  var totalPayments17 = 0;
  var totalPayments18 = 0;
  var totalPayments19 = 0;
  var totalPayments20 = 0;
  var totalPayments21 = 0;
  var totalPayments22 = 0;
  var totalPayments23 = 0;
  var totalPayments24 = 0;
  var totalPayments25 = 0;

  var amount1 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments7 = amount7['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount8 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments8 = amount8['sum(`valor`)']

  /////////////////////////////////////////////////////////////////

  var amount9 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount11 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



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
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Jul 01 2022"), new Date("Jul 31 2022")],
      },
    },

  }).then((payments) => {
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
                                res.render("admin/payments/index", {
                                  payments: payments,
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
                                  totalPayments1: totalPayments1,
                                  totalPayments2: totalPayments2,
                                  totalPayments3: totalPayments3,
                                  totalPayments4: totalPayments4,
                                  totalPayments5: totalPayments5,
                                  totalPayments6: totalPayments6,
                                  totalPayments7: totalPayments7,
                                  totalPayments8: totalPayments8,
                                  totalPayments9: totalPayments9,
                                  totalPayments10: totalPayments10,
                                  totalPayments11: totalPayments11,
                                  totalPayments12: totalPayments12,
                                  totalPayments13: totalPayments13,
                                  totalPayments14: totalPayments14,
                                  totalPayments15: totalPayments15,
                                  totalPayments16: totalPayments16,
                                  totalPayments17: totalPayments17,
                                  totalPayments18: totalPayments18,
                                  totalPayments19: totalPayments19,
                                  totalPayments20: totalPayments20,
                                  totalPayments21: totalPayments21,
                                  totalPayments22: totalPayments22,
                                  totalPayments23: totalPayments23,
                                  totalPayments24: totalPayments24,
                                  totalPayments25: totalPayments25,


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
});

router.get("/admin/payments/filter/agosto", adminAuth, async (req, res, next) => {

  var totalPayments1 = 0;
  var totalPayments2 = 0;
  var totalPayments3 = 0;
  var totalPayments4 = 0;
  var totalPayments5 = 0;
  var totalPayments6 = 0;
  var totalPayments7 = 0;
  var totalPayments8 = 0;
  var totalPayments9 = 0;
  var totalPayments10 = 0;
  var totalPayments11 = 0;
  var totalPayments12 = 0;
  var totalPayments13 = 0;
  var totalPayments14 = 0;
  var totalPayments15 = 0;
  var totalPayments16 = 0;
  var totalPayments17 = 0;
  var totalPayments18 = 0;
  var totalPayments19 = 0;
  var totalPayments20 = 0;
  var totalPayments21 = 0;
  var totalPayments22 = 0;
  var totalPayments23 = 0;
  var totalPayments24 = 0;
  var totalPayments25 = 0;

  var amount1 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments7 = amount7['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount8 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments8 = amount8['sum(`valor`)']

  /////////////////////////////////////////////////////////////////

  var amount9 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount11 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



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
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Aug 01 2022"), new Date("Aug 30 2022")],
      },
    },

  }).then((payments) => {
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
                                res.render("admin/payments/index", {
                                  payments: payments,
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
                                  totalPayments1: totalPayments1,
                                  totalPayments2: totalPayments2,
                                  totalPayments3: totalPayments3,
                                  totalPayments4: totalPayments4,
                                  totalPayments5: totalPayments5,
                                  totalPayments6: totalPayments6,
                                  totalPayments7: totalPayments7,
                                  totalPayments8: totalPayments8,
                                  totalPayments9: totalPayments9,
                                  totalPayments10: totalPayments10,
                                  totalPayments11: totalPayments11,
                                  totalPayments12: totalPayments12,
                                  totalPayments13: totalPayments13,
                                  totalPayments14: totalPayments14,
                                  totalPayments15: totalPayments15,
                                  totalPayments16: totalPayments16,
                                  totalPayments17: totalPayments17,
                                  totalPayments18: totalPayments18,
                                  totalPayments19: totalPayments19,
                                  totalPayments20: totalPayments20,
                                  totalPayments21: totalPayments21,
                                  totalPayments22: totalPayments22,
                                  totalPayments23: totalPayments23,
                                  totalPayments24: totalPayments24,
                                  totalPayments25: totalPayments25,


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
});

router.get("/admin/payments/filter/setembro", adminAuth, async (req, res, next) => {

  var totalPayments1 = 0;
  var totalPayments2 = 0;
  var totalPayments3 = 0;
  var totalPayments4 = 0;
  var totalPayments5 = 0;
  var totalPayments6 = 0;
  var totalPayments7 = 0;
  var totalPayments8 = 0;
  var totalPayments9 = 0;
  var totalPayments10 = 0;
  var totalPayments11 = 0;
  var totalPayments12 = 0;
  var totalPayments13 = 0;
  var totalPayments14 = 0;
  var totalPayments15 = 0;
  var totalPayments16 = 0;
  var totalPayments17 = 0;
  var totalPayments18 = 0;
  var totalPayments19 = 0;
  var totalPayments20 = 0;
  var totalPayments21 = 0;
  var totalPayments22 = 0;
  var totalPayments23 = 0;
  var totalPayments24 = 0;
  var totalPayments25 = 0;

  var amount1 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments7 = amount7['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount8 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments8 = amount8['sum(`valor`)']

  /////////////////////////////////////////////////////////////////

  var amount9 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount11 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



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
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Sep 01 2022"), new Date("Sep 30 2022")],
      },
    },

  }).then((payments) => {
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
                                res.render("admin/payments/index", {
                                  payments: payments,
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
                                  totalPayments1: totalPayments1,
                                  totalPayments2: totalPayments2,
                                  totalPayments3: totalPayments3,
                                  totalPayments4: totalPayments4,
                                  totalPayments5: totalPayments5,
                                  totalPayments6: totalPayments6,
                                  totalPayments7: totalPayments7,
                                  totalPayments8: totalPayments8,
                                  totalPayments9: totalPayments9,
                                  totalPayments10: totalPayments10,
                                  totalPayments11: totalPayments11,
                                  totalPayments12: totalPayments12,
                                  totalPayments13: totalPayments13,
                                  totalPayments14: totalPayments14,
                                  totalPayments15: totalPayments15,
                                  totalPayments16: totalPayments16,
                                  totalPayments17: totalPayments17,
                                  totalPayments18: totalPayments18,
                                  totalPayments19: totalPayments19,
                                  totalPayments20: totalPayments20,
                                  totalPayments21: totalPayments21,
                                  totalPayments22: totalPayments22,
                                  totalPayments23: totalPayments23,
                                  totalPayments24: totalPayments24,
                                  totalPayments25: totalPayments25,


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
});

router.get("/admin/payments/filter/outubro", adminAuth, async (req, res, next) => {

  var totalPayments1 = 0;
  var totalPayments2 = 0;
  var totalPayments3 = 0;
  var totalPayments4 = 0;
  var totalPayments5 = 0;
  var totalPayments6 = 0;
  var totalPayments7 = 0;
  var totalPayments8 = 0;
  var totalPayments9 = 0;
  var totalPayments10 = 0;
  var totalPayments11 = 0;
  var totalPayments12 = 0;
  var totalPayments13 = 0;
  var totalPayments14 = 0;
  var totalPayments15 = 0;
  var totalPayments16 = 0;
  var totalPayments17 = 0;
  var totalPayments18 = 0;
  var totalPayments19 = 0;
  var totalPayments20 = 0;
  var totalPayments21 = 0;
  var totalPayments22 = 0;
  var totalPayments23 = 0;
  var totalPayments24 = 0;
  var totalPayments25 = 0;

  var amount1 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments7 = amount7['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount8 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments8 = amount8['sum(`valor`)']

  /////////////////////////////////////////////////////////////////

  var amount9 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount11 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



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
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Oct 01 2022"), new Date("Oct 30 2022")],
      },
    },

  }).then((payments) => {
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
                                res.render("admin/payments/index", {
                                  payments: payments,
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
                                  totalPayments1: totalPayments1,
                                  totalPayments2: totalPayments2,
                                  totalPayments3: totalPayments3,
                                  totalPayments4: totalPayments4,
                                  totalPayments5: totalPayments5,
                                  totalPayments6: totalPayments6,
                                  totalPayments7: totalPayments7,
                                  totalPayments8: totalPayments8,
                                  totalPayments9: totalPayments9,
                                  totalPayments10: totalPayments10,
                                  totalPayments11: totalPayments11,
                                  totalPayments12: totalPayments12,
                                  totalPayments13: totalPayments13,
                                  totalPayments14: totalPayments14,
                                  totalPayments15: totalPayments15,
                                  totalPayments16: totalPayments16,
                                  totalPayments17: totalPayments17,
                                  totalPayments18: totalPayments18,
                                  totalPayments19: totalPayments19,
                                  totalPayments20: totalPayments20,
                                  totalPayments21: totalPayments21,
                                  totalPayments22: totalPayments22,
                                  totalPayments23: totalPayments23,
                                  totalPayments24: totalPayments24,
                                  totalPayments25: totalPayments25,


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
});

router.get("/admin/payments/filter/novembro", adminAuth, async (req, res, next) => {

  var totalPayments1 = 0;
  var totalPayments2 = 0;
  var totalPayments3 = 0;
  var totalPayments4 = 0;
  var totalPayments5 = 0;
  var totalPayments6 = 0;
  var totalPayments7 = 0;
  var totalPayments8 = 0;
  var totalPayments9 = 0;
  var totalPayments10 = 0;
  var totalPayments11 = 0;
  var totalPayments12 = 0;
  var totalPayments13 = 0;
  var totalPayments14 = 0;
  var totalPayments15 = 0;
  var totalPayments16 = 0;
  var totalPayments17 = 0;
  var totalPayments18 = 0;
  var totalPayments19 = 0;
  var totalPayments20 = 0;
  var totalPayments21 = 0;
  var totalPayments22 = 0;
  var totalPayments23 = 0;
  var totalPayments24 = 0;
  var totalPayments25 = 0;

  var amount1 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments7 = amount7['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount8 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments8 = amount8['sum(`valor`)']

  /////////////////////////////////////////////////////////////////

  var amount9 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount11 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



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
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Nov 01 2022"), new Date("Nov 30 2022")],
      },
    },

  }).then((payments) => {

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
                                res.render("admin/payments/index", {
                                  payments: payments,
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
                                  totalPayments1: totalPayments1,
                                  totalPayments2: totalPayments2,
                                  totalPayments3: totalPayments3,
                                  totalPayments4: totalPayments4,
                                  totalPayments5: totalPayments5,
                                  totalPayments6: totalPayments6,
                                  totalPayments7: totalPayments7,
                                  totalPayments8: totalPayments8,
                                  totalPayments9: totalPayments9,
                                  totalPayments10: totalPayments10,
                                  totalPayments11: totalPayments11,
                                  totalPayments12: totalPayments12,
                                  totalPayments13: totalPayments13,
                                  totalPayments14: totalPayments14,
                                  totalPayments15: totalPayments15,
                                  totalPayments16: totalPayments16,
                                  totalPayments17: totalPayments17,
                                  totalPayments18: totalPayments18,
                                  totalPayments19: totalPayments19,
                                  totalPayments20: totalPayments20,
                                  totalPayments21: totalPayments21,
                                  totalPayments22: totalPayments22,
                                  totalPayments23: totalPayments23,
                                  totalPayments24: totalPayments24,
                                  totalPayments25: totalPayments25,


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
});

router.get("/admin/payments/filter/dezembro", adminAuth, async (req, res, next) => {

  var totalPayments1 = 0;
  var totalPayments2 = 0;
  var totalPayments3 = 0;
  var totalPayments4 = 0;
  var totalPayments5 = 0;
  var totalPayments6 = 0;
  var totalPayments7 = 0;
  var totalPayments8 = 0;
  var totalPayments9 = 0;
  var totalPayments10 = 0;
  var totalPayments11 = 0;
  var totalPayments12 = 0;
  var totalPayments13 = 0;
  var totalPayments14 = 0;
  var totalPayments15 = 0;
  var totalPayments16 = 0;
  var totalPayments17 = 0;
  var totalPayments18 = 0;
  var totalPayments19 = 0;
  var totalPayments20 = 0;
  var totalPayments21 = 0;
  var totalPayments22 = 0;
  var totalPayments23 = 0;
  var totalPayments24 = 0;
  var totalPayments25 = 0;

  var amount1 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments7 = amount7['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount8 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments8 = amount8['sum(`valor`)']

  /////////////////////////////////////////////////////////////////

  var amount9 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount11 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Payment.findOne({
    where: {
      categoriesDespesasImpostoId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalPayments25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



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
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Dec 01 2022"), new Date("Dec 31 2022")],
      },
    },

  }).then((payments) => {

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
                                res.render("admin/payments/index", {
                                  payments: payments,
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
                                  totalPayments1: totalPayments1,
                                  totalPayments2: totalPayments2,
                                  totalPayments3: totalPayments3,
                                  totalPayments4: totalPayments4,
                                  totalPayments5: totalPayments5,
                                  totalPayments6: totalPayments6,
                                  totalPayments7: totalPayments7,
                                  totalPayments8: totalPayments8,
                                  totalPayments9: totalPayments9,
                                  totalPayments10: totalPayments10,
                                  totalPayments11: totalPayments11,
                                  totalPayments12: totalPayments12,
                                  totalPayments13: totalPayments13,
                                  totalPayments14: totalPayments14,
                                  totalPayments15: totalPayments15,
                                  totalPayments16: totalPayments16,
                                  totalPayments17: totalPayments17,
                                  totalPayments18: totalPayments18,
                                  totalPayments19: totalPayments19,
                                  totalPayments20: totalPayments20,
                                  totalPayments21: totalPayments21,
                                  totalPayments22: totalPayments22,
                                  totalPayments23: totalPayments23,
                                  totalPayments24: totalPayments24,
                                  totalPayments25: totalPayments25,


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
});

module.exports = router;