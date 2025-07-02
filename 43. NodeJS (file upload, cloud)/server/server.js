const app = require("./app");
const connectDB = require("./src/config/db");
const { SERVER_PORT } = require("./src/config/config");
const PORT = SERVER_PORT || 3001;

app.listen(PORT, () => {
  connectDB()
    .then(() => {
      console.log(`server running on PORT: ${PORT} 🚀`);
    })
    .catch(() => {
      console.log("❌ db connection failed!");
    });
});
