import Header from "../Header/Header"
import Kruh from "../Kruh/Kruh"
import "./StartPageContent.css"

export default function StartPageContent() {
    
    return(
        <>
            <div className="StartPageContent-circle1"><Kruh></Kruh></div>
            <div className="StartPageContent-circle2"><Kruh></Kruh></div>
            <div className="StartPageContent-circle3"><Kruh></Kruh></div>
            <Header/>
        </>
    )
}