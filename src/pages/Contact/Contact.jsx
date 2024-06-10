import StartPageContent from "../../components/StartPageContent/StartPageContent"
import Footer from "../../components/Footer/Footer"
import "./Contact.css"

export default function Contact() {

    return(
        <>
            <StartPageContent/>
             <div className="Contact-title">Kontakty</div>
            <div className="Contact-subtitle">Kontaktujte nás</div>
            <div className="Contact-list">
                <div className="Contact-obj">
                    <div className="Contact-obj-title">Adresa</div>
                    <div className="Contact-obj-content">Václavské náměstí 1, 110 00 Praha 1</div>
                </div>
                <div className="Contact-obj">
                    <div className="Contact-obj-title">Telefon</div>
                    <div className="Contact-obj-content">+420 123 456 789</div>
                </div>
                <div className="Contact-obj">
                    <div className="Contact-obj-title">Email</div>
                    <div className="Contact-obj-content">info@example.com</div>
                </div>
            </div>
            <div className="Contact-form">
                <div className="Contact-form-title">Napište nám</div>
                <form>
                    <div className="Contact-form-label">Jméno:</div>
                    <input type="text" id="name" name="name"/>
                    
                    <div className="Contact-form-label">Email:</div>
                    <input type="email" id="email" name="email"/>
                    
                    <div className="Contact-form-label">Zpráva:</div>
                    <textarea id="message" name="message"></textarea>
                    
                    <button type="submit">Odeslat</button>
                </form>
            </div>
            <Footer/>
        </>
    )
}