import './Collapse.css'
import { useState } from 'react';

function Collapse(props){
    const [isOpen, setisOpen]=useState(false)
    return !isOpen ? (<div className="collaspe">
    <h2>{props.title}</h2> <button className='collapse-button' onClick={()=> setisOpen(true)}>Ouvrir</button> </div>) :
    
    (<div className="collaspe">
    <h2>{props.title}</h2> <button className='collapse-button' onClick={()=> setisOpen(false)}>Fermer</button><p>{props.content}</p> </div>)
}

export default Collapse;