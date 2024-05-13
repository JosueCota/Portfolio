import Projects from "../Components/ProjectDiv/Projects"
import Skills from "../Components/SkillDiv/Skills"
import {motion} from "framer-motion"

export default function Showcase() {
    return (
        
        <motion.div className="mt-5 w-10/12 grid grid-cols-showcase m-auto"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:.3}}
        >
            <Projects/>
            <Skills/>
        </motion.div>
    )
}