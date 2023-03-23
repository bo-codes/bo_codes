import ProjectItem from "../ProjectItem/ProjectItem";
import eventzeitImg from "../../img/portfolio/1.jpg"
import bobogramImg from "../../img/portfolio/2.jpg"
import gestalt3dImg from "../../img/portfolio/3.png"

const ProjectList = () => {
  const projects = [
    { name: "Bobogram", img: eventzeitImg, company: "Personal" },
    { name: "Eventzeit", img: bobogramImg, company: "Personal" },
    { name: "Gestalt3D", img: gestalt3dImg, company: "Gestalt 3D Technologies" },
    // { name: "Almira Akin", img: "", company: "Almira Akin" },
  ];

  return (
    <div id="project-list-container">
      {projects.map((proj, id) => (
        <ProjectItem data={proj} key={id} />
      ))}
    </div>
  );
};

export default ProjectList;
