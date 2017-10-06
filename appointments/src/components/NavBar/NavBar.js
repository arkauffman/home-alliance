import React from 'react';
import {
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap';

const NavBar = (props) => {
    return (
        <div>
            <Navbar 
              bsClass='navbar'
              fixedTop={true} >
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