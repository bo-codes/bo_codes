const router = require("express").Router();
const ghRouter = require("./gh.js");

router.use("/gh", ghRouter);

module.exports = router;
