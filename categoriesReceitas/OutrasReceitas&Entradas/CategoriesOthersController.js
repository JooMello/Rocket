const express = require("express");
const router = express.Router();
const CategoryOthersReceitas = require("./CategoryOthersReceitas");
const slugify = require("slugify");
const adminAuth = require("../../middlewares/adminAuth");

router.get("/admin/categories/receitas/others/newOthers", adminAuth, (req, res) => {
  res.render("admin/categories/receitas/others/newOthers");
});

router.post("/categories/receitas/others/saveOthers", adminAuth, (req, res) => {
  var title = req.body.title;
  if (title != undefined) {
    CategoryOthersReceitas.create({
      title: title,
      slug: slugify(title)
    }).then(() => {
      res.redirect("/admin/categories");
    })

  } else {
    res.redirect("/admin/categories/receitas/others/newOthers");
  }
});

router.post("/categories/receitas/others/deleteOthers", adminAuth, (req, res) => {
  var id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      CategoryOthersReceitas.destroy({
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

router.get("/admin/categories/receitas/others/editOthers/:id", adminAuth, (req, res) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.redirect("/admin/categories");
  }

  CategoryOthersReceitas.findByPk(id)
    .then((category) => {
      if (category != undefined) {
        res.render("admin/categories/receitas/others/editOthers", {
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

router.post("/categories/receitas/others/updateOthers", adminAuth, (req, res) => {
  var id = req.body.id;
  var title = req.body.title;

  CategoryOthersReceitas.update({
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