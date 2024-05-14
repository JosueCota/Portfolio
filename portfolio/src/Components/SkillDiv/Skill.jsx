import { motion } from "framer-motion"
import style from "./skills.module.css"

//Fade in and bubble animation of list of skills, stagger animation
const fadeInVarient = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3 + 0.05 * index
        }
    }),
    hover: {
        scale: 1.3,
    }
}

export default function Skill({skills, title}) {

    return (
        <div className={style.skillContainer}>
            <h3 className={style.skillTitle}>{title}:</h3>
            <ul className={style.skillList}>
                {skills.map((skill, index) => (
                    <motion.li key={skill}
                        variants={fadeInVarient}
                        initial="initial"
                        whileInView="animate"
                        whileHover="hover"
                        viewport={{once: true}}
                        custom={index}
                    >
                        <img className={style.skillsImg} src={`/src/static/assets/${skill}.svg`} title={skill.toUpperCase()}/>
                    </motion.li> 
                ))}
            </ul>
        </div>
    )
}