import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner_temp'
import AccommodationPreview from '../../components/AccommodationPreview/AccommodationPreview'
import './Home.css'

import logementList from '../../datas/logements.json'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'


function Home() {
    return (
        <div>
            <Header/>

            <Banner className={true}
            text="Chez vous, partout et ailleurs"
            picture={require("../../assets/Image_source_1.png")}
            />
            <div className="card-container">
            {logementList.map((card) =>(<Link to={`/logement/${card.id}`}  
            key={card.id}><AccommodationPreview picture={card.cover} title={card.title}/></Link>) )}
            </div>

            <Footer/>

        </div>
    )
}

export default Home