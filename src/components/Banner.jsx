import imageSourceUne from '../assets/Image source 1.png'
import '../components/Banner.css'

function Banner() {
    return(
        <div className='banner-container'>
            <img src={imageSourceUne} alt='Banner' />
            <div className='banner-overlay'></div>
            <div className='banner-text'>Chez vous, partout et ailleurs</div>
        </div>
    )
}

export default Banner