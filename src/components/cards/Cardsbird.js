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
   
   //const daat = JSON.parse(data)
   console.log("asdasdasd", data)
   //const res = !data ? data : data.filter((dato) => console.log(dato.name.spanish))
   var str = JSON.stringify(data) //pajaros sin audio
   

   //console.log("string",str)
   var sina = []
   for(var i in data){
    //if(){
        sina.push([data[i]])
    //}
   }
   console.log("aloalo",a)


   //const datos = AudioBirds()
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
                
               {/*console.log(data)*/}
               
                {
                    <Modal id={`id${data.sort}`} titulo={data.name.spanish} imagen={data.images.main} 
                audio={data.audio.file ? data.audio.file : console.log("Audio inexistente en ", data.name.spanish)} descripcion={data.iucn.description} habitat={data.habitat} tamaño={data.size} mapa={data.map.image} />}           
            </div>
        }
    </div>
  )
}


export default Cardsbird