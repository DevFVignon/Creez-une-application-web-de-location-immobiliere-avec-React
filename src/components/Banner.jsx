import './Banner.css'

function Banner(props) {
    const imgSrc= require(`${props.img}`);
    return(  
        <div className='banner-container'>
            <img src={imgSrc} alt='Banner' />
            <div className='banner-overlay'></div>
            <div className='banner-text'>{props.text}</div>
        </div>
    )
}

export default Banner