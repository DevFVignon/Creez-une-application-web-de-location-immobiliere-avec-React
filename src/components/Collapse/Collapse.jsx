import './Collapse.css'
import { useState } from 'react';
import arrowUp from '../../assets/arrow_up.png'
import arrowDown from '../../assets/arrow_down.png'

function Collapse(props){
    const [isOpen, setisOpen]=useState(false)
    return !isOpen ? (<div className="collaspe">
                            <div className='collapse-header'>
                                <h2>{props.title}</h2> <button className='collapse-button' onClick={()=> setisOpen(true)}><img src={arrowUp} alt='Déplier'></img></button> 
                            </div> 
                    </div>) :
                    (<div className="collaspe">
                            <div className='collapse-header'><h2>{props.title}</h2> <button className='collapse-button' onClick={()=> setisOpen(false)}><img src={arrowDown} alt="Replier"></img></button></div>
                            
                            { props.content ? 
                            <p>{props.content}</p> : null
                            }
                            
                            {props.list ? 
                            <ul>
                                {props.list.map((element, index) => (
                                    <li key={index}>{element}</li>
                                ))}
                            </ul> : null}  
                    </div>)
}

export default Collapse;

