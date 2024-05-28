import './Banner.css'

function Banner(props) {
    return(  
        <div className='banner-container'>
            <img className="banner-img" src={props.picture} alt="" />
            <div className='banner-overlay'></div>
            <div className='banner-text'>{props.text}</div>
        </div>
    )
}

export default Banner