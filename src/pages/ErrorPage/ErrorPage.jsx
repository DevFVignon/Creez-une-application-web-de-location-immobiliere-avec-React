import { useEffect } from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import error404 from "../../assets/404.png"
import { Link } from "react-router-dom"
import './ErrorPage.css'

function Error() {

    useEffect(() => {
        document.title = "Page inexistante";
    }, []);

    return (
        <div>
            <Header/>
            <div className="error-container">
                <img src={error404} alt="Erreur 404" />
                <h1>Oups! La page que vous demandez n'existe pas.</h1>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
            <Footer/>
        </div>
    )
}

export default Error