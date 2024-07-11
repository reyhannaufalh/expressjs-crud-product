const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const PORT = process.env.PORT || 2000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const productController = require("./product/product.controller");
app.use("/products", productController);

const categoryController = require("./category/category.controller");
app.use("/categories", categoryController);

const authController = require("./auth/auth");
app.use("/api/auth", authController.router);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
