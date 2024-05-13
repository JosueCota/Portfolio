import ProjectFront from "./ProjectFront";
import ProjectBack from "./ProjectBack";
import style from "./project.module.css"
import {motion} from "framer-motion"

export default function Project({project, front, handleFlipClick, setFront}) {

    const {projectName, projectDesc, projectLink, projectImg, date, skills} = project;
    
   
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };
    

    return (<motion.div className={style.cardContainer}
        animate= {{rotateY: front? 0: 180}}
        
    >
        
        {front===true? <ProjectFront className={style.cardFront} projectImg={projectImg} projectName={projectName} onClick={handleFlipClick}/>:<ProjectBack className={style.cardBack} projectDesc={projectDesc} projectLink={projectLink} onClick={handleFlipClick} date={date} projectSkills={skills}/>}
    
    </motion.div>)

}