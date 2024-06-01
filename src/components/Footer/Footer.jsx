import './Footer.css';
import logoBW from '../../assets/LOGO_B&W.png';

function Footer() {
    return(
        <div className='footer'>
            <img src={logoBW} alt="Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;