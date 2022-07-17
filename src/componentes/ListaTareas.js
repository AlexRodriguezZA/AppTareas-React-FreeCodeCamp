import React, { useState } from "react";
import FormularioTarea from "./Formulario";
import Tarea from "./Tarea"
import '../styles/ListaTareas.css'


const ListaTareas = ()=>{

    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) =>{
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim()
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas)
            //guardamos en el localStorage
            localStorage.setItem(tarea.id,tarea.texto)
        }
        else alert("Cargue una tarea por favor")
    }
    const eliminarTarea = (id)=>{
        const tareasActualizadas = tareas.filter((tarea)=> tarea.id !== id);
        setTareas(tareasActualizadas)
        //Eliminamos del localStorage
        localStorage.removeItem(id)

    }

    const tareaCompletada = (id)=>{
        const tareasActualizadas = tareas.map( tarea =>{
            if (tarea.id === id){
                tarea.completada = !tarea.completada; //invertimos el estados

            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }
    return(
        <> 
        <FormularioTarea onSubmit={agregarTarea}/>
        <div className="tareas-lista-contenedor">
            {
                tareas.map((tarea) => 
                <Tarea 
                    key={tarea.id}
                    id={tarea.id}
                    texto={tarea.texto}
                    completada={tarea.completada}
                    Funcion_EliminarTarea = {eliminarTarea}
                    Funcion_completarTarea = {tareaCompletada}
                />
                )
            }
        </div>
        </>
    )
} 

export default ListaTareas;