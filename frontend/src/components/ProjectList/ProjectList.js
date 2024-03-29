import ProjectItem from "../ProjectItem/ProjectItem";
import eventzeitImg from "../../img/portfolio/1.jpg"
import bobogramImg from "../../img/portfolio/2.jpg"
import gestalt3dImg from "../../img/portfolio/3.png"
import B0rdleImg from "../../img/portfolio/4.png"
import ilaydaImg from "../../img/portfolio/5.png"
import textScanImg from "../../img/portfolio/6.gif"

const ProjectList = () => {
  const projects = [
    {
      name: "Bobogram",
      img: eventzeitImg,
      company: "Personal",
      link: "https://bobo-gram.herokuapp.com/",
    },
    {
      name: "Eventzeit",
      img: bobogramImg,
      company: "Personal",
      link: "https://eventzeit.onrender.com/",
    },
    {
      name: "Gestalt3D",
      img: gestalt3dImg,
      company: "Gestalt 3D",
      link: "https://gestalt3d.com/",
    },
    {
      name: "B0rdle",
      img: B0rdleImg,
      company: "Personal",
      link: "https://b0rdle.netlify.app/",
    },
    {
      name: "Ilayda Magrann",
      img: ilaydaImg,
      company: "Freelance",
      link: "https://ilaydamagrann.netlify.app/",
    },
    {
      name: "text-scan",
      img: textScanImg,
      company: "NPM Package",
      link: "https://www.npmjs.com/package/text-scan",
    },
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
