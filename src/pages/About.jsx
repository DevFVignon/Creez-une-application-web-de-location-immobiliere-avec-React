import Header from '../components/Header'
import Banner from '../components/Banner_temp'
import Footer from '../components/Footer';

function About() {
    return (
        <div>
            <Header/>
            <Banner  
            text=""
            picture={require("../assets/Image_source_2.png")}/>
            <h1>A propos</h1>
            <Footer/>
        </div>
    )
}

export default About;