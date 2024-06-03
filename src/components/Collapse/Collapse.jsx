import './Collapse.css';
import { useState, useRef } from 'react';
import arrowUp from '../../assets/arrow_up.png';
import arrowDown from '../../assets/arrow_down.png';

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className='collapse-header'>
                <h2>{props.title}</h2>
                <button className='collapse-button' onClick={toggleCollapse}>
                    <img src={isOpen ? arrowDown : arrowUp} alt={isOpen ? 'Replier' : 'Déplier'} />
                </button>
            </div>
            <div
                ref={contentRef}
                className="collapse-content"
                style={{
                    height: isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
                }}
            >
                {props.content && <p>{props.content}</p>}
                {props.list && (
                    <ul>
                        {props.list.map((element, index) => (
                            <li key={index}>{element}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Collapse;
