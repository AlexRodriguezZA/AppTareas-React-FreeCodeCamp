import React from "react";
import '../styles/Tarea.css'
// usamos react icons
import {AiOutlineCloseCircle } from "react-icons/ai";

const Tarea = ({ id, texto, completada, Funcion_completarTarea, Funcion_EliminarTarea })=>{
  return(
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'} >
      <div className="tarea-texto"
      onClick={ () => Funcion_completarTarea(id) }>
        {texto}
      </div>
      <div
      className="tarea-contenedor-icono"
      onClick={ () => Funcion_EliminarTarea(id) }>
        <AiOutlineCloseCircle className="tarea-icono"/>
      </div>

    </div>
  )
} 

export default Tarea;