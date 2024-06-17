/**
 * Footer composant
 * 
 * Il représente le pied de page de l'application Kasa.
 * Il affiche le logo en noir et blanc de Kasa et un message de droits réservés.
 * 
 * @returns {JSX.Element} Forme du rendu du composant.
 */

import './Footer.css';
import logoBW from '../../assets/LOGO_B&W.png';

function Footer() {
    return(
        <footer className='footer'>
            <img src={logoBW} alt="Logo de Kasa en noir et blanc" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;