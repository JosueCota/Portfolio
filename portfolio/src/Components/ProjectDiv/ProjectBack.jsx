import style from "./project.module.css"

export default function ProjectBack({projectDesc, projectLink, onClick, date}){
    
    return (
        
        <div className="font-semibold">
            <p onClick={onClick} className={style.top}>{projectDesc} </p>
            <h3 className={style.bottom}>
                <a href={projectLink} target="_blank" className={style.link}>Github Link</a>
                <span className={style.date}>{date}</span>
            </h3>
        </div>
    )
}