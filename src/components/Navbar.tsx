import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import romanatLogo from '../assets/romanat-logo.png';

export default function BootstrapNavbar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  return (
    <>
      <Navbar
        expand="md"
        fixed="top"
        className="shadow-sm navbar-maroon"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} className="d-flex align-items-center">
  <img
    src={romanatLogo}
    alt="Romanat Clinic Logo"
    style={{ width: '40px', height: '40px', marginRight: '10px' }}
  />
  Romanat Clinic
</Navbar.Brand>


          {/* Custom-looking Toggle Button */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="menu-toggle-btn d-md-none"
            as="button"
          >
            Menu
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => setExpanded(false)}
                active={location.pathname === '/'}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
                active={location.pathname === '/about'}
              >
                Staff
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/services"
                onClick={() => setExpanded(false)}
                active={location.pathname === '/services'}
              >
                Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/insurances"
                onClick={() => setExpanded(false)}
                active={location.pathname === '/insurances'}
              >
                Health Insurances
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => setExpanded(false)}
                active={location.pathname === '/contact'}
              >
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
