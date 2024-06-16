/**
 * Banner
 * 
 * Affiche un banner avec une image et optionnellement un overlay et un text
 * 
 * @param {Object} props - Props du composant.
 * @param {string} props.picture - URL de l'image à afficher dans le banner.
 * @param {string} props.text - Texte à afficher dans le banner.
 * @param {string} [props.className] - Nom de la classe optionnelle pour personnaliser le style de l'overlay du banner.
 * @returns {JSX.Element} - Forme du banner.
 */

import './Banner.css'

function Banner(props) {
    return(  
        <section className='banner-container'>
            <img className="banner-img" src={props.picture} alt="" />
            <div className={props.className ? 'banner-overlay' : 'banner-overlayTwo'}></div>
            <div className='banner-text'>{props.text}</div>
        </section>
    )
}

export default Banner