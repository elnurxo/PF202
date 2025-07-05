const {
  getAll,
  getOne,
  post,
  deleteOne,
  update,
} = require("../services/categoryService");
const { deleteMany } = require("../services/productService");
const formatMongoData = require("../utils/formatMongoData");

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await getAll();
    if (!categories) throw new Error("categories not found!");
    res.status(200).json({
      message: "categories retrieved successfully!",
      data: categories.map(({ _id, ...rest }) => ({
        id: _id.toString(),
        ...rest,
      })),
    });
  } catch (error) {
    next(error);
  }
};

const getCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await getOne(id);
    if (!category) throw new Error("category not found!");
    res.status(200).json({
      message: "categories retrieved successfully!",
      data: formatMongoData(category),
    });
  } catch (error) {
    next(error);
  }
};

const deleteCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { cascade = false } = req.query;
    if (cascade == "true") {
      const deletedCategory = await deleteOne(id);
      if (!deletedCategory) throw new Error("category not found!");
      //delete all related products
      await deleteMany(id);
      res.status(200).json({
        message: "categories and all related products are deleted",
        data: formatMongoData(deletedCategory),
      });
    } else {
      const relatedProducts = await getOne(id);
      if (relatedProducts.products.length > 0) {
        throw new Error("cannot delete this category, it remains products!");
      } else {
        const deletedCategory = await deleteOne(id);
        if (!deletedCategory) throw new Error("category not found!");
        res.status(200).json({
          message: "category deleted successfully!",
          data: formatMongoData(deletedCategory),
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

const updateCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedCategory = { ...req.body };
    const resp = await update(id, updatedCategory);
    if (!resp) throw new Error("category not found!");
    res.status(200).json({
      message: "category updated successfully!",
      data: formatMongoData(resp),
    });
  } catch (error) {
    next(error);
  }
};

const postCategory = async (req, res, next) => {
  try {
    const newCategory = { ...req.body };
    const resp = await post(newCategory);
    res.status(201).json({
      message: "category posted successfully!",
      data: formatMongoData(resp),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  deleteCategoryById,
  updateCategoryById,
  postCategory,
};
