import GithubInfo from "../../components/GithubInfo/GithubInfo";
import GithubSection from "../../components/githubSection/GithubSection";
import "./HomePage.css";


function HomePage({data, loading}) {
  return (
    <>
      <GithubSection data={data}/>
      <GithubInfo />
    </>
  )
}

export default HomePage;
