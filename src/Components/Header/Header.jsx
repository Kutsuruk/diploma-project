import React from "react";
import classes from './Header.module.css'
import {Button, Form, FormControl, Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";

let Header = (props) => {
    return(
        <div>
            <nav>
                <Navbar collapseOnSelect expand="lg" fixed='top' bg="dark" variant="dark">
                    <Navbar.Brand to="/main">CarRentax</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link to="/main">Home</Nav.Link>
                            <Nav.Link to="/locations">Locations</Nav.Link>
                            <Nav.Link to="/locations">Pricing</Nav.Link>
                            <NavDropdown title="Cars" id="collasible-nav-dropdown">
                                <NavDropdown.Item to="/sedan">Sedan</NavDropdown.Item>
                                <NavDropdown.Item to="/coupe">Coupe</NavDropdown.Item>
                                <NavDropdown.Item to="electronic">Electric</NavDropdown.Item>
                                <NavDropdown.Item to="/hybrid">Hybrid</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item to="/scooter">Scooter</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link to="/help">Help</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </nav>
        </div>
    )
}

export default Header