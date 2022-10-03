import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ImagenLogo from "../../img/jimmycooper.png";
import "./NavBar.css";
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
      <Navbar bg="ligth" expand="lg">
      <Container>
       <img src={ImagenLogo} className="logoImg mx-4" alt="Logo" />
        <Navbar.Brand href="#home">Jimmy Cooper</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Nuestro local</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Indumentaria</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Piercings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}
