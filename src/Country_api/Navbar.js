import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({customStyle}) {
  const linkStyle = {
    textDecoration: "none",
    margin: 10,
    color:"white"
  
  };
  

  return (
    <Navbar bg="primary" data-bs-theme="dark" className="Navbar" style={customStyle}>
    <Container>
      <Navbar.Brand><Link to={"/Country"} style={linkStyle}>Navbar</Link></Navbar.Brand>
      <Nav className="me-auto">
        <Link to={"/Country"} style={linkStyle}>Home</Link>
        <Link to={"/currencyconverter"} style={linkStyle}>CurrencyConverter</Link>
        <Link to={"/logout"} style={linkStyle}>Logout</Link>
      </Nav>
    </Container>
  </Navbar>

  );
}

export default NavBar;



