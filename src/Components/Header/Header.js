import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ width: "100vw" }}>
        <Container style={{ color: "white" }}>
          <Navbar.Brand>
            {" "}
            <Link to={"/"} style={{color:'red',textDecoration:'none'}}>Coder Ninja</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link to={"/"} style={{color:'white',textDecoration:'none'}}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/course"} style={{color:'white',textDecoration:'none'}}>Course</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/faq"} style={{color:'white',textDecoration:'none'}}>FAQ</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to={"/register"} style={{color:'white',textDecoration:'none'}}>Register</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to={"login"} style={{color:'white',textDecoration:'none'}}>Login</Link>{" "}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
