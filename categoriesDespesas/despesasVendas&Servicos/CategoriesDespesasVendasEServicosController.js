const express = require("express");
const router = express.Router();
const CategoryDespesasVendasEServicos = require("./CategoryDespesasVendas&Servicos");
const slugify = require("slugify");
const adminAuth = require("../../middlewares/adminAuth");

router.get("/admin/categories/despesas/despesasVendasEServicos/newDespesasVendasEServicos", adminAuth, (req, res) => {
  res.render("admin/categories/despesas/despesasVendasEServicos/newDespesasVendasEServicos");
});

router.post("/categories/despesas/despesasVendasEServicos/saveDespesasVendasEServicos", adminAuth, (req, res) => {
  var title = req.body.title;
  if (title != undefined) {
    CategoryDespesasVendasEServicos.create({
      title: title,
      slug: slugify(title)
    }).then(() => {
      res.redirect("/admin/categories");
    })

  } else {
    res.redirect("/admin/categories/despesas/despesasVendasEServicos/newDespesasVendasEServicos");
  }
});


router.post("/categories/despesas/despesasVendasEServicos/deleteDespesasVendasEServicos", adminAuth, (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      CategoryDespesasVendasEServicos.destroy({
        where: {
          id: id,
        },
      }).then(() => {
        res.redirect("/admin/categories");
      });
    } else {
      // NÃO FOR UM NÚMERO
      res.redirect("/admin/categories");
    }
  } else {
    // NULL
    res.redirect("/admin/categories");
  }
});

router.get("/admin/categories/despesas/despesasVendasEServicos/editDespesasVendasEServicos/:id", adminAuth, (req, res) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.redirect("/admin/categories");
  }

  CategoryDespesasVendasEServicos.findByPk(id)
    .then((category) => {
      if (category != undefined) {
        res.render("admin/categories/despesas/despesasVendasEServicos/editDespesasVendasEServicos", {
          category: category
        });
      } else {
        res.redirect("/admin/categories");
      }
    })
    .catch((erro) => {
      res.redirect("/admin/categories");
    });
});

router.post("/categories/despesas/despesasVendasEServicos/updateDespesasVendasEServicos", adminAuth, (req, res) => {
  var id = req.body.id;
  var title = req.body.title;

  CategoryDespesasVendasEServicos.update({
    title: title,
    slug: slugify(title)
  }, {
    where: {
      id: id,
    },
  }).then(() => {
    res.redirect("/admin/categories");
  });
});

module.exports = router;