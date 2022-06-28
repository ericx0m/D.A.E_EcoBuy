import React from 'react'
import { UseFetch } from '../UseFetch'
import Modal from './Modal'
import Compa from '../comparador/Compa'
import { AudioBirds } from '../audios/AudioBirds'
import { useState } from 'react'


export const Cardsbird = ({url}) => {
    const estado = UseFetch(url)
    const {cargando, data} = estado
   // const [sinaud, setSinaud] = useState({})

   // const estado2 = UseFetch(url2)
   // const {cargando2, data2} = estado2
   //pajaros sin audio
   //const res = !data ? data : data.filter((dato) => console.log("Desde cardsbird",dato.name.spanish))
   
   const datos = AudioBirds()
   const alo = []
   const alo2 = []
   const alo3 = []
   var dat = {}
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
                
                {/* llenar alo de nombres en latin */}
               {data.audio.file ? alo.push([data.audio.file]) : alo.push([data.name.latin])}

                {console.log("Datos en arreglo alo de API uno (nombre en latin) ",alo)} 
               {/* {alo.map(a =>console.log("nombre ",a))} */}
                {console.log("Api dos", datos)} 
                {/*Llenar alo2 con los nombres cientifico o en latin(ahora esta en ingles (en)) */}
                {!datos ? !datos : alo2.push([datos.recordings.map(a=> a.en)])}
               {/* {!datos ? !datos : alo2.push([dat])} */}
               {/* { alo2.map(a=> console.log("alo dos", a)) }  */}
                {console.log("El arreglo alo2", alo2)}
                {<Modal id={`id${data.sort}`} titulo={data.name.spanish} imagen={data.images.main} 
                audio={alo} descripcion={data.iucn.description} habitat={data.habitat} tamaño={data.size} mapa={data.map.image} />}  

                


            </div>
        }
    </div>
    
  )
  //const datos = AudioBirds()
}


export default Cardsbird