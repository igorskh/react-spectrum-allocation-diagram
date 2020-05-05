import React from "react";

import {
    NavLink
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
    return <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">

        <NavLink
            exact
            activeStyle={{ color: "white" }} to="/">
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
        </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
    </Navbar>;

}

export default Header;