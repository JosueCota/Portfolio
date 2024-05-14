import LeftImg from "../../assets/images/icons/arrows/leftArrow48.png"
import RightImg from "../../assets/images/icons/arrows/rightArrow48.png"
import style  from "./project.module.css"

//Changes project
export default function ChangeProjButton({dir, onClick}) {

    const img = (dir === "left") ? LeftImg: RightImg;   

    const imgs = {
        border: "none",
        backgroundColor: "transparent",
        borderRadius: "50%",
        backgroundImage: `url(${img})`,
        
    };

    return <button className={style.button} style={imgs} onClick={onClick}></button>
}