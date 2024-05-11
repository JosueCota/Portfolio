
export default function Skill({skills, title}) {
    return (
        <div className="my-4 border border-2 rounded-3xl p-5">
            <h3 className="mx-auto">{title}:</h3>
            <ul className="flex flex-wrap">
                {skills.map(skill => (
                    <>  
                    <img className="aspect-square w-8 hover:scale-110 m-3" key={skill} src={`../../src/imgs/icons/skills/${skill}.svg`} title={skill.toUpperCase()}/>
                </>
                    ))}
            </ul>
        </div>
    )
}