const prisma = require("../db");

const findProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  return product;
};

const findProductByName = async (name) => {
  const product = await prisma.product.findFirst({
    where: {
      name,
    },
  });

  return product;
};

module.exports = {
  findProductById,
  findProductByName,
};
