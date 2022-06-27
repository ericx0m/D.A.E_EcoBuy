import React from 'react'
import { useState } from 'react'
import { Cards } from '../cards/Cards'
import { UseFetch } from '../UseFetch'
import '../cards/Cards.css'




export const Searchcard = () => {
  //hooks
  const [url, setUrl] = useState("https://aves.ninjas.cl/api/birds")
  const estado = UseFetch(url) /*Devuelve el objeto que tiene UseFetch (cargando, data) */
  const { cargando, data } = estado /*obtener los datos del objeto que entrego UseFetch */
  const [search, setSearch] = useState("")

  //Funcion que nos ayuda a capturar los valores dados por el usuario
  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target)
  }
  //Filtramos los datos

  const res = !search ? data : data.filter((dato) => dato.name.spanish.toString().toLowerCase().includes(search.toLocaleLowerCase()))



    return (
      <div>
        <input value={search} onChange={searcher} type="text" placeholder='¡Busca un pajaro!' className='form-control'></input>

        {
          cargando
            ?
            <h1>Cargando...</h1>
            :
            <div>
              <Cards data={res} />
              {console.log(data)}
              {console.log(res)}
            </div>
        }

      </div>
    )
  }

  export default Searchcard