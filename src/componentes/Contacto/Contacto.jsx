import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';

export const Contacto = () => {
  const [estadoConsulta, setEstadoConsulta] = useState("");

  const enviarConsulta = (event)=> {
    event.preventDefault();
    setEstadoConsulta("¡Gracias por su consulta!")
  }
    return (
      <Container className="m-5">
        <Form onSubmit={enviarConsulta} className="container w-50">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Escriba su mail" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Consulta</Form.Label>
            <Form.Control placeholder="Escriba su consulta" as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
        <div className='m-5'>
        <h2 className='h5'>{estadoConsulta}</h2>
        </div>
      </Container>
      );
}
