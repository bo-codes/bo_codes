import AppTypeGraph from "../../components/AppTypeGraph/AppTypeGraphVertical";
import LanguagesGraph from "../../components/LanguagesGraph/LanguagesGraph";
import GithubSection from "./GithubSection/GithubSection";
import "./HomePage.css";
// import detect from "detect.js"
// const user = detect.parse(navigator.userAgent)

function HomePage({ data, loading }) {
  return (
    <div className="section-wrapper">
      <div id="github-container" className="section">
        <GithubSection data={data} loading={loading} />
        {/* {user.browser.family} */}
      </div>
    </div>
  );
}

export default HomePage;
