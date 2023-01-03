const express = require("express");
const router = express.Router();
const CategoryDespesasImpostos = require("./CategoryDespesasImpostos");
const slugify = require("slugify");
const adminAuth = require("../../middlewares/adminAuth");

router.get("/admin/categories/despesas/impostosVendas&Servicos/newDespesaImpostos", adminAuth, (req, res) => {
  res.render("admin/categories/despesas/impostosVendas&Servicos/newDespesaImpostos");
});

router.post("/categories/despesas/impostosVendas&Servicos/saveDespesaImpostos", adminAuth, (req, res) => {
  var title = req.body.title;
  if (title != undefined) {
    CategoryDespesasImpostos.create({
      title: title,
      slug: slugify(title)
    }).then(() => {
      res.redirect("/admin/categories");
    })

  } else {
    res.redirect("/admin/categories/despesas/impostosVendas&Servicos/newDespesaImpostos");
  }
});


router.post("/categories/despesas/impostosVendas&Servicos/deleteDespesaImpostos", adminAuth, (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      CategoryDespesasImpostos.destroy({
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

router.get("/admin/categories/despesas/impostosVendas&Servicos/editDespesaImpostos/:id", adminAuth, (req, res) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.redirect("/admin/categories");
  }

  CategoryDespesasImpostos.findByPk(id)
    .then((category) => {
      if (category != undefined) {
        res.render("admin/categories/despesas/impostosVendas&Servicos/editDespesaImpostos", {
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

router.post("/categories/despesas/impostosVendas&Servicos/updateDespesaImpostos", adminAuth, (req, res) => {
  var id = req.body.id;
  var title = req.body.title;

  CategoryDespesasImpostos.update({
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