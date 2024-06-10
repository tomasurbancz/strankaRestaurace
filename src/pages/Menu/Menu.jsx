import StartPageContent from "../../components/StartPageContent/StartPageContent";
import Footer from "../../components/Footer/Footer";
import "./Menu.css"

export default function Menu() {

    return(
        <>
            <StartPageContent/>
            <div className="Menu-title">Naše speciality</div>
            <div className="Menu-subtitle">Ochutnejte naše české speciality</div>
            <div className="Menu-cards">
                <img src="./src/assets/karta1.png" alt="" className="Menu-card"/>
                <img src="./src/assets/karta2.png" alt="" className="Menu-card"/>
                <img src="./src/assets/karta3.png" alt="" className="Menu-card"/>
                <img src="./src/assets/karta4.png" alt="" className="Menu-card"/>
            </div>
            <Footer/>
        </>
    )
}