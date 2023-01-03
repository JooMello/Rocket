const express = require("express");
const router = express.Router();
const CategoryReceitas = require("../categoriesReceitas/Vendas&Servicos/CategoryReceitas");
const CategoryOthersReceitas = require("../categoriesReceitas/OutrasReceitas&Entradas/CategoryOthersReceitas");
const CategoryFinancialReceitas = require("../categoriesReceitas/Financeiras/CategoryFinancialReceitas")
const CategoryFretesEntregas = require("../categoriesReceitas/FretesEntregas/CategoryFretesEntregas");
const Receipt = require("./Receipt");
const slugify = require("slugify");
const adminAuth = require("../middlewares/adminAuth");
const sequelize = require("sequelize");
const { Op} = require("sequelize");

router.get("/admin/receipts", adminAuth, async (req, res, next) => {

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
      categoriesOthersReceitaId:15,
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



  Receipt.findAll({
    include: [{
      model: CategoryReceitas,
    }, {
      model: CategoryOthersReceitas,
    }, {
      model: CategoryFinancialReceitas,
    }, ],

    order: [
      ["data", "ASC"]
    ],
    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryReceitas.findAll().then((categoriesreceitas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
          CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
          res.render("admin/receipts/index", {
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
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
      });
    });
  })
});})

router.get("/admin/receipts/new", adminAuth, (req, res) => {
  CategoryReceitas.findAll().then((categoriesreceitas) => {
    CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
      CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
        CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
        res.render("admin/receipts/new", {
          categoriesreceitas: categoriesreceitas,
          categoriesOthersReceitas: categoriesOthersReceitas,
          categoriesFinancialReceitas: categoriesFinancialReceitas,
          categoriesFretesEntregas:categoriesFretesEntregas,
        });
      });
    })
  })
});})

router.post("/receipts/save", adminAuth, (req, res) => {

  var data = req.body.data;
  var fornecedor = req.body.fornecedor;
  var valor = req.body.valor;
  var obs = req.body.obs;
  var category = req.body.category;


  Receipt.bulkCreate(
      [

        {
          data: data,
          fornecedor: fornecedor,
          slug: slugify(fornecedor),
          valor: valor,
          obs: obs,
          categoriesreceitaId: category
        },
        {
          data: data,
          fornecedor: fornecedor,
          slug: slugify(fornecedor),
          valor: valor,
          obs: obs,
          categoriesOthersReceitaId: category
        },
        {
          data: data,
          fornecedor: fornecedor,
          slug: slugify(fornecedor),
          valor: valor,
          obs: obs,
          categoriesFinancialReceitaId: category
        },
         {
           data: data,
           fornecedor: fornecedor,
           slug: slugify(fornecedor),
           valor: valor,
           obs: obs,
           categoriesFretesEntregaId: category
         },
      ], {
        ignoreDuplicates: true,
      }
    )
    .then(() => {
      res.redirect("/admin/receipts");
    });
});

router.post("/receipts/delete", adminAuth, (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      Receipt.destroy({
        where: {
          id: id,
        },
      }).then(() => {
        res.redirect("/admin/receipts");
      });
    } else {
      // NÃO FOR UM NÚMERO
      res.redirect("/admin/receipts");
    }
  } else {
    // NULL
    res.redirect("/admin/receipts");
  }
});

router.get("/admin/receipts/edit/:id", adminAuth, (req, res) => {
  var id = req.params.id;
  Receipt.findByPk(id)
    .then((receipt) => {
      if (receipt) {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
            CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
              CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
              res.render("admin/receipts/edit", {
                receipt: receipt,
                categoriesreceitas: categoriesreceitas,
                categoriesOthersReceitas: categoriesOthersReceitas,
                categoriesFinancialReceitas: categoriesFinancialReceitas,
                categoriesFretesEntregas:categoriesFretesEntregas,
              });
            });
          });
        });})
      } else {
        res.redirect("/");
      }
    })
    .catch((err) => {
      res.redirect("/");
    });
});

router.post("/receipts/update", adminAuth, (req, res) => {
  var id = req.body.id;
  var data = req.body.data;
  var fornecedor = req.body.fornecedor;
  var valor = req.body.valor;
  var obs = req.body.obs;


  Receipt.update({
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
      res.redirect("/admin/receipts");
    })
    .catch((err) => {
      res.redirect("/admin/receipts");
    });
});

router.get("/receipts/page/:num", (req, res) => {
  var page = req.params.num;
  var offset = 0;

  if (isNaN(page) || page == 1) {
    offset = 0;
  } else {
    offset = (parseInt(page) - 1) * 20;
  }

  Receipt.findAll({
    include: [{
        model: CategoryReceitas,
      },
      {
        model: CategoryOthersReceitas,
      },
      {
        model: CategoryFinancialReceitas,
      },
    ],
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    offset: offset,
  }).then((receipts) => {
    var next;
    if (offset + 2 >= receipts.count) {
      next = false;
    } else {
      next = true;
    }

    var result = {
      page: parseInt(page),
      next: next,
      receipts: receipts,
    };


    CategoryReceitas.findAll().then((categoriesreceitas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
          CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
          res.render("admin/receipts/page", {
            result: result,
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
          });
        });
      })
    })
  })
});})

router.get("/admin/receipts/index/2021", adminAuth, async (req, res, next) => {

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
      categoriesreceitaId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount11 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



  Receipt.findAll({
    include: [{
        model: CategoryReceitas,
      },
      {
        model: CategoryOthersReceitas,
      },
      {
        model: CategoryFinancialReceitas,
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

    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
      CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          res.render("admin/receipts/index", {
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
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
      });
    });
  })
});})

router.get("/admin/receipts/index/2022", adminAuth, async (req, res, next) => {

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
      categoriesreceitaId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount11 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



  Receipt.findAll({
    include: [{
        model: CategoryReceitas,
      },
      {
        model: CategoryOthersReceitas,
      },
      {
        model: CategoryFinancialReceitas,
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

    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
      CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          res.render("admin/receipts/index", {
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
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
      });
    });
  })
});})

router.get("/admin/receipts/index/2023", adminAuth, async (req, res, next) => {

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
      categoriesreceitaId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount11 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



  Receipt.findAll({
    include: [{
        model: CategoryReceitas,
      },
      {
        model: CategoryOthersReceitas,
      },
      {
        model: CategoryFinancialReceitas,
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

    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
      CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          res.render("admin/receipts/index", {
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
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
      });
    });
  })
});})


router.get("/admin/receipts/index/janeiro", adminAuth, async (req, res, next) => {

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
      categoriesreceitaId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount11 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



  Receipt.findAll({
    include: [{
        model: CategoryReceitas,
      },
      {
        model: CategoryOthersReceitas,
      },
      {
        model: CategoryFinancialReceitas,
      },
    ],
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Jan 01 2022"), new Date("Jan 30 2022")],
      },
    },

    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
      CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          res.render("admin/receipts/index", {
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
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
      });
    });
  })
});})

router.get("/admin/receipts/index/fevereiro", adminAuth, async (req, res, next) => {

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
      categoriesreceitaId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount11 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



  Receipt.findAll({
    include: [{
        model: CategoryReceitas,
      },
      {
        model: CategoryOthersReceitas,
      },
      {
        model: CategoryFinancialReceitas,
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

    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
      CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          res.render("admin/receipts/index", {
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
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
      });
    });
  })
});})

router.get("/admin/receipts/index/marco", adminAuth, async (req, res, next) => {

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
      categoriesreceitaId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount11 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



  Receipt.findAll({
    include: [{
        model: CategoryReceitas,
      },
      {
        model: CategoryOthersReceitas,
      },
      {
        model: CategoryFinancialReceitas,
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

    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
      CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          res.render("admin/receipts/index", {
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
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
      });
    });
  })
});})

router.get("/admin/receipts/index/abril", adminAuth, async (req, res, next) => {

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
      categoriesreceitaId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount11 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



  Receipt.findAll({
    include: [{
        model: CategoryReceitas,
      },
      {
        model: CategoryOthersReceitas,
      },
      {
        model: CategoryFinancialReceitas,
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

    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
      CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          res.render("admin/receipts/index", {
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
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
      });
    });
  })
});})

router.get("/admin/receipts/index/maio", adminAuth, async (req, res, next) => {

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
      categoriesreceitaId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount11 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



  Receipt.findAll({
    include: [{
        model: CategoryReceitas,
      },
      {
        model: CategoryOthersReceitas,
      },
      {
        model: CategoryFinancialReceitas,
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

    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
      CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          res.render("admin/receipts/index", {
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
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
      });
    });
  })
});})

router.get("/admin/receipts/index/junho", adminAuth, async (req, res, next) => {

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
      categoriesreceitaId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount11 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



  Receipt.findAll({
    include: [{
        model: CategoryReceitas,
      },
      {
        model: CategoryOthersReceitas,
      },
      {
        model: CategoryFinancialReceitas,
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

    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
      CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          res.render("admin/receipts/index", {
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
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
      });
    });
  })
});})

router.get("/admin/receipts/index/julho", adminAuth, async (req, res, next) => {

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
      categoriesreceitaId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount11 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



  Receipt.findAll({
    include: [{
        model: CategoryReceitas,
      },
      {
        model: CategoryOthersReceitas,
      },
      {
        model: CategoryFinancialReceitas,
      },
    ],
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Jul 01 2022"), new Date("Jul 30 2022")],
      },
    },

    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
      CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          res.render("admin/receipts/index", {
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
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
      });
    });
  })
});})

router.get("/admin/receipts/index/agosto", adminAuth, async (req, res, next) => {

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
      categoriesreceitaId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount11 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



  Receipt.findAll({
    include: [{
        model: CategoryReceitas,
      },
      {
        model: CategoryOthersReceitas,
      },
      {
        model: CategoryFinancialReceitas,
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

    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
      CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          res.render("admin/receipts/index", {
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
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
      });
    });
  })
});})

router.get("/admin/receipts/index/setembro", adminAuth, async (req, res, next) => {

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
      categoriesreceitaId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount11 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



  Receipt.findAll({
    include: [{
        model: CategoryReceitas,
      },
      {
        model: CategoryOthersReceitas,
      },
      {
        model: CategoryFinancialReceitas,
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

    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
      CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          res.render("admin/receipts/index", {
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
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
      });
    });
  })
});})

router.get("/admin/receipts/index/outubro", adminAuth, async (req, res, next) => {

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
      categoriesreceitaId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount11 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



  Receipt.findAll({
    include: [{
        model: CategoryReceitas,
      },
      {
        model: CategoryOthersReceitas,
      },
      {
        model: CategoryFinancialReceitas,
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

    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
      CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          res.render("admin/receipts/index", {
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
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
      });
    });
  })
});})

router.get("/admin/receipts/index/novembro", adminAuth, async (req, res, next) => {

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
      categoriesreceitaId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount11 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



  Receipt.findAll({
    include: [{
        model: CategoryReceitas,
      },
      {
        model: CategoryOthersReceitas,
      },
      {
        model: CategoryFinancialReceitas,
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

    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
      CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          res.render("admin/receipts/index", {
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
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
      });
    });
  })
});})

router.get("/admin/receipts/index/dezembro", adminAuth, async (req, res, next) => {

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
      categoriesreceitaId: 1,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts1 = amount1['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount2 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 2,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts2 = amount2['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount3 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 3,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts3 = amount3['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount4 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 4,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts4 = amount4['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount5 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 5,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts5 = amount5['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount6 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 6,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts6 = amount6['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount7 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 7,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts7 = amount7['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount8 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 8,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts8 = amount8['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount9 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 9,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts9 = amount9['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount10 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 10,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts10 = amount10['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount11 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 11,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts11 = amount11['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount12 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 12,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts12 = amount12['sum(`valor`)']
  /////////////////////////////////////////////////////////////////

  var amount13 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 13,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts13 = amount13['sum(`valor`)']

  /////////////////////////////////////////////////////////////////
  var amount14 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 14,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts14 = amount14['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount15 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 15,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts15 = amount15['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount16 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 16,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts16 = amount16['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount17 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 17,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts17 = amount17['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount18 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 18,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts18 = amount18['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount19 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 19,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts19 = amount19['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount20 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 20,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts20 = amount20['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount21 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 21,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts21 = amount21['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount22 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 22,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts22 = amount22['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount23 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 23,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts23 = amount23['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount24 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 24,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts24 = amount24['sum(`valor`)']
  /////////////////////////////////////////////////////////////////
  var amount25 = await Receipt.findOne({
    where: {
      categoriesreceitaId: 25,
    },
    attributes: [sequelize.fn("sum", sequelize.col("valor"))],
    raw: true
  });
  var totalReceipts25 = amount25['sum(`valor`)']
  /////////////////////////////////////////////////////////////////



  Receipt.findAll({
    include: [{
        model: CategoryReceitas,
      },
      {
        model: CategoryOthersReceitas,
      },
      {
        model: CategoryFinancialReceitas,
      },
    ],
    order: [
      ["data", "DESC"]
    ],
    limit: 20,
    where: {
      data: {
        [Op.between]: [new Date("Dec 01 2022"), new Date("De 30 2022")],
      },
    },

    limit: 20,
    raw: true,
    nest: true,
  }).then((receipts) => {
    CategoryFinancialReceitas.findAll().then((categoriesFinancialReceitas) => {
      CategoryFretesEntregas.findAll().then((categoriesFretesEntregas) => {
      CategoryOthersReceitas.findAll().then((categoriesOthersReceitas) => {
        CategoryReceitas.findAll().then((categoriesreceitas) => {
          res.render("admin/receipts/index", {
            receipts: receipts,
            categoriesreceitas: categoriesreceitas,
            categoriesOthersReceitas: categoriesOthersReceitas,
            categoriesFinancialReceitas: categoriesFinancialReceitas,
            categoriesFretesEntregas:categoriesFretesEntregas,
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
      });
    });
  })
});})



module.exports = router;