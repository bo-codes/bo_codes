const express = require("express");
const asyncHandler = require("express-async-handler");
const app = express();
const { fetchDataForAllYears } = require("./fetch.js");
const request = require("request");
const { Octokit } = require("@octokit/core");



const cors = require("cors");
app.use(cors());

app.get(
  "/api/gh",
  asyncHandler(async (req, res) => {
    const { format } = req.query;
    const data = await fetchDataForAllYears("bo-codes", format);
    // ------------ THIS RETURNS JUST THIS YEAR'S CONTRIBUTIONS ------------ vv
    // let currData = {...data, contributions:await data.contributions.filter((contribution) => {
    //   return contribution.date.slice(0, 4) == '2023'
    // })}
    // console.log(currData)
    // ------------ THIS RETURNS JUST THIS YEAR'S CONTRIBUTIONS ------------ ^^
    // res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    // console.log("API HIT");
    return res.json(data);
  })
);

app.get(
  "/api/gh-repos",
  asyncHandler(async (req, res) => {
    const octokit = new Octokit({
      auth: "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",
    });

    const data1 = await octokit.request("GET /users/bo-codes/repos", {
      username: "bo-codes",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    // console.log(data1, "HIT REPOS");
    return res.json(data1);
  })
);

// app.get("/", (req, res) => {
//   res.send("Hello from Express!");
// });

app.listen(3001, () => {
  console.log("Listening on port 3000");
});
