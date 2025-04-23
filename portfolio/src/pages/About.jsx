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
                <p className={style.par}>
                Hi, I'm Josue Cota— a recent graduate with a Bachelor of Science in Computer Science from California State University, Fullerton. During my time at CSUF, I actively engaged in communities that helped shape my growth as a developer, including the Association for Computing Machinery (ACM) club. Through ACM, I gained valuable insights, attended workshops, and connected with like-minded peers and professionals in the field.

                I also explored my passion for creativity and collaboration through the Video Game Development Club where I collaborated with artists, sound designers, and other software engineers to create several games from concept to completion. These experiences not only enhanced my technical skills but also deepened my appreciation for interdisciplinary teamwork and creative problem-solving.

                I'm enthusiastic about building impactful software and always looking to grow as an engineer through new challenges and collaborative projects.
                </p>
            </div>

            <div className={style.plans}>
                <h1 className={style.title}>Plans</h1>
                <p className={style.par}>Currently, my goal is to break into web development or app development, with the long-term ambition of becoming a full-stack engineer. I’m passionate about building meaningful, user-friendly applications and constantly learning new technologies to expand my toolkit. Whether it's front-end frameworks or back-end systems, I'm eager to deepen my expertise and contribute to innovative, real-world solutions.

                I'm always open to collaboration and new challenges—let’s build something awesome together.
                </p>
            </div>
            <div className={style.hobbies}>
                <h1 className={style.title}>Interests</h1>
                <p className={style.par}>On my free time, I enjoy playing video games, dabbling with robotics, playing the guitar, and reading books. I also enjoy attending hackathons, practicing leetcode, and keeping up to date with new technologies.
                </p>
            </div>
            <motion.div
                variants={listStagger}
                initial="initial"
                whileInView="animate"
                className={style.sidebar}
            >
                <Contacts></Contacts>
            </motion.div>
        </div>
    );
}