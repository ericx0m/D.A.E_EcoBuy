import React, {useState} from 'react'
import Footer from '../footer/Footer'
import { UseFetch } from '../UseFetch'
import {Cards} from '../cards/Cards'

const Pajaros = () => {
  const [url, setUrl] = useState("https://aves.ninjas.cl/api/birds") 
  const estado = UseFetch(url) /*Devuelve el objeto que tiene UseFetch (cargando, data) */
  const {cargando, data} = estado /*obtener los datos del objeto que entrego UeFetch */



 /*cargando? console.log('Cargando'):console.log(data.map((dato) =>{
    return dato
  }))*/

  return (
    <div>          
        <h1> Esta es la pagina que deberia mostrar la lista de pajaros </h1>
        {
          cargando ?
          <h1>Cargando...</h1> :
          <Cards data={data} /> /* por si acaso data.map(p=>(p)) */
        }

        <Footer />
        
    </div>
  )
}

export default Pajaros