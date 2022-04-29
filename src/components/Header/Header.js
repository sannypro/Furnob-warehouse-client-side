import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';

import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='nav-border'>
                <Navbar className='Nav-bg ' expand="lg">
                    <Container >
                        <Navbar.Brand className='navbar-style'><Link style={{ textDecoration: 'none' }} to="/">React-Bootstrap</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto navbar-style">
                                <Nav.Link ><NavLink style={{ textDecoration: 'none' }} to="/">Home</NavLink> </Nav.Link>
                                <Nav.Link ><NavLink style={{ textDecoration: 'none' }} to="/login">Login</NavLink> </Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

        </div>

    );
};

export default Header;