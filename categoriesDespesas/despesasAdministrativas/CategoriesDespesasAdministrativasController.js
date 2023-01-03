const express = require("express");
const router = express.Router();
const CategoryDespesasAdministrativas = require("./CategoryDespesasAdministrativas");
const slugify = require("slugify");
const adminAuth = require("../../middlewares/adminAuth");

router.get("/admin/categories/despesas/adminstrativas/new", adminAuth, (req, res) => {
  res.render("admin/categories/despesas/adminstrativas/new");
});

router.post("/categories/despesas/adminstrativas/save", adminAuth, (req, res) => {
  var title = req.body.title;
  if (title != undefined) {
    CategoryDespesasAdministrativas.create({
      title: title,
      slug: slugify(title)
    }).then(() => {
      res.redirect("/admin/categories");
    })

  } else {
    res.redirect("/admin/categories/despesas/adminstrativas/new");
  }
});


router.post("/categories/despesas/adminstrativas/delete", adminAuth, (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      CategoryDespesasAdministrativas.destroy({
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

router.get("/admin/categories/despesas/adminstrativas/edit/:id", adminAuth, (req, res) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.redirect("/admin/categories");
  }

  CategoryDespesasAdministrativas.findByPk(id)
    .then((category) => {
      if (category != undefined) {
        res.render("admin/categories/despesas/adminstrativas/edit", {
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

router.post("/categories/despesas/adminstrativas/update", adminAuth, (req, res) => {
  var id = req.body.id;
  var title = req.body.title;

  CategoryDespesasAdministrativas.update({
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