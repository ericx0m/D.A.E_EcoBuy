import React from 'react'

const Paginacion = ({cardXpag, totalCards, paginate}) => {
    const pagNum = []

    for(let i = 1; i<= Math.ceil(totalCards / cardXpag); i++){
        pagNum.push(i);
    }

  return (
    <nav>
        <ul className='pagination'>
            {pagNum.map(num =>(
                <li key={num} className='page-item'>
                    <a onClick={()=> paginate(num)} className='page-link'>
                        {num}
                    </a>
                </li>
            ))}            
        </ul>
    </nav>
  )
}

export default Paginacion