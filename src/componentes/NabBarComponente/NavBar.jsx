import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ImagenLogo from "../../img/jimmycooper.png";
import "./NavBar.css";
import { CartWidget } from '../CartWidget/CartWidget';
import {Link, NavLink} from "react-router-dom";

export const NavBar = () => {
  const categoriesNavBar = [
    {url:"/", name:"Inicio"},
    {url:"/contacto", name:"Contacto"}
    ]
  const categoriesDropDown = [
    {url:"/category/productos", name:"Todos los productos"},
    {url:"/category/remeras", name:"Remeras"},
    {url:"/category/pantalones", name:"Pantalones"},
    {url:"/category/abrigos", name:"Abrigos"},
    {url:"/category/accesorios", name:"Accesorios"}
  ]
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="./">
        <img src={ImagenLogo} className="logoImg mx-4" alt="Logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {categoriesNavBar.map(category=>(<Nav.Link><NavLink to={category.url} className= {({isActive})=> isActive === true ? "claseActiva" : "claseInactiva"}>{category.name}</NavLink></Nav.Link>))}
            <NavDropdown title="Productos" id="basic-nav-dropdown">
            {categoriesDropDown.map(category=>(<NavDropdown.Item><Link className='claseDropDown' to={category.url}>{category.name}</Link></NavDropdown.Item>))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link to="/cart">
          <CartWidget/>
        </Link>
      </Container>
    </Navbar>
  );
}

