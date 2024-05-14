import {motion} from "framer-motion"
import style from "./contacts.module.css"

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
                Hi! Thank you for checking out my Porfolio. If you would like to connect, reach out to me through any of the following!
            </p>
            <motion.ul className={style.list}>
                <motion.li variants={item}><a href="https://github.com/JosueCota" target="_blank"><img src="./src/imgs/icons/contacts/github.svg"/>Github</a></motion.li>
                <motion.li variants={item}><a href="https://www.linkedin.com/in/josue-a-cota/" target="_blank"><img src="./src/imgs/icons/contacts/linkedin.svg"/>LinkedIn</a></motion.li>
                <motion.li variants={item}><a href="mailto:xjaramis@gmail.com" target="_blank"><img src="./src/imgs/icons/contacts/email.svg"/>Email</a></motion.li>
                <motion.li variants={item}><a href="https://docs.google.com/document/d/e/2PACX-1vRcNHTs2oZXLaLGfOXrOlxdriuuj97gs9n5U6rhv4U9RTzxayuiPXW5YMCjjXUsKHuHjkvzh_MwBFAg/pub" target="_blank"><img src="./src/imgs/icons/contacts/resume.svg"/>Resume</a></motion.li>
            </motion.ul>
            </div>
    )
}