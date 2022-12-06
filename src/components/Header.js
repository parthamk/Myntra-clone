import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './navitems/Logo'
import Menu from './navitems/Menu'
import SearchBar from './navitems/SearchBar'
import Cart from './navitems/Cart'

import "./Header.css"

function Header() {
  return (
    <div>
        <Navbar bg="light" variant="light" className='navbarcss'>
          <Container className='me-auto navwrap'>
            <Logo />
            <Nav className="me-auto">
              <Menu />
              <SearchBar />
              <Cart />
            </Nav>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header