import React from 'react';
import './estilo/Boton.css';
//npm start...
//alt 96 `` comillas invertidas
function Botones({texto, tipoBoton, manejarClick}){
  return(
    <div
      className={tipoBoton}
      onClick = {manejarClick}
      >
      {texto}
    </div>
  )
}
//Exportar para ser importado
export default Botones; //Exportacion por defecto