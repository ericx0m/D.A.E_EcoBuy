import React from 'react'
import { UseFetch } from '../UseFetch'
import Modal from './Modal'


export const Cardsbird = ({url}) => {
    const estado = UseFetch(url)
    const {cargando, data} = estado 



  return (
    <div>
        {
            cargando
            ?
            <h1>Cargando...</h1> :
            <div className='card' style={{width:'14rem'}} data-bs-toggle="modal" data-bs-target={`#id${data.sort}`}>
                <div className='card-header'>
                    <h5 className='card-title'>{data.name.spanish}</h5>
                </div>
                <div className='card-body'>
                    <img src={data.images.main} alt={data.uid} />
                </div>
                <Modal id={`id${data.sort}`} titulo={data.name.spanish} imagen={data.images.main} audio={data.audio.file} descripcion={data.iucn.description} habitat={data.habitat} tamaño={data.size} mapa={data.map.image} />           
            </div>
        }
    </div>
  )
}

export default Cardsbird