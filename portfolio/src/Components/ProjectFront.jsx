import style from "./projectfront.module.css"

export default function ProjectFront({projectName, projectImg}){

    return (
        <div className={style.container}>
            <img src={projectImg} alt={`Image of ${projectName}`} className={style.img} />
            <h1 className={style.title} >{projectName}</h1>
        </div>

    )
    
}