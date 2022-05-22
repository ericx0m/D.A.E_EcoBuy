import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

/* El atributo collapse On Select cumple la funcion de medida, ya sea sm, md, lg.
variante hace referencia al estilo o caracteristicas de un componente.
Por medio de .collapse definimos los diferentes elementos del menu*/

/* El classname=me auto en el nav hace que los link se acomoden, en este caso dejando users a la izq, y el resto a la derecha */

/* Importamos react router dom para unirlo a las distintas rutas ya creadas y agregandole to a los Nav.Link le especificamos la ruta */

export default function Navegador() {
    return (
        <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark'>
            <Navbar.Brand as={NavLink} to='/'>
                ECO buy
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link as={NavLink} to='/Favoritos'>Catalogo</Nav.Link>
                    <NavDropdown title='Administrador'>
                        <NavDropdown.Item as={NavLink} to='/admin/users'>Usuarios</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to='/Login'>Iniciar sesión</Nav.Link>
                    <Nav.Link as={NavLink} to='/Registro'>Registrarse</Nav.Link>
                    <Nav.Link as={NavLink} to='/Perfil'>Perfil</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}