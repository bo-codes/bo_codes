const express = require("express");
require("dotenv").config();
const asyncHandler = require("express-async-handler");
const { fetchDataForAllYears } = require("../../fetch");
const { Octokit } = require("@octokit/core");
// TESTING TO SEE IF WE HAVE ACCESS TO .ENV FILE
// const test = require("dotenv").config();
// console.log(process.env.GH_AUTH, "TEST");

const router = express.Router();

const token = process.env.GH_AUTH || "bobo"

router.get(
  "/",
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

router.get(
  "/repos",
  asyncHandler(async (req, res) => {
    const octokit = new Octokit({
      auth: process.env.GH_AUTH,
    });

    console.log("HIT REPOS", token);
    const repoData = await octokit.request(
      "GET http://api.github.com/users/bo-codes/repos",
      // {
      //   username: "bo-codes",
      //   headers: {
      //     authorization: `Bearer ${token}`,
      //     "X-GitHub-Api-Version": "2022-11-28",
      //   },
      // }
    );
    return res.json(repoData);
  })
);

router.get(
  "/repos/languages",
  asyncHandler(async (req, res) => {
    console.log("HIT LANGUAGES");
    const language_url = req.query.url;
    const octokit = new Octokit({
      auth: process.env.GH_AUTH,
    });

    const repoData = await octokit.request(`GET ${language_url}`, {
      username: "bo-codes",
      headers: {
        authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    return res.json(repoData.data);
  })
);

module.exports = router;
