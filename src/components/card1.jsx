import './styles/card.css'

function Card1({ title, description, buttonText }) {
    return ( 
        <div className="card1">
            <h1>{title}</h1>
            <p><h3>{description}</h3></p>
            <button>{buttonText}</button>
        </div>
    )
}

export default Card1;