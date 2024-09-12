import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import logo from "../../Assets/nivologo1.svg";
import "../Navbar/navbar.css";

function NivoTimeNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo"
            width="200px"
            height="60px"
            className="d-inline-block align-top img-fluid"
            style={{ maxHeight: "40px" }} // Ensures the logo doesn't grow too large
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav left-align" />
        <Navbar.Collapse
          id="responsive-navbar-nav ml-auto"
          className="justify-content-end"
        >
          <Nav className="navbar-nav ml-auto left-align">
            <Nav.Link href="#features">HOME</Nav.Link>
            <NavDropdown title="OUR SERVIES" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="HOW IT WORKS" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ABOUT US" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <div className="nav-link">
              <button className="login-btn">Login</button>
            </div>
            <div className="nav-link">
              <button className="getintouch-btn">GET IN TOUCH</button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NivoTimeNavbar;
