import './Collapse.css'

function Collapse(props){
    return(
        <div className="collaspe">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}

export default Collapse;