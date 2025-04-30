import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const userRole = localStorage.getItem("userRole");


  const handleLogout = () => {

   // localStorage.removeItem("userRole");
   // localStorage.removeItem("registeredUsername");


    navigate("/");
  };


  if (location.pathname === "/") {
    return null; 
  }
  if (location.pathname === "/register") {
    return null; 
  }


  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🛍️ ShopNow
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/history">
              History
            </Nav.Link>
            {userRole === "Seller" && (
              <Nav.Link as={Link} to="/add-product">
                Add Product
              </Nav.Link>
              
            )}
             {userRole === "Seller" && (
              <Nav.Link as={Link} to="/reports">
                Reports
              </Nav.Link>
              
            )}
              <Button variant="outline-danger" onClick={handleLogout}>
                Log Out
              </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
