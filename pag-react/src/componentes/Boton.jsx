import React from 'react';
import '../estilo/Boton.css';

function Botones({texto, tipoBoton, manejarClick}){
  return(
    <button
      className={tipoBoton}
      onClick = {manejarClick}
      >
      {texto}
    </button>
  )
}
//Exportar para ser importado
export default Botones; //Exportacion por defecto


//function Botones({texto, esBotondeALGO, manejarClick}){
//className={esBotondeALGO ? 'BOTONDEESTO' : 'BOTONDEAQUELLO'} Operador terneareo
//
//
//