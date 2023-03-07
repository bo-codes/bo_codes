const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();


if (process.env.NODE_ENV !== "production") {
  // enable cors only in development
  app.use(cors());
}

app.use(routes);

// if not in production use the port 3001
const PORT = process.env.PORT || 3001;
console.log("server started on port:", PORT);
app.listen(PORT);

module.exports = app;
