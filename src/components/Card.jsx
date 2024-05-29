import './Card.css'
import { Link } from 'react-router-dom';


// Les props attendues sont :
// 1)l'image sous cette forme dans le composant : ' picture={card.cover} '
// 2)le titre sur de la carde sous cette forme :' title={card.title} '

function Card(props) {
    return(
        <Link to="/Card">
        <div className="card">
            <img src={props.picture} alt="" />
            <p>{props.title}</p>
        </div>
        </Link>
    )
}

export default Card;