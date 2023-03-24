

const ProjectItem = ({data}) => {
  return (
    <a id="indiv-project" href={data.link} target='_blank'>
      <div id="project-container">
        <div id="project-content">
          <div id="project-name-and-comp">
            <div id="project-name">{data.name}</div>
            <div id="project-company">{data.company}</div>
          </div>
          <img id="project-img" src={data.img}/>
        </div>
      </div>
    </a>
  )
}

export default ProjectItem;
