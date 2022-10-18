import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ImagenLogo from "../../img/jimmycooper.png";
import "./NavBar.css";
import { CartWidget } from '../CartWidget/CartWidget';
import {Link, NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
      <Navbar bg="ligth" expand="lg">
      <Container>
       <img src={ImagenLogo} className="logoImg mx-4" alt="Logo" />
        <Navbar.Brand href="/" className='claseInactiva'>Jimmy Cooper</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >
              <NavLink to="/" className= {({isActive})=> isActive === true ? "claseActiva" : "claseInactiva"}>Inicio</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/contacto" className= {({isActive})=> isActive === true ? "claseActiva" : "claseInactiva"}>Contacto</NavLink>
            </Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/category/remeras">Remeras</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/pantalones">Pantalones</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/abrigos">Abrigos</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/accesorios">Accesorios</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}
