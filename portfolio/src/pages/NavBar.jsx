import { Link } from "react-router-dom";
import style from "./navbar.module.css"
import { useLocation } from "react-router-dom";

export default function NavBar() {
    const location = useLocation().pathname;

    console.log(location);
    
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