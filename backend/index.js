const express = require("express");
const asyncHandler = require("express-async-handler");
const app = express();
const { fetchDataForAllYears } = require("./fetch.js");
const request = require("request");
const axios = require("axios");
require("dotenv").config();
const { Octokit } = require("@octokit/core");


const cors = require("cors");
const { response } = require("express");
app.use(cors());

const token = process.env.GH_AUTH;
// // ---------- NOT OUR STUFF ---------- vv
// // serve up production assets
// app.use(express.static("../frontend/build/"));
// // let the react app to handle any unknown routes
// // serve up the index.html if express does'nt recognize the route
// const path = require('path');
// app.get('*', (req, res) => {
// res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
// });
// // ---------- NOT OUR STUFF ---------- ^^

// ---------- NOT OUR STUFF 2 ---------- vv
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  // Serve the frontend's index.html file at the root route
  app.get("/", (req, res) => {
    // res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, "../frontend", "build", "index.html")
    );
  });

  // Serve the static assets in the frontend's build folder
  app.use(express.static(path.resolve("../frontend/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  app.get(/^(?!\/?api).*/, (req, res) => {
    // res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, "../frontend/build/index.html")
    );
  });
}
// ---------- NOT OUR STUFF 2 ---------- ^^


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
  "/api/gh-repos/",
  asyncHandler(async (req, res) => {
    // axios
    //   .get("https://api.github.com/user/repos", {
    //     headers: {
    //       Authorization: `Bearer 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`,
    //     },
    //   })
    //   .then((response) => (response));
    // return res
    const octokit = new Octokit({
      auth: process.env.GH_AUTH,
    });

    const repoData = await octokit.request(
      "GET https://api.github.com/user/repos",
      {
        username: "bo-codes",
        headers: {
          authorization: `Bearer ${token}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    // console.log(repoData, "HIT REPOS");
    return res.json(repoData);
  })
);

app.get(
  "/api/gh-repos/languages",
  asyncHandler(async (req, res) => {
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

    // console.log(repoData.data, "HIT LANGUAGE");
    return res.json(repoData.data);
  })
);

// app.get("/", (req, res) => {
//   res.send("Hello from Express!");
// });

// if not in production use the port 3001
const PORT = process.env.PORT || 3001;
console.log('server started on port:',PORT);
app.listen(PORT);

// app.listen(3001, () => {
//   console.log("Listening on port 3000");
// });
