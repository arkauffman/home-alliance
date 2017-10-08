import React from 'react';
import {Link} from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    LinkContainer
} from 'react-bootstrap';

const NavBar = (props) => {
    return (
        <div>
            <Navbar 
              bsClass='navbar'
              fixedTop={true}>
              <Navbar.Collapse>
                <Nav pullLeft>
                  <NavItem>Home Alliance</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;