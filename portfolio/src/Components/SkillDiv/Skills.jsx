import { skills } from "../../data/skills"
import Skill from "./Skill"
import style from "./skills.module.css"


export default function Skills(){

    return ( 
        <>
    <div>
    <h1 className={style.skillsTitle}>Skills</h1>
        <div className="flex justify-center flex-wrap">
            <Skill skills={skills[0]} title="Languages" />
        </div>
        <div className="flex justify-center flex-wrap">
            <Skill skills={skills[1]} title="Technologies" />
        </div>
    </div>
        </>
)
}