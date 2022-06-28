import React from 'react'
import { UseFetch } from '../UseFetch'
import { useState } from 'react'


export const AudioBirds = () => {

  //Cargando API de los audios
  const [url2, setUrl2] = useState("https://xeno-canto.org/api/2/recordings?query=cnt:chile")
  const estado2 = UseFetch(url2) /*Devuelve el objeto que tiene UseFetch (cargando, data) */
  const {cargando2, data } = estado2 /*obtener los datos del objeto que entrego UseFetch */

  //console.log("Desde audio data2", data)
  //const res = []
  //res.push(data)
 // const res = !data ? data : data.filter((dato) => console.log(dato))

  //console.log("Desde audio estado2", estado2)
  return data

}

