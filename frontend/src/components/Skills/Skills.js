import { useState } from "react";
import {
  SiJavascript,
  SiExpress,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiPython,
  SiFlask,
  SiReact,
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiSequelize,
  SiFigma,
  SiSketchup,
  SiBlender,
  SiShell,
  SiRuby,
  SiSwift,
  SiAmazonaws,
  SiDocker,
  SiBootstrap,
  SiNodemon,
  SiNodedotjs,
  SiNpm,
  SiGit,
  SiGithub,
  SiMarkdown,
  SiVisualstudiocode,
  SiHeroku,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobelightroom,
} from "react-icons/si";
import "./Skills.css"

const skillList = [
  {icon: <SiJavascript className="indiv-skill" />, name: "JavaScript"},
  {icon: <SiPython className="indiv-skill" />, name: "Python"},
  {icon: <SiTypescript className="indiv-skill" />, name: "TypeScript"},
  {icon: <SiHtml5 className="indiv-skill" />, name: "HTML"},
  {icon: <SiCss3 className="indiv-skill" />, name: "CSS"},
  {icon: <SiReact className="indiv-skill" />, name: "React"},
  {icon: <SiRedux className="indiv-skill" />, name: "Redux"},
  {icon: <SiExpress className="indiv-skill" />, name: "Express"},
  {icon: <SiFlask className="indiv-skill" />, name: "Flask"},
  {icon: <SiMongodb className="indiv-skill" />, name: "MongoDB"},
  {icon: <SiPostgresql className="indiv-skill" />, name: "Postgresql"},
  {icon: <SiSequelize className="indiv-skill" />, name: "Sequelize"},
  {icon: <SiFigma className="indiv-skill" />, name: "Figma"},
  {icon: <SiSketchup className="indiv-skill" />, name: "SketchUp"},
  {icon: <SiBlender className="indiv-skill" />, name: "Blender"},
  // {icon: <SiShell className="indiv-skill" />, name: "Shell"},
  {icon: <SiRuby className="indiv-skill" />, name: "Ruby"},
  {icon: <SiSwift className="indiv-skill" />, name: "Swift"},
  {icon: <SiAmazonaws className="indiv-skill" />, name: "AWS"},
  {icon: <SiDocker className="indiv-skill" />, name: "Docker"},
  {icon: <SiBootstrap className="indiv-skill" />, name: "Bootstrap"},
  // {icon: <SiNodemon className="indiv-skill" />, name: "Nodemon"},
  {icon: <SiNodedotjs className="indiv-skill" />, name: "Node.js"},
  // {icon: <SiNpm className="indiv-skill" />, name: "NPM"},
  {icon: <SiGit className="indiv-skill" />, name: "Git"},
  // {icon: <SiGithub className="indiv-skill" />, name: "Github"},
  {icon: <SiMarkdown className="indiv-skill" />, name: "Markdown"},
  {icon: <SiVisualstudiocode className="indiv-skill" />, name: "VSCode"},
  {icon: <SiHeroku className="indiv-skill" />, name: "Heroku"},
  {icon: <SiAdobephotoshop className="indiv-skill" />, name: "Photoshop"},
  {icon: <SiAdobeillustrator className="indiv-skill" />, name: "Illustrator"},
  {icon: <SiAdobelightroom  className="indiv-skill" />, name: "Lightroom"},
];

function Skills() {

  const [currSkill, setCurrSkill] = useState("Skill")

  // window.addEventListener("load", () => {
  //   // on page load
  //   document
  //     .getElementById("container")
  //     .addEventListener("mouseover", overAndOut);
  //   document
  //     .getElementById("container")
  //     .addEventListener("mouseout", overAndOut);
  // });
  // const overAndOut = (e) => {
  //   const tgt = e.target;
  //   if (e.target.classList.contains("note")) {
  //     const className = tgt.className.match(/[A-H]Nat/); // match on note classname
  //     [...document.querySelectorAll("." + className)].forEach(
  //       (elem) =>
  //         (elem.style.backgroundColor = e.type === "mouseover" ? "red" : "tan")
  //     );
  //   }
  // };

  return (
    <div className="section-wrapper">
      <div className="section" id="skills-container">
        <div id="skills-title">{currSkill}</div>
        <div id="skills-list" onMouseLeave={() => setCurrSkill("Skills")}>
          {skillList.map((skill) => {
            return (
              <div
                id="indiv-skill"
                onMouseEnter={() => setCurrSkill(skill.name)}
              >
                {skill.icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
