import ProjectList from "../../components/ProjectList/ProjectList";
import "./ProjectsPage.css";

function ProjectsPage({ loading }) {
  return (
    <div className="section-wrapper">
      <div className="section">
        {!loading && (
          <div id="projects-page-container">
            <ProjectList />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;
