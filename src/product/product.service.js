const prisma = require("../db");
const { findProductById, findProductByName } = require("./product.repository");

const getAllProducts = async () => {
  return await prisma.product.findMany();
};

const getProductById = async (id) => {
  const product = await findProductById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

const createProduct = async (data) => {
  const findProduct = await findProductByName(data.name);

  if (findProduct) {
    throw new Error("Product already exists");
  }

  return await prisma.product.create({
    data,
  });
};

const updateProduct = async (id, data) => {
  const product = await getProductById(parseInt(id));

  if (!product) {
    throw new Error("Product not found");
  }

  return await prisma.product.update({
    where: {
      id: parseInt(id),
    },
    data,
  });
};

const deleteProduct = async (id) => {
  const product = await getProductById(parseInt(id));

  if (!product) {
    throw new Error("Product not found");
  }

  return await prisma.product.delete({
    where: {
      id: parseInt(id),
    },
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
