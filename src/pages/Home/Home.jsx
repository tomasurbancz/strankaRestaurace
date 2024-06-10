import FoodDelicious from "../../components/FoodDelicious/FoodDelicious"
import MainPageimg from "../../components/MainPageImg/MainPageImg"
import MenuButton from "../../components/MenuButton/MenuButton"
import StartPageContent from "../../components/StartPageContent/StartPageContent"
import Footer from "../../components/Footer/Footer"
import "./Home.css"

export default function Home() {

    return(
        <>
            <StartPageContent/>
            <FoodDelicious></FoodDelicious>
            <div className="Home-mainText">
                <div className="Home-mainTextLeft">
                    <div className="Home-title">Poskytujeme <br></br> nejlepší jídlo pro vás</div>
                    <div className="Home-subtitle">Vítám vás v české restauraci .... . Připravujeme pro vás jídlo s láskou a s největší péčí, kterou naši kuchaři pro vás připravují</div>
                </div>
                <MainPageimg/>
            </div>
            <div className="Home-page2">
                <div>
                    <img src="./src/assets/jidlo1larger.png" alt="" className="Home-page2Img"/>
                </div>
                <div className="Home-page2Right">
                    <div className="Home-title">Vítejte v naší restauraci</div>
                    <div className="Home-subtitle">Naše restaurace je nejlepší na kterou můžete v České Republice narazit</div>
                    <div className="Home-button"><MenuButton></MenuButton></div>
                </div>
            </div>
            <Footer></Footer>
        </>
    ) 
}