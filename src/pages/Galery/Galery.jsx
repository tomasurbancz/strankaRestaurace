import StartPageContent from "../../components/StartPageContent/StartPageContent"
import Footer from "../../components/Footer/Footer"
import "./Galery.css"

export default function Galery() {

    return (
        <>
            <StartPageContent/>
            <div className="Gallery-title">Galerie</div>
            <div className="Gallery-subtitle">Podívejte se na naše prostory a akce</div>
            <div className="Gallery-photos">
                <div className="Gallery-photo">
                    <img src="./src/assets/cesnek.png" alt="Galerie obraz 1" className="Gallery-img"/>
                </div>
                <div className="Gallery-photo">
                    <img src="./src/assets/cesnek.png" alt="Galerie obraz 2" className="Gallery-img"/>
                </div>
                <div className="Gallery-photo">
                    <img src="./src/assets/cesnek.png" alt="Galerie obraz 3" className="Gallery-img"/>
                </div>
                <div className="Gallery-photo">
                    <img src="./src/assets/cesnek.png" alt="Galerie obraz 4" className="Gallery-img"/>
                </div>
                <div className="Gallery-photo">
                    <img src="./src/assets/cesnek.png" alt="Galerie obraz 5" className="Gallery-img"/>
                </div>
            </div>
            <Footer/>
        </>
    )
}