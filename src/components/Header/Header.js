import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import Banner from '../Banner/Banner';

import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='nav-border'>
                <Navbar className='Nav-bg' expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link to="/">Home</Nav.Link>
                                <Nav.Link >Link</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

        </div>

    );
};

export default Header;