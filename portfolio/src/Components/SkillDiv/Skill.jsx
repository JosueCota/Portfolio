
export default function Skill({skills, title}) {
    return (
        <div className="my-4 border border-2 rounded-3xl p-5 font-semibold underline">
            <h3 className="mx-auto">{title}:</h3>
            <ul className="flex flex-wrap justify-evenly">
                {skills.map(skill => (  
                    <img className="aspect-square w-8 hover:scale-150 m-3" key={skill} src={`../../src/imgs/icons/skills/${skill}.svg`} title={skill.toUpperCase()}/>
                
                    ))}
            </ul>
        </div>
    )
}