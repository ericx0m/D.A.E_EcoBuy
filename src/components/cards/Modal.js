import React from 'react'
import "./Cards.css"

const Modal = ({ id, imagen, audio, descripcion, titulo, habitat, tamaño ,mapa }) => {
  return (
    <div>
      <div className="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{titulo}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className='pt-5 imagen-pajaro'> 
              <img src={imagen} width="300" /> 
            </div>

            <div className='audio'> 
              <audio controls>
                <source src={audio} type="audio/wav"/>
              </audio>
            </div>

            <div className='margen-info'>Descripción: <br></br>
                {descripcion}
                <br></br><br></br>
                {habitat}
                <br></br><br></br>
                Tamaño = {tamaño}
            </div>
            <div className='modal-body'>
              <img src={mapa} width="250"/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal