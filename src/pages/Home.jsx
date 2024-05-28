import Header from '../components/Header'
import Banner from '../components/Banner_temp'

function Home() {
    return (
        <div>
            <Header/>
            <Banner text="Chez vous, partout et ailleurs"
            picture={require("../assets/Image_source_1.png")}/>
        </div>
    )
}

export default Home