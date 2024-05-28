import Header from '../components/Header'
import Banner from '../components/Banner_temp'
import Card from '../components/Card'
import './Home.css'
import logementList from '../datas/logements.json'
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
            {logementList.map((card) =>(<Card key={`${card.id}`} picture={card.cover} title={card.title}/>) )}
            </div>

            <Footer/>

        </div>
    )
}

export default Home