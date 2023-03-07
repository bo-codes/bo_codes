const express = require("express");
const router = express.Router();
const apiRouter = require("./api");


router.use('/api', apiRouter);


router.use(express.static("public"));




// const path = require("path");
// console.log(path.resolve(__dirname, "../../frontend/build"));
// ---------- BOILER PLATE TO RUN REACT APP IN PRODUCTION ---------- vv
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  // Serve the frontend's index.html file at the root route
  router.get("/", (req, res) => {
    // res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(path.resolve(__dirname, "../../frontend", "build", "index.html"));
  });

  // Serve the static assets in the frontend's build folder
  router.use(express.static(path.resolve(__dirname, "../../frontend/build")));

  // // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    // res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(path.resolve(__dirname, "../../frontend", "build", "index.html"));
  });

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get("*", (req, res) => {
    // res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(path.resolve(__dirname, "../../frontend", "build", "index.html"));
  })
}
// ---------- BOILER PLATE TO RUN REACT APP IN PRODUCTION ---------- ^^

module.exports = router;
