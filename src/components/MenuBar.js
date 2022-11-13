import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const MenuBar = () => {
  return (
    <div className="menubar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>E-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/shop" className="mx-3">
                Shop
              </NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/addproduct">Add Product</NavLink>
            </Nav>
            <Nav className="me-auto">
              <NavLink to="/login" className="mx-3">
                LogIn/Register
              </NavLink>
              <NavLink to="/checkout">Check Out</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
