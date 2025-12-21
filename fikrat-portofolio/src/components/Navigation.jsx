import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand="lg" fixed="top" variant="dark" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">
           FG_PORTFOLIO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">// HOME</Nav.Link>
            <Nav.Link as={Link} to="/about">// ABOUT</Nav.Link>
            <Nav.Link href="#section-3">// PROJECTS</Nav.Link>
            <Nav.Link href="#section-4">// CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;