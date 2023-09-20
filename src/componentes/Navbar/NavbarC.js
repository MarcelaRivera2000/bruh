import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../img/logo.jpg"
import "./Navbar.css"

function Navbarr() {

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/"><img src={logo} alt="" className='logo'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/proyecto">Página Principal</Nav.Link>
            <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarr;