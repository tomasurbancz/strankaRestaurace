import { Link } from "react-router-dom"
import "./PageMenu.css"


export default function PageMenu() {

    return(
        <>
            <div className="PageMenu-objects">¨
                <Link to={"/menu"}>
                    <div className="PageMenu-obj">Menu</div>
                </Link>
                <Link to={"/galery"}>
                    <div className="PageMenu-obj">Galerie</div>
                </Link>
                <Link to={"/about"}>
                    <div className="PageMenu-obj">O nás</div>
                </Link>
                <Link to={"/contact"}>
                    <div className="PageMenu-obj">Kontakt</div>
                </Link>
            </div> 
        </>
    )
}