import './App.css';
import ListaTareas from './componentes/ListaTareas';



function App() {
  return (
    <div className="App-tareas">
      <div className='contenedor-lista-tareas'>
        <h1>Mis tareas</h1>
        <ListaTareas/>
      </div>      
    </div>
  );
}

export default App;
