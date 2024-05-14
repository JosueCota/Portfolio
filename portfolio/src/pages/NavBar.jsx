import { Link } from "react-router-dom";
import style from "./navbar.module.css"

export default function NavBar() {

    return (
    <div className={style.nav}>
        <ul className={style.links}>
            <Link className={style.link} to="/">HOME</Link>
            <Link className={style.link} to="/showcase">SHOWCASE</Link>
        </ul>
    </div>
    )
}