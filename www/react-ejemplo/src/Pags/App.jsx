import '../App.css';
import Marca from '../componentes/Marca.jsx';
//npm start (en la carpeta del proyecto react)
export function App(){
    
    return (
        <div className='App'>
          <div className='Contenedor-Principal'>
            <h1>Productos</h1>
            <Marca 
              nombre='Iphone'
              imagen='Logo-Apple.png'
              descripcionImagen='Logo de apple'
            /> 
            <Marca 
              nombre='PlayStation'
              imagen='Logo-PlayStation.png'
              descripcionImagen='Logo de PlayStation'
            /> 
            <Marca
              nombre=''
              imagen='Logo-Samsung.png'
              descripcionImagen='Logo de samsung'
            /> 
          </div>
          
        </div>
    );
}

//Exportar para ser importado
export default App; //Exportacion por defecto