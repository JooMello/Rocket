const express = require("express");
const router = express.Router();
const CategoryDespesasColaboradores = require("./CategoryDespesasColaboradores");
const slugify = require("slugify");
const adminAuth = require("../../middlewares/adminAuth");

router.get("/admin/categories/despesas/colaboradores/new", adminAuth, (req, res) => {
  res.render("admin/categories/despesas/colaboradores/new");
});

router.post("/categories/despesas/colaboradores/save", adminAuth, (req, res) => {
  var title = req.body.title;
  if (title != undefined) {
    CategoryDespesasColaboradores.create({
      title: title,
      slug: slugify(title)
    }).then(() => {
      res.redirect("/admin/categories");
    })

  } else {
    res.redirect("/admin/categories/despesas/colaboradores/new");
  }
});


router.post("/categories/despesas/colaboradores/delete", adminAuth, (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      CategoryDespesasColaboradores.destroy({
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

router.get("/admin/categories/despesas/colaboradores/edit/:id", adminAuth, (req, res) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.redirect("/admin/categories");
  }

  CategoryDespesasColaboradores.findByPk(id)
    .then((category) => {
      if (category != undefined) {
        res.render("admin/categories/despesas/colaboradores/edit", {
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

router.post("/categories/despesas/colaboradores/update", adminAuth, (req, res) => {
  var id = req.body.id;
  var title = req.body.title;

  CategoryDespesasColaboradores.update({
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