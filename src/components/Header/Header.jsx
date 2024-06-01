import { Link } from "react-router-dom";
import logo from '../../assets/LOGO.png'
import './Header.css';

function Header() {
    return (
        
        <nav className="nav">
            <img src={logo} alt="Logo Kasa" className="nav-logo" />
            <div className="nav-links">
                <Link to="/">Accueil</Link>
                <Link to='/about'>A propos</Link>
            </div>
        </nav>
    )
}

export default Header;