import Header from '../components/Header'
import Banner from '../components/Banner_temp'
import Card from '../components/Card'
import './Home.css'
import logementList from '../datas/logements.json'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Header/>

            <Banner 
            text="Chez vous, partout et ailleurs"
            picture={require("../assets/Image_source_1.png")}
            />
            <div className="card-container">
            {logementList.map((card, index) =>(<Link to={`/logement/${index}`}  key={`${card}-${index}`}><Card picture={card.cover} title={card.title}/></Link>) )}
            </div>

            <Footer/>

        </div>
    )
}

export default Home