/**
 * Nav Composant
 * 
 * Composant de navigation pour l'application Kasa.
 * Affiche les liens de navigation vers les pages Accueil et A propos.
 * Utilisation de la bibliothèque react-router-dom pour la navigation.
 * 
 * @returns {JSX.Element} Forme du rendu du composant.
 */

import { Link, useLocation } from "react-router-dom";
import './Nav.css'

function Nav(){
    const location = useLocation();

    return(
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
    )
}

export default Nav; 