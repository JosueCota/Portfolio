import LeftImg from "../imgs/icons/arrows/leftArrow48.png"
import RightImg from "../imgs/icons/arrows/rightArrow48.png"

export default function ChangeProjButton({dir, onClick}) {

    let img = (dir === "left") ? LeftImg: RightImg;   
    
    const style = {
        border: "none",
        backgroundColor: "transparent",
        borderRadius: "50%",
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        width: "40px",
        backgroundPosition: "center",
        height: "40px",
        margin: "0 30px",
        padding: "0px"
    };

    return <button style={style} onClick={onClick}></button>
}