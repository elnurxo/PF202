const express = require("express");
const app = express(); //server app
const path = require("path");
const PORT = 3030;
//require products
const products = require("./data/products");

//default base url (returns HTML view)
app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

//get all products (search, sort, pagination ???)
app.get("/products", (req, res) => {
  const { search = "" } = req.query;
  const { sortBy } = req.query;
  let filteredProducts = [...products];
  if (sortBy) {
    const [key, order] = sortBy.split("-"); //price-asc => ['price','asc']
    filteredProducts = [
      ...filteredProducts.sort((a, b) => {
        switch (order) {
          case "asc":
            if (key === "name" || key === "description") {
              return a[key].localeCompare(b[key]);
            }
            return a[key] - b[key];
          case "desc":
            if (key === "name" || key === "description") {
              return b[key].localeCompare(a[key]);
            }
            return b[key] - a[key];
        }
      }),
    ];
  }
  if (search) {
    filteredProducts = products.filter((p) => {
      return (
        p.name.toLowerCase().trim().includes(search.toLowerCase().trim()) ||
        p.description.toLowerCase().trim().includes(search.toLowerCase().trim())
      );
    });
  }

  try {
    res.status(200).json({
      message: "products retrieved successfully!",
      success: true,
      data: filteredProducts,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "internal server error!",
      success: false,
      data: null,
    });
  }
});

//get product by id
app.get("/products/:id", (req, res) => {
  try {
    const { id } = req.params;
    const product = products.find((p) => p.id == id); //static array
    if (product) {
      res.status(200).json({
        message: "product retrieved successfully!",
        success: true,
        data: product,
      });
    } else {
      res.status(404).json({
        message: "product not found!",
        success: true,
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || "internal server error",
      success: false,
      data: null,
    });
  }
});

//post, put, patch, delete - ...

//server listen
app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`);
});
