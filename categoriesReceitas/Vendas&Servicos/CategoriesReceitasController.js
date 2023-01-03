const express = require("express");
const router = express.Router();
const CategoryReceitas = require("./CategoryReceitas");
const slugify = require("slugify");
const adminAuth = require("../../middlewares/adminAuth");

router.get("/admin/categories/receitas/sales&services/newReceita", adminAuth, (req, res) => {
  res.render("admin/categories/receitas/sales&services/newReceita");
});

router.post("/categories/receitas/sales&services/saveReceita", adminAuth, (req, res) => {
  var title = req.body.title;
  if (title != undefined) {
    CategoryReceitas.create({
      title: title,
      slug: slugify(title)
    }).then(() => {
      res.redirect("/admin/categories");
    })

  } else {
    res.redirect("/admin/categories/receitas/sales&services/newReceita");
  }
});


router.post("/categories/receitas/sales&services/deleteReceita", adminAuth, (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      CategoryReceitas.destroy({
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

router.get("/admin/categories/receitas/sales&services/editReceita/:id", adminAuth, (req, res) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.redirect("/admin/categories");
  }

  CategoryReceitas.findByPk(id)
    .then((category) => {
      if (category != undefined) {
        res.render("admin/categories/receitas/sales&services/editReceita", {
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

router.post("/categories/receitas/sales&services/updateReceita", adminAuth, (req, res) => {
  var id = req.body.id;
  var title = req.body.title;

  CategoryReceitas.update({
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