import React from 'react';
import {Link} from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap';

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
              </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;