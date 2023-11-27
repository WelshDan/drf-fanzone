import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
        <Container>
            <NavLink to="/">
            <Navbar.Brand>
                <img src={logo} alt="logo" height="30" />
            </Navbar.Brand></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                    <NavLink to="/">
                        <i class="fa-solid fa-house"></i>Home
                    </NavLink>
                    <NavLink to="/signin">
                        <i class="fas fa-sign-in-alt"></i>Sign in
                    </NavLink>
                    <Nav.Link>
                        <i class="fas fa-user-plus"></i>Sign up
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default NavBar;