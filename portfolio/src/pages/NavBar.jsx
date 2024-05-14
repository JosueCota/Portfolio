import { Link } from "react-router-dom";
import style from "./navbar.module.css"
import {motion} from "framer-motion"

export default function NavBar() {

    
    return (
    <div className="w-full">
        <ul className={style.links}>
            <Link className={style.link} to="/">HOME</Link>
            <Link className={style.link} to="/showcase">SHOWCASE</Link>
        </ul>
    </div>
    )
}