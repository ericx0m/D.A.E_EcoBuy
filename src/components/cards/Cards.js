import React, {useState} from 'react'
import {Cardsbird} from './Cardsbird'
import './Cards.css'


export const Cards = ({data}) => {

    
  return (
    <div className='container'>
        <ul className='cards'>
            {
                data.map(p=>(

                  <li className='card-item' key={p.uid}>
                      <Cardsbird url={p._links.self}/>
                      
                      {console.log(p)}
                  </li>  
                ))
            }
        </ul>

    </div>
  )
}

export default Cards