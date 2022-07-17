import React from "react";
import { useState } from "react";
import { v4  as uuidv4} from "uuid"; //Generador de ID's 
import '../styles/Formulario.css'
const FormularioTarea = (props)=>{  
    
    
    const [input, setInput] = useState("");
    

    const manejarCambio = (e) =>{
        setInput(e.target.value);
    }

    const manejarEnvio = (e)=>{
        e.preventDefault(); //para que no se reinicie o recargue la pagina
        const TareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(TareaNueva);
    }
    return(
        <form className='tarea-formulario' onSubmit={manejarEnvio}>
            <input
                className='tarea-input'
                type='text'
                placeholder='Ingrese tarea a realizar'
                name='texto'
                onChange={manejarCambio}
            />
            <button className="tarea-boton">
                Agregar tarear
            </button>

        </form>

    )
}

export default FormularioTarea;