import { useState } from "react";
import Card from "../Card/Card";
import './MyForms.css';

const MyForm = () => {
    const [id,setId] = useState('');
    const [nombre,setNombre] = useState ('');
    const [apellido,setApellido] = useState ('');
    const [dni,setDni] = useState('');

    const [personas, setPersonas] = useState ([]);
    
     const handleSubmit = (e) =>{
        e.preventDefault();

        setPersonas([...personas,{id,nombre,apellido,dni}]);
        setId('');
        setNombre('');
        setApellido('');
        setDni('');
        console.log(personas);
    } 

    return(
        <>
         <div className="content">
            <div className="glass">
            <form onSubmit={handleSubmit}>
                <div>

                <div>
                <label>Id:  
                    <input type="text" pattern="[0-9]*" value={id} onChange={(e)=>{setId(e.target.value)}} placeholder="Id"/>
                </label>
                </div>


                <label>Nombre:  
                    <input type="text" pattern="[A-Za-z]*" value={nombre} onChange={(e)=>{setNombre(e.target.value)}} placeholder="Nombre"/>
                </label>
                </div>

                <div>
                <label>Apellido: 
                    <input type="text" pattern="[A-Za-z]*" value={apellido} onChange={(e)=>{setApellido(e.target.value)}} placeholder="Apellido"/>
                </label>
                </div>
                
                <div>
                <label>DNI: 
                    <input type="text" pattern="[0-9]*" value={dni} onChange={(e)=>{setDni(e.target.value)}} placeholder="DNI"/>
                </label>
                </div>

                <div className="buttonEnviar">
                <button type="submit">Enviar</button>
                </div>
                
            </form> 
            </div> 
            <div>
                {personas.map((persona)=> <Card key={persona.nombre} id={persona.id} nombre={persona.nombre} apellido={persona.apellido} dni={persona.dni}/>)}
            </div>
        </div>

        
        </>
    )
}

export default MyForm