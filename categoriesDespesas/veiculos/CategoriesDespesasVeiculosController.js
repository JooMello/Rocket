const express = require("express");
const router = express.Router();
const CategoryDespesasVeiculos = require("./CategoryDespesasVeiculos");
const slugify = require("slugify");
const adminAuth = require("../../middlewares/adminAuth");

router.get("/admin/categories/despesas/veiculos/new", adminAuth, (req, res) => {
  res.render("admin/categories/despesas/veiculos/new");
});

router.post("/categories/despesas/veiculos/save", adminAuth, (req, res) => {
  var title = req.body.title;
  if (title != undefined) {
    CategoryDespesasVeiculos.create({
      title: title,
      slug: slugify(title)
    }).then(() => {
      res.redirect("/admin/categories");
    })

  } else {
    res.redirect("/admin/categories/despesas/veiculos/new");
  }
});


router.post("/categories/despesas/veiculos/delete", adminAuth, (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      CategoryDespesasVeiculos.destroy({
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

router.get("/admin/categories/despesas/veiculos/edit/:id", adminAuth, (req, res) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.redirect("/admin/categories");
  }

  CategoryDespesasVeiculos.findByPk(id)
    .then((category) => {
      if (category != undefined) {
        res.render("admin/categories/despesas/veiculos/edit", {
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

router.post("/categories/despesas/veiculos/update", adminAuth, (req, res) => {
  var id = req.body.id;
  var title = req.body.title;

  CategoryDespesasVeiculos.update({
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