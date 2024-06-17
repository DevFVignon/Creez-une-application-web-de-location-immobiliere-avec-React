/**
 * Rate Composant
 * 
 * Composant qui affiche une notation sous forme d'étoiles.
 * Il utilise des images d'étoiles pleines et vides pour représenter la note donnée.
 * 
 * @param {Object} props - Les propriétés passées au composant.
 * @param {number} props.rate - La note à afficher (doit être un nombre entier entre 1 et 5).
 * 
 * @returns {JSX.Element} Forme du rendu du composant.
 */

import React from 'react';
import fullStar from '../../assets/star-full.png'
import emptyStar from '../../assets/star-empty.png'
import './Rate.css'

function Rate (props){

	/*
	*On va parcourir le tableau stars, et tant que la note récupérée est supérieure ou égale aux valeurs dans le tableau, 
	une étoile pleine est créée, sinon c'est une étoile vide à chaque. Itération répétée autant de fois que la longueur du tableau.
	*/
    const stars = [1, 2, 3, 4, 5];
    const rate = props.rate;
    
    return(
        <ul className='rate'>
			{stars.map((star) =>
				rate >= star ? (
					<li>
						<img
							key={star}
							className="star"
							src={fullStar}
							alt="rating star"
						/>
					</li>
				) : ( 
					<li>
						<img
							key={star}
							className="star"
							src={emptyStar}
							alt="rating star"
						/>
					</li>
				)
			)}
        </ul>
    )
}

export default Rate;