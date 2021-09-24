const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// example code
// router.get('/', async (req, res) => {
//   try {
//     const driverData = await Driver.findAll({
//       include: [{ model: License }, { model: Car }],
//     });
//     res.status(200).json(driverData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(categoryData);
  }
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: "Not found with this id" });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post("/", (req, res) => {
  category.create(req.body).then((categoryData) => {
    res.json(categoryData);
  });

  // update a category by its `id` value
  router.put("/:id", (req, res) => {
    category
      .update(req.body, {
        where: {
          id: req.params.id,
        },
      })
      .then((categoryData) => {
        res.json(categoryData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // delete a category by its `id` value
  router.delete("/:id", (req, res) => {
    try {
      const catagoryData = await Category.fDestroy({
        where: [{ id: req.params.id }, { model: Car }],
      });
      res.status(200).json(driverData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

module.exports = router;
