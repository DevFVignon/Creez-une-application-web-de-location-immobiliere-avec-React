import React from "react";
import Header from "../components/Header"
import Carrousel from "../components/Carrousel"
import { useParams } from 'react-router-dom';
import logementList from '../datas/logements.json'
import Footer from "../components/Footer"
import './Card.css'
import Collapse from '../components/Collapse'
import Rate from "../components/Rate";

function Card(){
    const {id} = useParams();
    const logement = logementList.find(card  => card.id === id);
    const rate = Number(logement.rating);

    if (!logement){
        return <div>Logement non trouvé</div>
    }
    return (
       <div>
        <Header/>
        <Carrousel/>

        <div className="logementCard">

            <div className="titleTagsHostRate">
                <div className="titleTags">
                    <div className="title">
                        <h1 className="title-h1">{logement.title}</h1>
                        <p className="title-p">{logement.location}</p>
                    </div>

                    <div className="tags">{logement.tags.map((tag, index) => (
                    <div key={index}>{tag} </div>
                    ))}
                </div>
                </div>

                <div className="hostRate">
                    <div className="host">
                        <h2 className="host-name">{logement.host.name}</h2>
                        <img src={logement.host.picture} alt=""/>
                    </div>

                    <div className="rate" >
                        <Rate rate={rate}/>
                    </div>
                    </div>
                
            </div>


            <div className="details">
                <Collapse title='Descriptions' content={logement.description}/>
                <Collapse title='Equipements' list={logement.equipments}/>
            </div>

        </div>


        <Footer/>
        </div>
    );
}

export default Card 