import React, {useState} from 'react'
import {Cardsbird} from './Cardsbird'
import './Cards.css'
import Paginacion from '../Pagination/Pagination'



export const Cards = ({data}) => {
  const [actPag, setactPag] = useState(1)
  const [cardXpag] = useState(20)

  

  //
  const indUltimo = actPag * cardXpag;
  const indPrimero = indUltimo - cardXpag;
  const actCard = data.slice(indPrimero, indUltimo); 
  
  //Cambiar pagina
  const paginate = numPag => setactPag(numPag);

  return (
    <div className='container'>
      
        <ul className='cards'>
            {      actCard.map(p=>(
                  <li className='card-item' key={p.uid}>
                      <Cardsbird url={p._links.self}/>
                  </li>  
                ))
            }
            <div className='container2'><Paginacion cardXpag={cardXpag} totalCards={data.length} paginate={paginate}/></div>
        </ul>
    </div>
  )
}

export default Cards