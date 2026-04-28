import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand="lg" fixed="top" variant="dark" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">
           Welcome to my Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">// HOME</Nav.Link>
            <Nav.Link as={Link} to="/about">// ABOUT</Nav.Link>
            <Nav.Link as = {Link} to="/projects">// PROJECTS</Nav.Link>
            <Nav.Link as={Link} to="/certificates">// CERTIFICATES</Nav.Link>
            <Nav.Link as={Link} to="/contact">// CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;