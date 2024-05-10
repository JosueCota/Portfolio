import { useState } from "react"
import style from "./projects.module.css"

import {projects} from "../data/projects"
import Project from "./Project"
import ChangeProjButton from "./ChangeProjButton";

export default function Projects() {
    const [projectInd, setProjectIndex] = useState(0);

    const handleLeftClick = () => {
        if (projectInd !== 0) {
            setProjectIndex((prev) => prev-1)
        } else {
            setProjectIndex(projects.length-1)
        }
    } 

    const handleRightClick = () => {
        if (projectInd !== projects.length-1) {
            setProjectIndex((prev) => prev+1)
        } else {
            setProjectIndex(0)
        }
    } 

    return (
        <div className={style.container}>
            <ChangeProjButton onClick={handleLeftClick} dir="left"/>
            <Project project={projects[projectInd]}/>
            <ChangeProjButton dir={"right"} onClick={handleRightClick}/>
        </div>
    )
}