import React from 'react';
import '../estilo/Marca.css';
//npm start...
//alt 96 `` comillas invertidas
function Productos(props){
  return(
    <div className='Contenedor-Marca'>
      <img className='Imagen-Marca' src={require(`../img/${props.imagen}`)} alt={props.DescripcionImagen} />
    <div className='Descripcion-Marca'>
      <p className='Nombre-Marca'>{props.nombre}</p>
    </div>
    </div>
  )
}
//Exportar para ser importado
export default Productos; //Exportacion por defecto