import style from "./project.module.css"
import {animate, motion} from "framer-motion"

const fadeIn = {
    initial: {
        opacity: 0,

    },
    animate: {
        opacity: 1
    }
}

export default function ProjectFront({projectName, projectImg, onClick}){

    return (
        <motion.div className={style.cardFront}
            variants={fadeIn}
            whileInView="animate"
            initia="initial"
        >
            <img src={projectImg} alt={`Image of ${projectName}`} className={style.img} onClick={onClick}/>
            <h2 className={style.bottom}>{projectName}</h2>
        </motion.div>

    )
    
}