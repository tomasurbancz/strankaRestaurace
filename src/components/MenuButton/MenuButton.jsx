import { Link } from "react-router-dom"
import "./MenuButton.css"


export default function MenuButton() {

    return(
        <Link to={"/menu"}>
            <div className="MenuButton-button">
                <div className="MenuButton-text">
                    Menu
                </div>
            </div>
        </Link>
    )
} 