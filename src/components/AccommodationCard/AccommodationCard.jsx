import React from 'react';
import Collapse from '../Collapse/Collapse';
import Rate from "../Rate/Rate";
import './AccommodationCard.css';

const AccommodationCard = ({ logement }) => {
    const rate = Number(logement.rating);

    return (
        <div className="logementCard">
            <div className="titleTagsHostRate">
                <div className="titleTags">
                    <div className="title">
                        <h1 className="title-h1">{logement.title}</h1>
                        <p className="title-p">{logement.location}</p>
                    </div>
                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <div key={index}>{tag} 
                            </div>
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
    );
};

export default AccommodationCard;
