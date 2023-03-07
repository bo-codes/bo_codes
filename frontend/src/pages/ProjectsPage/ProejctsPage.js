import AppTypeGraph from "../../components/AppTypeGraph/AppTypeGraph";
import LanguagesGraph from "../../components/LanguagesGraph/LanguagesGraph";
import "./ProjectsPage.css";

function ProjectsPage({ loading }) {
  return (
    !loading && (
      <div id="projects-page-container">
        <LanguagesGraph />
        <AppTypeGraph />
      </div>
    )
  );
}

export default ProjectsPage;
