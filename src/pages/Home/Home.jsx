/**
 * Home composant
 * 
 * Cette page représente la page d'accueil de l'application Kasa.
 * Elle affiche, par l'utilisation de composants, l'en-tête, une bannière, une liste de prévisualisations de logements, et un pied de page.
 * Chaque prévisualisation de logement est un lien qui dirige vers la page de détail du logement correspondant.
 * 
 * @returns {JSX.Element} Forme du rendu du composant.
 */

import { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner_temp'
import AccommodationPreview from '../../components/AccommodationPreview/AccommodationPreview'
import './Home.css'

import logementList from '../../datas/logements.json'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

function Home() {

    useEffect(() => {
        document.title = "Kasa";
    }, []);

    return (
        <div>
            <Header/>
            <main>
                <Banner className={true}
                    text="Chez vous, partout et ailleurs"
                    picture={require("../../assets/Image_source_1.webp")}
                />
                {/* On parcours la base de données des logements et créé un composant AccommodationPreviw à chaque logement,
                techniquement à chaque objet du tableau de la base de données */}
                <section className="card-container">
                    {logementList.map((card) =>(
                        <Link to={`/logement/${card.id}`} key={card.id}>
                            <AccommodationPreview picture={card.cover} title={card.title}/>
                        </Link>
                    ))}
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Home