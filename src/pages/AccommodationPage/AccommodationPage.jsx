import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Carrousel from "../../components/Carrousel/Carrousel";
import logementList from '../../datas/logements.json';
import Footer from "../../components/Footer/Footer";
import AccommodationCard from '../../components/AccommodationCard/AccommodationCard';
import './AccommodationPage.css';

function AccommodationPage() {

    //On cherche le logement dans la base de données. S'il n'est pas trouvé, on redirige l'utilisateur vers la page erreur
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
        }, [id, navigate]
    );

    if (!logement) {
        return <div>Loading...</div>;
    }

    //Si le logement est trouvé, on assemble les composants pour construire la page fiche logement (AccommodationPage)
    return (
        <div>
            <Header />
            <Carrousel />
            <AccommodationCard logement={logement} />
            <Footer />
        </div>
    );
}

export default AccommodationPage;
