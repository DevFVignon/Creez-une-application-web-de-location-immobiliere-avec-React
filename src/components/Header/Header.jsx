import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/LOGO.png'
import './Header.css';

function Header() {
    const location = useLocation();
    return (
        
        <nav className="nav">
            <img src={logo} alt="Logo Kasa" className="nav-logo" />
            <div className="nav-links">
                <Link to="/"  className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
                <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>A propos</Link>
            </div>
        </nav>
    )
}

export default Header;