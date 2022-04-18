import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.png'
import auth from '../../../Firebase.int'
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

const handleLogOut = ()=>{
  signOut(auth)
}

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">
      <img src={logo} height={40} width={40} alt="" />
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/services'>Services</Nav.Link>
      <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
      <Nav.Link as={Link} to='/about'>About</Nav.Link>
    </Nav>
    <Nav>
      {

        user ?
        <button onClick={handleLogOut}>Log Out</button>

        :
        <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;