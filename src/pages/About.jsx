import Header from '../components/Header';
import Banner from '../components/Banner_temp';
import aboutInfo from '../datas/about.json'
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';

function About() {
    return (
        <div>
            <Header/>
            <Banner  
            text=""
            picture={require("../assets/Image_source_2.png")}/>
            {aboutInfo.map((info, index)=>(<Collapse key={`${info.title}-${index}`} title={info.title} content={info.content}/>))}
            <Footer/>
        </div>
    )
}

export default About;