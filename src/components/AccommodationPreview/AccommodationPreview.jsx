/**
 * AccommodationPreview
 * 
 * Affiche un apperçu du logement avec une image et un titre.
 * 
 * @param {Object} props - Props du composant.
 * @param {string} props.picture - URL de l'image à afficher.
 * @param {string} props.title - Titre à afficher sur l'aperçu.
 * @returns {JSX.Element} - Forme du rendu du composant.
 */

import './AccommodationPreview.css';

function AccommodationPreview(props) {
    return(
        <figure className="card">
            <img src={props.picture} alt="" />
            <figcaption>{props.title}</figcaption>
        </figure>
    )
}

export default AccommodationPreview;