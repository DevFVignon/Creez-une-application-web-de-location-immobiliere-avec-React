import './AccommodationPreview.css';


// Les props attendues sont :
// 1)l'image sous cette forme dans le composant : ' picture={card.cover} '
// 2)le titre sur de la carde sous cette forme :' title={card.title} '

function AccommodationPreview(props) {
    return(
        <div className="card">
            <img src={props.picture} alt="" />
            <div>{props.title}</div>
        </div>
    )
}

export default AccommodationPreview;