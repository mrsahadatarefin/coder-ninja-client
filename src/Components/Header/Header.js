import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark"  style={{ width: '100vw' }}>
        <Container style={{color:'white'}} >
          <Navbar.Brand > <Link to={'/'}>Coder Ninja</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link > <Link to={'/'}>Home</Link></Nav.Link>
            <Nav.Link ><Link to={'/course'}>Course</Link></Nav.Link>
            <Nav.Link ><Link to={'/faq'}>FAQ</Link> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
       
     
            
        </div>
    );
};

export default Header;