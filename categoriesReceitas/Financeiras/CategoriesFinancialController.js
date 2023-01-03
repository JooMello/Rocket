const express = require("express");
const router = express.Router();
const CategoryFinancialReceitas = require("./CategoryFinancialReceitas");
const slugify = require("slugify");
const adminAuth = require("../../middlewares/adminAuth");

router.get("/admin/categories/receitas/financial/newFinancial", adminAuth, (req, res) => {
  res.render("admin/categories/receitas/financial/newFinancial");
});

router.post("/categories/receitas/financial/saveFinancial", adminAuth, (req, res) => {
  var title = req.body.title;
  if (title != undefined) {
    CategoryFinancialReceitas.create({
      title: title,
      slug: slugify(title)
    }).then(() => {
      res.redirect("/admin/categories");
    })

  } else {
    res.redirect("/admin/categories/receitas/financial/newFinancial");
  }
});


router.post("/categories/receitas/financial/deleteFinancial", adminAuth, (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      CategoryFinancialReceitas.destroy({
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

router.get("/admin/categories/receitas/financial/editFinancial/:id", adminAuth, (req, res) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.redirect("/admin/categories");
  }

  CategoryFinancialReceitas.findByPk(id)
    .then((category) => {
      if (category != undefined) {
        res.render("admin/categories/receitas/financial/editFinancial", {
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

router.post("/categories/receitas/financial/updateFinancial", adminAuth, (req, res) => {
  var id = req.body.id;
  var title = req.body.title;

  CategoryFinancialReceitas.update({
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