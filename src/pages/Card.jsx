import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import logementList from '../datas/logements.json';
import Footer from "../components/Footer";
import './Card.css';
import Collapse from '../components/Collapse';
import Rate from "../components/Rate";

function Card() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        const foundLogement = logementList.find(card => card.id === id);
        if (!foundLogement) {
            navigate("/404", { state: { message: "Can't get data" } });
        } else {
            setLogement(foundLogement);
        }
    }, [id, navigate]);

    if (!logement) {
        return <div>Loading...</div>;
    }

    const rate = Number(logement.rating);

    return (
        <div>
            <Header />
            <Carrousel />

            <div className="logementCard">
                <div className="titleTagsHostRate">
                    <div className="titleTags">
                        <div className="title">
                            <h1 className="title-h1">{logement.title}</h1>
                            <p className="title-p">{logement.location}</p>
                        </div>

                        <div className="tags">
                            {logement.tags.map((tag, index) => (
                                <div key={index}>{tag} </div>
                            ))}
                        </div>
                    </div>

                    <div className="hostRate">
                        <div className="host">
                            <h2 className="host-name">{logement.host.name}</h2>
                            <img src={logement.host.picture} alt="" />
                        </div>

                        <div className="rate">
                            <Rate rate={rate} />
                        </div>
                    </div>
                </div>

                <div className="details">
                    <Collapse title='Descriptions' content={logement.description} />
                    <Collapse title='Equipements' list={logement.equipments} />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Card;
