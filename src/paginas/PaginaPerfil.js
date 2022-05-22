import { Button } from "bootstrap"
import { Container, Row, Col, Card } from "react-bootstrap"

//La funcion Card agrega bordes de tarjeta
//En nombre tenemos que pasarle los parametros con los que el usuario esta registrado

export default function PaginaPerfil() {
    return (
        <Container>
            <Row className="mt-4">
                <Col xs={12} className="text-center">
                    <img
                        src="/imagenes/usuario.svg"
                        alt="profile"
                        style={{ width: '200px', 
                                height: '200px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                        }}   
                    />
                </Col>
                <Col className="mt-4">
                    <Card>
                        <p className="text-center"><b>NOMBRE: </b>{}</p>
                        <p className="text-center"><b>CORREO: </b>{}</p>

                        <button type="button" class="btn btn-warning">Editar Cuenta</button>
                        <button type="button" class="btn btn-link">Cambiar Contraseña</button>
                        <button type="button" class="btn btn-danger">Eliminar Cuenta</button>
                        
                    </Card>
                </Col>
                
            </Row>
        </Container>
    )
}