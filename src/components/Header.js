import React from "react";

import {
    NavLink
} from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
    return <Navbar bg="dark" variant="dark">
        <Container fluid>
            <Navbar.Brand>
                <img
                    src="/logo.png"
                    width="30"
                    height="40"
                    className="align-top nav-logo"
                    alt="Spectrum Diagram Logo"
                />
                Spectrum Diagram
            </Navbar.Brand>

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink
                        exact
                        activeStyle={{ color: "white" }}
                        className="nav-link" to="/">
                        Allocation
                    </NavLink>
                    <NavLink
                        exact
                        activeStyle={{ color: "white" }}
                        className="nav-link"
                        to="/map">
                        Measurement
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>;

}

export default Header;