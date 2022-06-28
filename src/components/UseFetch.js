import { useState, useEffect } from 'react'


//este componente nos ayudara a hacer la conexion a la API y a guardar la informacion
//que se obtendra por ello le damos como parametro de entrada la url a la cual nos conectaremos
export const UseFetch = (url) => {
  const [resultado, setResultado] = useState({ cargando: true, dato: null })
  /*useState (hook) es para almacenar un estado a travez de una variable
    el primer elemento es el estado actual (resultado) y el segundo una funcion 
    para modificar dicho estado (setResultado)
    la variable sera un objeto {} que contiene 2 atributos cargando sera 
    iniciado en true y data en null
  */

 /*useEffect es para permitir que ejecutemos tareas secundarias dentro de
   los componentes funcionales
 */
/*Aqui usamos useEffecta para que realize la funcion 
  que le pasaremos getData() justo cuando se llame al 
  componete (UseFetch)
*/
  useEffect( ()=>{
    getData(url)
  },[url], 6000)


  /*Esta funcion recibira la url para poder usar fetch para realizar 
  la conexion con la API  */
  async function getData(url) {
    try{
      setResultado({cargando: true, data:null})
      const respues = await fetch(url) /*realiza peticion get a 
      la url esta funcion se detiene hasta que se completa la solicitud gracias a async/await*/
      if(respues.ok){
      const data = await respues.json() /*El objeto respues devuelto por el await fetch de 
      arriba devuelve una promesa, con un metodo llamdo json() podemos extraer un objeto de 
      tipo JSON de la respuesta*/
      
      setResultado({ cargando: false, data })
      //console.log("Desde usefetch",data)//ver los datos
      
      
      }else{
        console.log(respues.status, respues.statusText)
      }
      
    }
    catch(e){
      console.log("Error desde usefetch",e)
    }
  }





  return resultado
}

