const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("./product.service");

router.get("/", async (req, res) => {
  const products = await getAllProducts();

  res.send(products);
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductById(id);

    res.send(product);
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, recipe, image, categoryId, userId } = req.body;

    if (!(name && recipe && image && categoryId && userId)) {
      return res.status(400).send({
        message: "Please provide all the fields",
      });
    }

    const product = await createProduct({
      name,
      recipe,
      image,
      categoryId,
      userId,
    });

    res.status(201).send({
      message: "Product created successfully",
      data: product,
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
    const { name, recipe, image, categoryId } = req.body;

    if (!(name && recipe && image && categoryId)) {
      return res.status(400).send({
        message: "Please provide all the fields",
      });
    }

    const product = await updateProduct(id, {
      name,
      recipe,
      image,
      categoryId,
    });

    res.send({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, recipe, image, categoryId } = req.body;

    const product = await updateProduct(id, {
      name,
      recipe,
      image,
      categoryId,
    });

    res.send({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    deleteProduct(id);

    res.send({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
});

module.exports = router;
