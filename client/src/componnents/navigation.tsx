import logo from '../assets/image/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { navitems } from '../utils/data';
import '../scss/styles.scss';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" width="150" height="150" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navitems.map((item, index) => (
              <Nav.Link key={index} href={item.link}>
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
