import style from "./project.module.css"
import {motion, transform} from "framer-motion"



export default function ProjectFront({projectName, projectImg, onClick}){

    return (
        <div className={style.cardFront}>
            <img src={projectImg} alt={`Image of ${projectName}`} className={style.img} onClick={onClick}/>
            <h2 className={style.bottom}>{projectName}</h2>
        </div>

    )
    
}