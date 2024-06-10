import Logo from "../Logo/Logo"
import PageMenu from "../PageMenu/PageMenu"
import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {

    return(
        <div className="Header-all"> 
            <div className="Header-Logo">
                <Link to={"/"}>
                    <Logo/>
                </Link>
            </div>
            <div className="Header-Menu">
                <PageMenu/>
            </div>
        </div>
    )
}