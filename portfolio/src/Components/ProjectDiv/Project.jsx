import ProjectFront from "./ProjectFront";
import ProjectBack from "./ProjectBack";
import style from "./project.module.css"
import {animate, motion, transform} from "framer-motion"


export default function Project({project, front, handleFlipClick}) {
    
    const {projectName, projectDesc, projectLink, projectImg, date, skills} = project;
    
    return (<motion.div className={style.cardContainer}
        animate= {{rotateY: front? 0: 180,}}  
        transition={{duration: 0.2, animationDirection: "normal"}}
    > 
        <ProjectFront projectImg={projectImg} projectName={projectName} onClick={handleFlipClick}/>
        <ProjectBack projectDesc={projectDesc} projectLink={projectLink} onClick={handleFlipClick} date={date} projectSkills={skills}/>
    
    </motion.div>)

}