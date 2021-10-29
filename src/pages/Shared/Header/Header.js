import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <>
  <Navbar sticky="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand  as={Link} to="/home"><i className="fas fa-plane-departure text-warning"></i> <span className="text-warning">Trip_in</span></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About Us</Nav.Link>
      <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
        </div>
    );
};

export default Header;


