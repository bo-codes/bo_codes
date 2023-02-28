import GithubSection from "../../components/githubSection/GithubSection";
import "./HomePage.css";
// import { drawContributions } from "github-contributions-canvas";

// drawContributions(canvasEl, {
//   data: contributionData,
//   username: "bo-codes",
//   themeName: "GitHub Dark",
//   footerText: "Made by @sallar - github-contributions.now.sh",
// });

function HomePage({data, loading}) {
  return <GithubSection data={data}/>
}

export default HomePage;
