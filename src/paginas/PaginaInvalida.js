import { Container, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import routes from "../ayudas/routes"

export default function PaginaInvalida() {
    return (
        <Container>
            <Row className="mt-5">
                <Col className="text-center">
                    <img
                        style={{ width: '100%' }}
                        src="/imagenes/404-not-found.svg"
                        alt="error-404"
                    />
                
                <h2>Pagina no encontrada</h2>
                <p>Vuelve al <Link to={routes.home}>inicio</Link> </p>
                </Col>
            </Row>
        </Container>
    )
}