const express = require("express");
const router = express.Router();

const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("./category.service");

router.get("/", async (req, res) => {
  const categories = await getAllCategories();

  res.send(categories);
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const category = await getCategoryById(id);

    res.send(category);
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).send({
        message: "Please provide all the fields",
      });
    }

    const category = await createCategory({ name });

    res.status(201).send({
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).send({
        message: "Please provide all the fields",
      });
    }

    const category = await updateCategory(id, { name });

    res.send({
      message: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await deleteCategory(id);

    res.send({
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

module.exports = router;
