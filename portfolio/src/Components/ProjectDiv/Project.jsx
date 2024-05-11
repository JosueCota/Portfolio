import ProjectFront from "./ProjectFront";
import ProjectBack from "./ProjectBack";
import style from "./project.module.css"

export default function Project({project, facing, handleFlipClick}) {

    const {projectName, projectDesc, projectLink, projectImg, date} = project;

    return (<div className={style.cardContainer}>
        
        {facing === "front"? <ProjectFront projectImg={projectImg} projectName={projectName} onClick={handleFlipClick}/>: <ProjectBack projectDesc={projectDesc} projectLink={projectLink} onClick={handleFlipClick} date={date}/>}
        </div>)

}