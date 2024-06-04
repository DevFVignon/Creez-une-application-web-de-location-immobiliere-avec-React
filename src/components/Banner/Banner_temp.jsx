import './Banner.css'

// Les props attendues sont :
// 1)l'image sous cette forme dans le composant : ' picture={require("../chemin_de_l_image/image.extension")} '
// 2)le text sur l'image sous cette forme :' text="texte à insérer" '
function Banner(props) {
    return(  
        <div className='banner-container'>
            <img className="banner-img" src={props.picture} alt="" />
            <div className={props.className ? 'banner-overlay' : 'banner-overlayTwo'}></div>
            <div className='banner-text'>{props.text}</div>
        </div>
    )
}

export default Banner