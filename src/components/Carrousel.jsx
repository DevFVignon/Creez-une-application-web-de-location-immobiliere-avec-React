import './Carrousel.css'
import { useParams } from 'react-router-dom';
import logementList from '../datas/logements.json'
import React from 'react';
import { useState } from 'react';

import arrowBack from '../assets/arrow_back.png'
import arrowForward from '../assets/arrow_forward.png'

function Carrousel(){
    const {id} = useParams();
    const logement = logementList.find(card  => card.id === id);

    const [current, setCurrent] = useState(0);
    const length = logement.pictures.length;
    console.log(length);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };


    if (!logement){
        return <div>Logement non trouvé</div>
    }
    return (

        
        <div className='carrousel-container'>

            {length>1 ? 
            <button className='carrousel-arrowBack' onClick={prevSlide}><img src={arrowBack} alt=""/></button> : null }

            {logement.pictures.map((index) => {
        return logement.pictures[current] === index 
            ? <img className='carrousel-image' key={index} src={logement.pictures[current]} alt="" /> 
            : null;
    })}

            {length>1 ?
            <button className='carrousel-arrowForward' onClick={nextSlide}><img src={arrowForward} alt=""/></button> : null}

            {length>1 ?
            <span className='carrousel-number'>{current + 1}/{length}</span> : null }

        </div>
    );
}

export default Carrousel;