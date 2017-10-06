import React from 'react';
import {Link} from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div>
            <Navbar 
            collapseOnSelect
            bsClass='navbar'
            fixedTop={true}>
              <Navbar.Header>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullLeft>
                  <NavItem className="title">Home Alliance</NavItem>
                </Nav>
                <Nav pullRight className="hamburger">
                  <NavItem><Link to='about'>About</Link></NavItem>
                  <NavItem><Link to='contact'>Contact</Link></NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;