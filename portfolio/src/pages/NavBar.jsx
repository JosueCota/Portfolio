import { Link } from "react-router-dom";
import style from "./navbar.module.css"
import { useLocation } from "react-router-dom";
import {motion} from "framer-motion"


export default function NavBar() {
    const location = useLocation().pathname;

    console.log(location);
    
    return (
    <motion.div 
        
    >
        <ul className={style.links}>
            <Link className={style.link} to="/">HOME</Link>
            <Link className={style.link} to="/showcase">SHOWCASE</Link>
        </ul>
    </motion.div>
    )
}