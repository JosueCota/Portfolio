import { useState } from "react"
import style from "./projects.module.css"

import {projects} from "../../data/projects"
import Project from "./Project"
import ChangeProjButton from "./ChangeProjButton";

export default function Projects() {
    const [projectInd, setProjectIndex] = useState(0);
    const [facing, setFacing] = useState("front");

    function handleFlipClick() {
        setFacing((prev) => {
           if (prev=== "front"){
            return "back"
           } else {
            return "front"
           }
        });

        //Animation FlipCard
    }

    const handleLeftClick = () => {
        if (projectInd !== 0) {
            setProjectIndex((prev) => prev-1)
        } else {
            setProjectIndex(projects.length-1)
        }
        if(facing=== "back") {
            handleFlipClick()
        }
    } 

    const handleRightClick = () => {
        if (projectInd !== projects.length-1) {
            setProjectIndex((prev) => prev+1)
        } else {
            setProjectIndex(0)
        }
        if(facing=== "back") {
            handleFlipClick()
        }
    } 

    return (
        <div>
            <h1 className="text-3xl text-center">Projects</h1>
            <div className={style.container}>
                <ChangeProjButton onClick={handleLeftClick} dir="left"/>
                <Project project={projects[projectInd]} setFacing={setFacing} facing={facing} handleFlipClick={handleFlipClick}/>
                <ChangeProjButton dir={"right"} onClick={handleRightClick}/>
            </div>
        </div>
    )
}