import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BootstrapNavbar() {
  return (
    <>
      <Navbar expand="md" fixed="top" className="shadow-sm navbar-maroon">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Romanat Clinic
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Padding so content isn't hidden behind fixed navbar */}
      <div style={{ paddingTop: '70px' }}></div>
    </>
  );
}
