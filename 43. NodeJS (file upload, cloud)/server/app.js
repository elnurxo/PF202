const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { rateLimit } = require("express-rate-limit");
const app = express();
const errorHandler = require("./src/errors/errorBoundary");
require("dotenv").config();
const productRouter = require("./src/routes/productRoute");
const categoryRouter = require("./src/routes/categoryRoute");
const sliderRouter = require("./src/routes/sliderRoute");

//global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//security middlewares
app.use(helmet());
const corsOptions = {
  origins: ["http://localhost:5730", "https://deployurl.com"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-8", // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});
app.use(limiter);

//route middlewares
app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/sliders", sliderRouter);

//global error handler
app.use(errorHandler);

module.exports = app;
