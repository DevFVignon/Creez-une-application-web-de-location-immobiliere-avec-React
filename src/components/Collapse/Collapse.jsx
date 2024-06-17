/**
 * Composant Collapse 
 *
 * La collapse peut afficher du texte ou une liste d'élément.
 *
 * @param {Object} props - Props du composant objet.
 * @param {string} props.title - Title visible de la collapse.
 * @param {string} [props.content] - Texte qui s'affiche quand la collapse est ouverte.
 * @param {string[]} [props.list] - Liste qui s'affiche quand la collapse est ouverte.
 * @returns {JSX.Element} Forme du rendu du composant.
 */

import './Collapse.css';
import { useState, useRef } from 'react';
import arrowUp from '../../assets/arrow_up.png';
import arrowDown from '../../assets/arrow_down.png';

function Collapse(props) {
    //savoir l'état ouvert ou fermé du collapse, de base fermé
    const [isOpen, setIsOpen] = useState(false);

    //nous permet de connaitre la taille après maj du collapse pour l'animation
    const contentRef = useRef(null);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="collapse">
            <div className='collapse-header'>
                <h2>{props.title}</h2>
                {/*bouton déclencheur du useState et qui changera le contentRef*/}
                <button className='collapse-button' onClick={toggleCollapse} 
                aria-expanded={isOpen} aria-controls="collapse-content" aria-label={isOpen ? 'Replier' : 'Déplier' }>
                    <img src={isOpen ? arrowDown : arrowUp} alt={isOpen ? 'Replier' : 'Déplier'} />
                </button>
            </div>
            <div
                id="collapse-content"
                ref={contentRef}
                className="collapse-content"
                style={{
                    //*calcul contentRef*//
                    height: isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
                }}>
                {props.content && <p>{props.content}</p>}
                {props.list && (
                    <ul>
                        {props.list.map((element, index) => (
                            <li key={index}>{element}</li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}

export default Collapse;
