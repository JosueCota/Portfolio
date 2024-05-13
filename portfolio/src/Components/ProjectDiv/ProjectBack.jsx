import style from "./project.module.css"
import { motion } from "framer-motion"

export default function ProjectBack({projectDesc, projectLink, onClick, date, projectSkills}){
    
    return (
        
        <>
            <motion.div
            onClick={onClick}
            className={style.top}
                onHoverEnd={{opacity:.5}}
                >
                <p className={style.desc} >{projectDesc} </p>
                <h3><div className={style.special}>Made with</div>{projectSkills.map(skill => (<span className={style.skills}>{skill}</span>))}</h3>
            </motion.div>
                <h3 className={style.bottom}>
                    <a href={projectLink} target="_blank" className={style.link}>Project Link</a>
                    <span className={style.date}>{date}</span>
                </h3>
        </>
    )
}