import React from 'react'
import { useState, useEffect } from 'react'

function Compa (datas) {
  const [sinaud, setSinaud] = useState({ cargando: true, dato: null })
  
  sinaud = !datas ? console.log("noa") : datas.filter((dato) => !dato.audio.file ? console.log(dato.name.spanish) : console.log("si existe", dato))

  return sinaud
}

export default Compa
