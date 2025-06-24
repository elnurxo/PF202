const express = require("express");
const app = express(); //server app
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const { rateLimit } = require("express-rate-limit");
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const products = require("./data/products");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(
  cors({
    origin: ["http://127.0.0.1:5500"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

//Dos Attack
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  // store: ... , // Redis, Memcached, etc. See below.
});
app.use(limiter);
app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "DENY");
});

//default base url (returns HTML view)
app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

//GLOBAL MIDDLEWARE (simple auth middleware)
// const isAuth = false;
// app.use((req, res, next) => {
//   if (isAuth) {
//     next();
//   } else {
//     res.status(403).json({
//       message: "authentication failed!",
//     });
//   }
// });

//API key middleware
// app.use((req, res, next) => {
//   const apiKey = req.headers["api-key"];

//   if (apiKey) {
//     if (apiKey === process.env.API_KEY) {
//       next();
//     } else {
//       res.status(403).json({
//         message: "invalid api key",
//       });
//     }
//   } else {
//     res.status(403).json({
//       message: "api key is not provided!",
//     });
//   }
// });

//get all products (search, sort, pagination)
app.get(
  "/products",
  //middleware
  (req, res, next) => {
    console.log("inner middleware executed!");
    next();
  },
  //controller
  (req, res) => {
    const { search = "" } = req.query;
    const { sortBy } = req.query;
    const { page = 1, limit = 2 } = req.query;

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
          p.description
            .toLowerCase()
            .trim()
            .includes(search.toLowerCase().trim())
        );
      });
    }

    //pagination logic
    filteredProducts = [
      ...filteredProducts.slice((page - 1) * limit, page * limit),
    ];

    try {
      res.status(200).json({
        message: "products retrieved successfully!",
        totalProducts: products.length,
        page: +page,
        hasNext: products.length > page * limit,
        hasPrevious: page != 1,
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
  }
);

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

//delete
app.delete("/products/:id", (req, res) => {
  try {
    const { id } = req.params;
    const productIdx = products.findIndex((p) => p.id == id);
    if (productIdx != -1) {
      products.splice(productIdx, 1);
      res.status(200).json({
        message: "product removed successfully!",
        products: products,
      });
    } else {
      res.status(404).json({
        message: "product not found with given id!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || "internal server error!",
    });
  }
});

//post (simple validation)
app.post(
  "/products",
  //api key middleware
  (req, res, next) => {
    const apiKey = req.headers["api-key"];
    if (apiKey) {
      if (apiKey === process.env.API_KEY) {
        next();
      } else {
        res.status(403).json({
          message: "invalid api key",
        });
      }
    } else {
      res.status(403).json({
        message: "api key is not provided!",
      });
    }
  },
  //validation middleware
  (req, res, next) => {
    const { name, price, description } = req.body;
    if (!name || !price || !description) {
      res.status(400).json({
        message: "invalid product schema!",
      });
    } else {
      next();
    }
  },
  (req, res) => {
    try {
      const { name, price, description } = req.body;
      //simple validation
      const newProduct = {
        id: +products[products.length - 1].id + 1,
        name,
        price,
        description,
      };
      products.push(newProduct);
      res.status(201).json({
        data: newProduct,
        message: "product posted successfully!",
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message || "internal server error!",
      });
    }
  }
);

//patch (partial update)
app.patch("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  try {
    const product = products.find((p) => p.id == id);
    if (product) {
      //partial update
      if (name) product.name = name;
      if (price) product.price = price;
      if (description) product.description = description;

      const idx = products.findIndex((p) => p.id == id);
      products.splice(idx, 1, product);

      res.status(200).json({
        message: "partial update successfully!",
        data: product,
        success: true,
      });
    } else {
      res.status(404).json({
        message: "product not found with given id!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || "internal server error!",
    });
  }
});

//put (optional)
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  try {
    const product = products.find((p) => p.id == id);
    if (product) {
      //put update
      name ? (product.name = name) : delete product.name;
      description
        ? (product.description = description)
        : delete product.description;
      price ? (product.price = price) : delete product.price;

      const idx = products.findIndex((p) => p.id == id);
      products.splice(idx, 1, product);
      res.status(200).json({
        message: "product updated successfully!",
        data: product,
      });
    } else {
      res.status(404).json({
        message: "product not found!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || "internal server error!",
    });
  }
});

//CATEGORIES
app.get("/categories", (_, res) => {
  res.status(200).json({
    data: [],
    message: "categories retrieved successfully",
  });
});

app.get("/categories/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    data: {},
    id: id,
    message: "category retrieved successfully",
  });
});

//server listen
app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`);
});
