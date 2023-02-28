const express = require("express");
const asyncHandler = require("express-async-handler");
const app = express();
const {fetchDataForAllYears} = require("./fetch.js")

// const router = express.Router();

const cors = require("cors");
app.use(cors());

app.get(
  "/api/gh",
  asyncHandler(async (req, res) => {
    const { format } = req.query;
    const data = await fetchDataForAllYears('bo-codes', format);
    // ------------ THIS RETURNS JUST THIS YEAR'S CONTRIBUTIONS ------------ vv
    // let currData = {...data, contributions:await data.contributions.filter((contribution) => {
    //   return contribution.date.slice(0, 4) == '2023'
    // })}
    // console.log(currData)
    // ------------ THIS RETURNS JUST THIS YEAR'S CONTRIBUTIONS ------------ ^^
    // res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    console.log("API HIT")
    return res.json(data);
  })
);

// app.get("/", (req, res) => {
//   res.send("Hello from Express!");
// });

app.listen(3001, () => {
  console.log("Listening on port 3000");
});
