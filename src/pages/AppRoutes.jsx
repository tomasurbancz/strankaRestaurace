import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Menu from "./Menu/Menu"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Galery from "./Galery/Galery"

export default function AppRoutes() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/galery" element={<Galery/>}/>
            </Routes>
        </BrowserRouter>
    )
}