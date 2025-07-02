const {
  getAll,
  getById,
  deleteById,
  updateById,
  post,
  getTotalProductsCount,
} = require("../services/productService");
const formatMongoData = require("../utils/formatMongoData");
const buildSearchQuery = require("../utils/buildSearchQuery");
const { getOne } = require("../services/categoryService");

//get all
const getAllProducts = async (req, res, next) => {
  try {
    const {
      search = "",
      sortBy = "price",
      order = "asc",
      page = 1,
      limit = 5,
    } = req.query;

    const queryCast = buildSearchQuery(search);
    const sortOrder = order === "desc" ? -1 : 1;

    const products = await getAll({
      queryCast,
      sortBy,
      sortOrder,
      page,
      limit,
    });
    res.status(200).json({
      message: "products retrieved successfully!",
      totalProducts: await getTotalProductsCount(),
      page: +page,
      data: formatMongoData(products),
    });
  } catch (error) {
    next(error);
  }
};

//get by id
const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getById(id);
    if (!product) {
      res.status(404).json({
        message: "product not found with given id",
        data: null,
      });
    } else {
      res.status(200).json({
        message: "product retrieved successfully!",
        data: formatMongoData(product),
      });
    }
  } catch (error) {
    next(error);
  }
};

//delete by id
const deleteProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await deleteById(id);
    if (!deletedProduct) {
      res.status(404).json({
        message: "product not found with given id",
        data: null,
      });
    } else {
      res.status(200).json({
        message: "product deleted successfully!",
        data: deletedProduct,
      });
    }
  } catch (error) {
    next(error);
  }
};

//update by id
const updateProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedProduct = await updateById(id, req.body);
    if (!updatedProduct) {
      res.status(404).json({
        message: "product not found with given id",
        data: updatedProduct,
      });
    } else {
      res.status(200).json({
        message: "product updated successfully!",
        data: updatedProduct,
      });
    }
  } catch (error) {
    next(error);
  }
};

//post
const postProduct = async (req, res, next) => {
  try {
    const { category } = req.body;
    const existedCategory = await getOne(category);
    if (!existedCategory) throw new Error("invalid category!");
    const postedProduct = await post(req.body);
    res.status(201).json({
      message: "product posted successfully!",
      data: postedProduct,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  postProduct,
};
