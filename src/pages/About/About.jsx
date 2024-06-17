/**
 * About Component
 * 
 * Cette page représente la section "À propos" de l'application Kasa.
 * Elle comprend, grâce à l'import de composants, l'en-tête, une bannière, des collapses pour afficher des informations supplémentaires, et un pied de page.
 * 
 * @returns {JSX.Element} La structure JSX représentant la page "À propos".
 */

import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner_temp';
import aboutInfo from '../../datas/about.json'
import Collapse from '../../components/Collapse/Collapse';
import Footer from '../../components/Footer/Footer';
import './About.css'

function About() {

    useEffect(() => {
        document.title = "A propos";
    }, []);

    return (
        <div>
            <Header/>
            <main className="mainAboutPage">
                <Banner className={false} text="" picture={require("../../assets/Image_source_2.png")}/>
                <section className='collapseContainer'>
                    {/* On parcours les données du fichier about.json et créé un collapse à chaque objet du tableau du fichier */}
                    {aboutInfo.map((info, index)=>(
                        <Collapse key={`${info.title}-${index}`} title={info.title} content={info.content}
                        />
                    ))}
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default About;