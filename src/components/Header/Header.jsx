/**
 * Header composant
 * 
 * Il représente l'en-tête de l'application Kasa.
 * Il affiche le logo de Kasa et des liens de navigation vers les pages Accueil et A propos.
 * Utilisation de la bibliothèque react-router-dom pour la navigation.
 * 
 * @returns {JSX.Element} Forme du rendu du composant.
 */

import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/LOGO.png'
import './Header.css';

function Header() {
    const location = useLocation();
    return (
        <header className="header">
            <img src={logo} alt="Logo Kasa" className="header-logo" />
            <nav className="nav">
                <ul className="nav-links">
                    <li>
                        <Link to="/"  className={location.pathname === '/' ? 'active' : ''}>ACCUEIL</Link>
                    </li>
                    <li>
                        <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>A PROPOS</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;