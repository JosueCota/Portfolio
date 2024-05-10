import { useState } from "react";
import ProjectFront from "./ProjectFront";
import ProjectBack from "./ProjectBack";
import style from "./project.module.css"

export default function Project({project}) {
    const [face, setFace] = useState("front");

    const {projectName, projectDesc, projectLink, projectImg} = project;


    return (<div className={style.container}>
        
        {face === "front"? <ProjectFront projectImg={projectImg} projectName={projectName}/>: <ProjectBack projectDesc={projectDesc} projectLink={projectLink} />}
        
        </div>)

}