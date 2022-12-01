import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/Authprovider/AuthProvider";
import { FaUser } from "react-icons/fa";
const Header = () => {
  
  const handleButton =()=>{
    
    

  }
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ width: "100vw" }}>
        <Container style={{ color: "white" }}>
          <Navbar.Brand>
            {" "}
            <Link to={"/"} style={{ color: "red", textDecoration: "none" }}>
              Coder Ninja
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to={"/course"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Course
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to={"/faq"}
                style={{ color: "white", textDecoration: "none" }}
              >
                FAQ
              </Link>{" "}
            </Nav.Link>


            {
              user? <Nav.Link> <Link
              onClick={handleLogOut}
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              logout
            </Link> </Nav.Link>:<>
            <Nav.Link>
              <Link
                to={"/register"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Register
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link
                to={"login"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Login
              </Link>{" "}
              
            </Nav.Link>
            
            
            
            </>




            }
            
            
          </Nav>
          <Nav>
            <Nav.Link>{user?.displayName}</Nav.Link>
            <Nav.Link style={{ height: "40" }}>
              {/* {user.photoURL} */}
              <FaUser></FaUser>
            </Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
