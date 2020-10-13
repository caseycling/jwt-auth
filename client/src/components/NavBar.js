import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg='dark' variant='dark' className='navBar'>
      <Navbar.Brand style={{ gridColumnStart: '2' }}>C C</Navbar.Brand>
      <Nav style={{ gridColumnStart: '6' }}>
        <Link
          className='link'
          activeClass='active'
          to=''
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          href='#home'
        >
          Home
        </Link>
        <Link
          className='link'
          activeClass='active'
          to='post'
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          href='#features'
        >
          Post
        </Link>
        <Link
          className='link'
          activeClass='active'
          to='signout'
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          href='#features'
        >
          Sign Out
        </Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
