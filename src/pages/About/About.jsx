import StartPageContent from "../../components/StartPageContent/StartPageContent";
import Footer from "../../components/Footer/Footer";
import "./About.css"

export default function About() {

    return(
        <>
            <StartPageContent/>
            <div className="About-page">
                <div className="About-title">
                    Náš šéfkuchař
                </div>
                <div className="About-screen">
                    <div className="About-marks">
                        <div className="About-markgroup">
                            <div className="About-mark">
                                <img src="./src/assets/mark.png" alt="" />
                                <div>Vedení a organizace</div>
                            </div>
                            <div className="About-mark">
                                <img src="./src/assets/mark.png" alt="" />
                                <div>Kreativita a inovace</div>
                            </div>
                            <div className="About-mark">
                                <img src="./src/assets/mark.png" alt="" />
                                <div>Kvalita a preciznost</div>
                            </div>
                        </div>
                        <div className="About-markgroup">
                            <div className="About-mark">
                                <img src="./src/assets/mark.png" alt="" />
                                <div>Komunikace a spolupráce</div>
                            </div>
                            <div className="About-mark">
                                <img src="./src/assets/mark.png" alt="" />
                                <div>Profesionalita</div>
                            </div>
                            <div className="About-mark">
                                <img src="./src/assets/mark.png" alt="" />
                                <div>Stabilita a flexibilita</div>
                            </div>
                        </div>
                    </div>
                    <img src="./src/assets/chef.png" alt="" className="About-chef"/>
                </div>
            </div>
            <Footer/>
        </>
    )
}