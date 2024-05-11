import { skills } from "../../data/skills"
import Skill from "./Skill"

export default function Skills(){

    return ( 
        <>
    <div>
    <h1 className="text-center text-3xl">Skills</h1>
        <div className="flex justify-center">
            <Skill skills={skills[0]} title="Languages" />
        </div>
        <div className="flex justify-center">
            <Skill skills={skills[1]} title="Technologies" />
        </div>
    </div>
        </>
)
}