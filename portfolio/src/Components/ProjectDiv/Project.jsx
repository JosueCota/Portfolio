import ProjectFront from "./ProjectFront";
import ProjectBack from "./ProjectBack";
import style from "./project.module.css"
import { useState } from "react";

export default function Project({project, facing, handleFlipClick}) {

    const {projectName, projectDesc, projectLink, projectImg, date} = project;
    
   

    return (<div className={style.cardContainer}>
        
        {facing==="front"? <ProjectFront className={style.cardFront} projectImg={projectImg} projectName={projectName} onClick={handleFlipClick}/>:<ProjectBack className={style.cardBack} projectDesc={projectDesc} projectLink={projectLink} onClick={handleFlipClick} date={date}/>}
    
    </div>)

}