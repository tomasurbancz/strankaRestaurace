import Logo from "../Logo/Logo"
import "./Footer.css"

export default function Footer() {

    return(
        <>
            <div className="Footer-logo"><Logo/></div>
            <div className="Footer-texts">
                <div className="Footer-text">
                    Pokud budete mít nějaké dotazy, kontaktujte nás prosím na email nebo dokonce zavolejte na naše telefonní číslo 765 512 156
                </div>
                <div className="Footer-text Footer-bold">
                    Otevírací hodiny
                </div>
                <div className="Footer-Hours">
                    <div className="Footer-text">
                        Pondělí - Pátek <br/> 8:00 - 21:00
                    </div>
                    <div className="Footer-text">
                        Sobota <br/> 9:00 - 19:00
                    </div>
                    <div className="Footer-text">
                        Neděle <br/> Pouze rezervace na objednávku
                    </div>
                </div>
            </div>
        </>
    )
}