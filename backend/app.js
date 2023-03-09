const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const helmet = require("helmet");

const app = express();

app.use(cors());

if (process.env.NODE_ENV !== "production") {
  // enable cors only in development
  app.use(cors());
}

// ---------- helmet ---------- vv//
// helmet helps set a variety of headers to better secure your app
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);
// ---------- helmet ---------- ^^//

app.use(routes);

// if not in production use the port 3001
const PORT = process.env.PORT || 3001;
console.log("server started on port:", PORT);
app.listen(PORT);

module.exports = app;
