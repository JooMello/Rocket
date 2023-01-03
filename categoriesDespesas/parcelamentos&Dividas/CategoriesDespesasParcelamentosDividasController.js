const express = require("express");
const router = express.Router();
const CategoryDespesasParcelamentosDividas = require("./CategoryDespesasParcelamentosDividas");
const slugify = require("slugify");
const adminAuth = require("../../middlewares/adminAuth");

router.get("/admin/categories/despesas/parcelamentosDividas/new", adminAuth, (req, res) => {
  res.render("admin/categories/despesas/parcelamentosDividas/new");
});

router.post("/categories/despesas/parcelamentosDividas/save", adminAuth, (req, res) => {
  var title = req.body.title;
  if (title != undefined) {
    CategoryDespesasParcelamentosDividas.create({
      title: title,
      slug: slugify(title)
    }).then(() => {
      res.redirect("/admin/categories");
    })

  } else {
    res.redirect("/admin/categories/despesas/parcelamentosDividas/new");
  }
});


router.post("/categories/despesas/parcelamentosDividas/delete", adminAuth, (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      CategoryDespesasParcelamentosDividas.destroy({
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

router.get("/admin/categories/despesas/parcelamentosDividas/edit/:id", adminAuth, (req, res) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.redirect("/admin/categories");
  }

  CategoryDespesasParcelamentosDividas.findByPk(id)
    .then((category) => {
      if (category != undefined) {
        res.render("admin/categories/despesas/parcelamentosDividas/edit", {
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

router.post("/categories/despesas/parcelamentosDividas/update", adminAuth, (req, res) => {
  var id = req.body.id;
  var title = req.body.title;

  CategoryDespesasParcelamentosDividas.update({
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