import './Card.css'

const Card = (props) =>{


    return (
        <>
            <div className="card">
                <h1>{props.id}</h1>
                <h3>{props.nombre}</h3>
                <h3>{props.apellido}</h3>
                <h4>{props.dni}</h4>
            </div>

        
        </>

    )
}

export default Card