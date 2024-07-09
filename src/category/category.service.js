const prisma = require("../db");

const getAllCategories = async () => {
  return await prisma.category.findMany();
};

const getCategoryById = async (id) => {
  const category = await prisma.category.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!category) {
    throw new Error("Category not found");
  }

  return category;
};

const createCategory = async (data) => {
  const findCategory = await prisma.category.findFirst({
    where: {
      name: data.name,
    },
  });

  if (findCategory) {
    throw new Error("Category already exists");
  }

  return await prisma.category.create({
    data,
  });
};

const updateCategory = async (id, data) => {
  const category = await getCategoryById(parseInt(id));

  if (!category) {
    throw new Error("Category not found");
  }

  return await prisma.category.update({
    where: {
      id: parseInt(id),
    },
    data,
  });
};

const deleteCategory = async (id) => {
  const category = await getCategoryById(parseInt(id));

  if (!category) {
    throw new Error("Category not found");
  }

  return await prisma.category.delete({
    where: {
      id: parseInt(id),
    },
  });
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
