import React from 'react'
import { UseFetch } from '../UseFetch'


export const Cardsbird = ({url}) => {
    const estado = UseFetch(url)
    const {cargando, data} = estado 



  return (
    <div>
        {
            cargando?
            <h1>Cargando...</h1> :
            <div className='cards' style={{width:'12rem'}}>
                <div className='card-header'>
                    <h5 className='card-title'>{data.name.spanish}</h5>
                </div>
                <div className='card-body'>
                    <img src={data.images.main} alt={data.uid} />
                </div>
            </div>
        }
    </div>
  )
}

export default Cardsbird