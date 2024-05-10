import style from "./showcase.module.css"

export default function Showcase({children}) {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}