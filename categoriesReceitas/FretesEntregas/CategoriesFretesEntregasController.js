const express = require("express");
const router = express.Router();
const CategoryFretesEntregas = require("./CategoryFretesEntregas");
const slugify = require("slugify");
const adminAuth = require("../../middlewares/adminAuth");

router.get("/admin/categories/receitas/fretes/newFretes", adminAuth, (req, res) => {
  res.render("admin/categories/receitas/fretes/newFretes");
});

router.post("/categories/receitas/fretes/saveFretes", adminAuth, (req, res) => {
  var title = req.body.title;
  if (title != undefined) {
    CategoryFretesEntregas.create({
      title: title,
      slug: slugify(title)
    }).then(() => {
      res.redirect("/admin/categories");
    })

  } else {
    res.redirect("/admin/categories/receitas/fretes/newFretes");
  }
});


router.post("/categories/receitas/fretes/deleteFretes", adminAuth, (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      CategoryFretesEntregas.destroy({
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

router.get("/admin/categories/receitas/fretes/editFretes/:id", adminAuth, (req, res) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.redirect("/admin/categories");
  }

  CategoryFretesEntregas.findByPk(id)
    .then((category) => {
      if (category != undefined) {
        res.render("admin/categories/receitas/fretes/editFretes", {
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

router.post("/categories/receitas/fretes/updateFretes", adminAuth, (req, res) => {
  var id = req.body.id;
  var title = req.body.title;

  CategoryFretesEntregas.update({
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