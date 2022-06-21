import React, {useState} from 'react'
import Footer from '../footer/Footer'
//import { UseFetch } from '../UseFetch'
//import {Cards} from '../cards/Cards'
import {Searchcard} from '../search/Searchcard'
//import {Searchcard} from '../search/Searchcard'

const Pajaros = () => {
  //const [url, setUrl] = useState("https://aves.ninjas.cl/api/birds") 
  //const estado = UseFetch(url) /*Devuelve el objeto que tiene UseFetch (cargando, data) */
  //const {cargando, data} = estado /*obtener los datos del objeto que entrego UeFetch */



 /*cargando? console.log('Cargando'):console.log(data.map((dato) =>{
    return dato
  }))*/

  return (
    <div>          
        <h1>Lista de pajarracos de chile</h1>
        <Searchcard>  </Searchcard>  
        <Footer />
        
    </div>
  )
}

export default Pajaros