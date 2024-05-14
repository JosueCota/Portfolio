import Projects from "../Components/ProjectDiv/Projects"
import Skills from "../Components/SkillDiv/Skills"
import {motion} from "framer-motion"
import style from "./showcase.module.css"

//Supercontainer of showcase section, also has a fade in animation
export default function Showcase() {
    return (
        
        <motion.div className={style.showcase} 
        
        >
            <Projects/>
            <Skills/>
        </motion.div>
    )
}