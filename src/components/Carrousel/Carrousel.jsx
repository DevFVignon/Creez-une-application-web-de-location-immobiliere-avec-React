/**
 * Composant Carrousel
 * 
 * Affiche un carousel d'images correspondant au logement sur lequel l'utilisateur  à cliqué.
 * Il permet la navigation entre les images.
 * 
 * @component
 * 
 * @example
 * return (
 *   <Carrousel />
 * )
 * 
 * @returns {JSX.Element} Forme du composant rendu.
 */

import './Carrousel.css'
import { useParams } from 'react-router-dom';
import logementList from '../../datas/logements.json'
import React from 'react';
import { useState } from 'react';

import arrowBack from '../../assets/arrow_back.png'
import arrowForward from '../../assets/arrow_forward.png'

function Carrousel(){
  //On utilise l'id des paramètres pour récupérer les url du logement correspondant 
  const {id} = useParams();
  const logement = logementList.find(card  => card.id === id);

  //On va garder la trace de l'index de l'image
  const [current, setCurrent] = useState(0);

  const length = logement.pictures.length;

  const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

  /** 
   *La fonction getClassName attribue la classe show à une image quand la position de cette dernière 
    *dans le tableau de la base de données est égale à l'index.
    *La classe show applique une opacité de 1, sans elle 0
  */
    const getClassName = (i) => (i === current ? 'show' : '');


  if (!logement){
      return <div>Logement non trouvé</div>
  }
  return (
    <div className='carrousel-container'>

      <div className='images-container'>
        {logement.pictures.map((logement, index) => {
          return <figure key={index} className={getClassName(index)}>
                    <img src={logement} alt="" ></img>
                    <figcaption>Logement : {logement.title}</figcaption>
                  </figure>
          })
        }
      </div>

      {length > 1 && (
        <>
          <nav>
            {/*button qui re-reder l'index*/}
            <button className='carrousel-arrowBack' onClick={prevSlide} aria-label="Image précédente">
              <img src={arrowBack} alt="Flèche vers la gauche"/>
            </button>

            {/*button qui re-reder l'index*/}
            <button className='carrousel-arrowForward' onClick={nextSlide} aria-label="Image suivante">
              <img src={arrowForward} alt="Flèche vers la droite"/>
            </button>
          </nav>
          <span className='carrousel-number'>
            {current + 1}/{length}
          </span>
        </>)
      }
    </div>
  );
}

export default Carrousel;