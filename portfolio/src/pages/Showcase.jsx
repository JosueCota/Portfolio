import Projects from "../Components/ProjectDiv/Projects"
import Skills from "../Components/SkillDiv/Skills"

export default function Showcase() {
    return (
        <div className="mt-5 w-10/12 grid grid-cols-showcase m-auto">
            <Projects/>
            <Skills/>
        </div>
    )
}