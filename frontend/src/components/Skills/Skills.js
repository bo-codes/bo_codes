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
  <SiJavascript className="indiv-skill" />,
  <SiPython className="indiv-skill" />,
  <SiTypescript className="indiv-skill" />,
  <SiHtml5 className="indiv-skill" />,
  <SiCss3 className="indiv-skill" />,
  <SiReact className="indiv-skill" />,
  <SiRedux className="indiv-skill" />,
  <SiExpress className="indiv-skill" />,
  <SiFlask className="indiv-skill" />,
  <SiPostgresql className="indiv-skill" />,
  <SiSequelize className="indiv-skill" />,
  <SiFigma className="indiv-skill" />,
  <SiSketchup className="indiv-skill" />,
  <SiBlender className="indiv-skill" />,
  <SiShell className="indiv-skill" />,
  <SiRuby className="indiv-skill" />,
  <SiSwift className="indiv-skill" />,
  <SiAmazonaws className="indiv-skill" />,
  <SiDocker className="indiv-skill" />,
  <SiBootstrap className="indiv-skill" />,
  <SiNodemon className="indiv-skill" />,
  <SiNodedotjs className="indiv-skill" />,
  <SiNpm className="indiv-skill" />,
  <SiGit className="indiv-skill" />,
  <SiGithub className="indiv-skill" />,
  <SiMarkdown className="indiv-skill" />,
  <SiVisualstudiocode className="indiv-skill" />,
  <SiHeroku className="indiv-skill" />,
  <SiAdobephotoshop className="indiv-skill" />,
  <SiAdobeillustrator className="indiv-skill" />,
  <SiAdobelightroom  className="indiv-skill" />,
];

function Skills() {
  return (
    <div id="skills-list">
      {skillList.map((skill) => {
        return (
          <div id="indiv-skill">
            {skill}
          </div>
        )
      })}
    </div>
  )
}

export default Skills;
