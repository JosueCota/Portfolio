import style from "./about.module.css"
import Contacts from "../Components/Contacts"
import {motion} from "framer-motion"

//Shows skills in staggered fade in motion 
const listStagger = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition : {
            duration: .4,
            staggerChildren: 0.3
        }
    }
}

//Displays about me section
export default function About() {
    return (
        <div className={style.hero}>
            
            <div className={style.about}>
                <h1 className={style.title}>About Me</h1>
                <p className={style.par}>My name's Josue Cota and I'm currently an undergraduate at CSUF, majoring in Computer Science. I'm a member of the ACM club as well as the Video Game Development Club and I previously attended Cypress College and will be graduating this December. </p>
            </div>
            <div className={style.hobbies}>
                <h1 className={style.title}>Hobbies</h1>
                <p className={style.par}>My hobbies include gaming, robotics, and reading sci-fi books. I also enjoy attending hackathons, practicing leetcode, and keeping up to date with new technologies.
                </p>
            </div>

            <div className={style.plans}>
                <h1 className={style.title}>Plans</h1>
                <p className={style.par}>My goal after graduating is to go into web development as a full-stack engineer. I am hoping to learn Svelte, HTMX, and Firebase in the summer.
                </p>
            </div>
            <motion.div
                variants={listStagger}
                initial="initial"
                animate="animate"
                className={style.sidebar}
            >
                <Contacts></Contacts>
            </motion.div>
        </div>
    );
}