import AppTypeGraph from "../../components/AppTypeGraph/AppTypeGraph";
import LanguagesGraph from "../../components/LanguagesGraph/LanguagesGraph";
import "./ProjectsPage.css"

function ProjectsPage() {
  return (
    <div id="projects-page-container">
      <LanguagesGraph />
      <AppTypeGraph />
    </div>
  );
}

export default ProjectsPage;
