/**
 * Header composant
 * 
 * Il représente l'en-tête de l'application Kasa.
 * Il affiche le logo de Kasa et, grâce au composant Nav, des liens de navigation vers les pages Accueil et A propos.
 * Utilisation de la bibliothèque react-router-dom pour la navigation.
 * 
 * @returns {JSX.Element} Forme du rendu du composant.
 */

import logo from '../../assets/LOGO.png'
import './Header.css';
import Nav from '../Nav/Nav'

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo Kasa" className="header-logo" />
            <Nav/>
        </header>
    )
}

export default Header;