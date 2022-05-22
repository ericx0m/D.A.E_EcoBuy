import './css/PaginaInicio.css'

import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import routes from "../ayudas/routes"

// Importams desde bootstrap algunos metodos, el classname de row es el margen mt5
//<Link to={routes.login} className='nav-Link'>Ingresa</Link> o 

export default function PaginaInicio() {
    return (
        <Container className="mt-5">
            <Row>
            <div className='contenedor-LogoPagInicio'>
                <img className='Logo-EB' src={require("./css/img/EcoBuyLogo.png")} alt="logo EB"/>
            </div>
                <Col xs= {{ span: 12}}>
                    <div className='hola'>
                        <h2 className='text-center'>Bienvenido a ECOBuy, tu cotizador de precios!</h2>
                        <p className='mt-4 text-center'>Desde acá podrás revizar la evaluación de precios que hay en el mercado.</p>
                        <p className='text-center'>
                            Revisa el precio de tus productos favoritos, guardalos, observa su evaluación
                            de precios, y cómpralos por medio desde sus proveedores directamente. 
                        </p>
                        <div className='text-center'>
                            <Button as={Link} to={routes.login}>INGRESAR</Button> o <Button as={Link} to={routes.registro}>CREAR UNA CUENTA</Button> 
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}