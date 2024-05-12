import style from "./project.module.css"

export default function ProjectFront({projectName, projectImg, onClick}){

    return (
        <>
            <img src={projectImg} alt={`Image of ${projectName}`} className={style.img} onClick={onClick}/>
            <h2 className={style.bottom}>{projectName}</h2>
        </>

    )
    
}