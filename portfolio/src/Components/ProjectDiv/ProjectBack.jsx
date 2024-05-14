import style from "./project.module.css"

//Contains back of project
export default function ProjectBack({projectDesc, projectLink, onClick, date, projectSkills}){
    
    return (
        
        <div className={style.cardBack}>
            <div className={style.top} onClick={onClick}>

            <p className={style.desc} >{projectDesc} </p>
            <h3><div className={style.special}>Made with</div>{projectSkills.map(skill => (<span key={skill} className={style.skills}>{skill}</span>))}</h3>
            </div>

            <h3 className={style.bottom}>
                <a href={projectLink} target="_blank" className={style.link}>Project Link</a>
                <span className={style.date}>{date}</span>
            </h3>
        </div>
    )
}