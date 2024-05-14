import Projects from "../Components/ProjectDiv/Projects"
import Skills from "../Components/SkillDiv/Skills"
import {motion} from "framer-motion"
import style from "./showcase.module.css"

export default function Showcase() {
    return (
        
        <motion.div className={style.showcase}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:.3}}
        >
            <Projects/>
            <Skills/>
        </motion.div>
    )
}