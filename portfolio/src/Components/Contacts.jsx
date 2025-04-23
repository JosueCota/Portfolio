import {motion} from "framer-motion"
import style from "../pages/contacts.module.css"
import gitImg from "../images/github.svg"
import emailImg from "../images/email.svg"
import linkedImg from "../images/linkedin.svg"
import resumeImg from "../images/resume.svg"

//Specifc animation each item does, fade in in this case
const item = {
    initial: {
        opacity:0
    },
    animate: {
        opacity: 1
    }
}

//Contains contacts section
export default function Contacts() {

    return (
            <div className={style.contactsContainer} >
            <p className={style.p}>
                Hi! Thank you for checking out my Porfolio. If you would like to connect or view what I've made, click any of the following!
            </p>
            <motion.ul className={style.list}>
                <motion.li variants={item}><a href="https://github.com/JosueCota" target="_blank"><img src={gitImg}/>Github</a></motion.li>
                <motion.li variants={item}><a href="https://www.linkedin.com/in/josue-a-cota/" target="_blank"><img src={linkedImg}/>LinkedIn</a></motion.li>
                <motion.li variants={item}><a href="mailto:xjaramis@gmail.com" target="_blank"><img src={emailImg}/>Email</a></motion.li>
                <motion.li variants={item}><a href="https://www.overleaf.com/read/pcbxptwntzby#222ed1" target="_blank"><img src={resumeImg}/>Resume</a></motion.li>
            </motion.ul>
            </div>
    )
}