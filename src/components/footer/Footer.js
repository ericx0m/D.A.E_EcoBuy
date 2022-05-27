import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <footer className='text-white py-4 bg-dark'>
            <div className='container'>
                <nav className='row'>
                    <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
                        <img src='./logo.png' className='mx-2' width='100' />
                    </Link>

                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bol mb-2'>Biblioteca de AVES</li>
                        <li className='text-center'>Aca podrás encontrar información referente a aves nacionales</li>
                    </ul>

                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bol mb-2'>ENLACES</li>
                        <li>
                            <Link to='/'>Pagína principal</Link>
                        </li>
                        <li>
                            <Link to='/pajaros'>Biblioteca de aves</Link>
                        </li>
                    </ul>

                </nav>
            </div>
        </footer>
    </div>
  )
}

export default Footer