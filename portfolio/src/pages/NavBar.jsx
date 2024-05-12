import { Link } from "react-router-dom";
import style from "./navbar.module.css"

export default function NavBar() {
    return (
    <>
        <ul className={style.links}>
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/showcase">Showcase</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
        </ul>
    </>
    )
}