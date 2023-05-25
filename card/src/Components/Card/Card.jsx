import './Card.css'

const Card = (props) =>{


    return (
        <>
            <div className="card">
                <h1>{props.nombre}</h1>
                <h3>{props.apellido}</h3>
                <h4>{props.dni}</h4>
                <h4>{props.ciudad}</h4>
                <h5>{props.comentario}</h5>
            </div>

        
        </>

    )
}

export default Card