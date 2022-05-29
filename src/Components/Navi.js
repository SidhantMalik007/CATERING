import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Navi({cartItems,option}) {
    
  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand href="#home">CATERING</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-self-end">
              <Nav.Link onClick={() => option("home")}>Home</Nav.Link>
              <Nav.Link onClick={() => option("menu")}>Menu</Nav.Link>
              <Nav.Link onClick={() => option("checkout")}>Checkout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Text>CART ITEMS:{cartItems}</Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}
