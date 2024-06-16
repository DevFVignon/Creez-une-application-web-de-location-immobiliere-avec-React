/**
 * AccommodationCard composant
 * Represente un fiche détaillé de l'hébergement.
 * Affiche des détails incluant titre, lieux, tags, informations sur l'hôte,
 * notes, descriptions, et liste d'équipements.
 * 
 * @component
 * @param {Object} props - Props du composant.
 * @param {Object} props.logement - Objet sur l'hébergement contenant des details comme le title, la localisation,
 *                                  les tags, l'host, le rating, les descriptions, et la liste d'équipements.
 * @returns {JSX.Element} - Forme du rendu du compoant.
 */

import React from 'react';
import Collapse from '../Collapse/Collapse';
import Rate from "../Rate/Rate";
import './AccommodationCard.css';

const AccommodationCard = ({ logement }) => {
    // On extrait le nombre d'étoiles attribué au logement qui servira au composant Rating
    const rate = Number(logement.rating);

    return (
        <article className="logementCard">
            <section className="titleTagsHostRate">
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
            </section>
            <section className="details">
                <Collapse title='Descriptions' content={logement.description} />
                <Collapse title='Equipements' list={logement.equipments} />
            </section>
        </article>
    );
};

export default AccommodationCard;
