import React from 'react'
import Carousel from '../carousel/Carousel'
import Footer from '../footer/Footer'
import Cuadros from '../ribbon/Cuadros'
import Ribbon from '../ribbon/Ribbon'
import Separador from '../ribbon/Separador'

function Inicio() {
  return (
    <div>
        <Carousel />
        <Ribbon />
        <Separador />
        <Cuadros />
        <div className='container mb-5'>
            <h2 className='bg-dark text-white mb-5'>Aves de Chile</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0UohCUASt4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <Footer />
        
    </div>
  )
}

export default Inicio