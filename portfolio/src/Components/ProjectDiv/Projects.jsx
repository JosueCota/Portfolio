import { useState } from "react"
import style from "./projects.module.css"
import {projects} from "../../data/projects"
import Project from "./Project"
import ChangeProjButton from "./ChangeProjButton";
import {motion} from "framer-motion"

//Fade in animation of project card
const fadeIn = {
    initial: {
        opacity: 0

    },
    animate: {
        opacity: 1,
        transition: {
            duration: .5
        }
    }
}

export default function Projects() {
    const [projectInd, setProjectIndex] = useState(0);
    const [front, setFront] = useState(true);

    //Switches flip state
    function handleFlipClick() {
        setFront(prev => !prev);
    }

    //Handles click of left arrow, avoids negative index
    const handleLeftClick = () => {
        if (projectInd !== 0) {
            setProjectIndex((prev) => prev-1)
        } else {
            setProjectIndex(projects.length-1)
        }
        if(front=== false) {
            handleFlipClick()
        }
    } 

    //Handles click of right arrow, avoids out of bounds index
    const handleRightClick = () => {
        if (projectInd !== projects.length-1) {
            setProjectIndex((prev) => prev+1)
        } else {
            setProjectIndex(0)
        }
        if(front=== false) {
            handleFlipClick()
        }
    } 

    //Animation reacts to projectInd changes, so everytime the index is changed, it fades in again
    return (
        <div>
            <h1 className="text-3xl text-center">Projects</h1>
            <div className={style.container}>
                <ChangeProjButton onClick={handleLeftClick} dir="left"/>
                <motion.div
                key={projectInd}
                variants={fadeIn}
                initial="initial"
                animate="animate"
                >
                <Project project={projects[projectInd]} setFront={setFront} front={front} handleFlipClick={handleFlipClick}/>
                </motion.div>
                <ChangeProjButton dir={"right"} onClick={handleRightClick}/>
            </div>
        </div>
    )
}