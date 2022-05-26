import React from 'react'
import Carousel from '../carousel/Carousel'
import Footer from '../footer/Footer'

function Inicio() {
  return (
    <div>
        <Carousel />
        <div className='container mb-5'>
            <h1 className='text-white p-3 bg-dark'>Biblioteca de Aves Nacionales</h1>
            <figure>
                <blockquote>
                    <p className='text-center mt-3'>
                    De norte a sur, de mar a cordillera, 439 especies de aves se encuentran en Chile. 296 de éstas anidan en el país, mientras las otras son visitantes habituales u ocasionales del territorio.
                    Por otro lado, existen en Chile 11 especies de aves que no se encuentran en ninguna otra parte del planeta, de las cuales 6 son continentales y 5 insulares.
                    </p>
                </blockquote>
                <figcaption className='blockquote-footer'>GOCHILE.</figcaption>
            </figure>

            <h2 className='bg-dark text-white mb-5'>Aves de Chile</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0UohCUASt4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <Footer />
        
    </div>
  )
}

export default Inicio