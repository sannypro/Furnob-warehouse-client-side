import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/img/furnob-logo-dark.png"
import Banner from '../Banner/Banner';
import auth from '../firebase.init';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className=''>
            <div className='nav-border'>
                <Navbar className='Nav-bg ' expand="lg">
                    <Container >
                        <Navbar.Brand className='navbar-style'><Link style={{ textDecoration: 'none' }} to="/"><img style={{ width: "130px" }} src={logo} alt="" /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto navbar-style align-items-center">
                                <Nav.Link ><NavLink style={{ textDecoration: 'none', color: "black" }} to="/">Home</NavLink> </Nav.Link>
                                <Nav.Link ><NavLink style={{ textDecoration: 'none', color: "black" }} to="/blogs">Blogs</NavLink> </Nav.Link>


                                {
                                    user && <Nav.Link ><NavLink style={{ textDecoration: 'none', color: "black" }} to="/manage-inventories">Manage Items</NavLink> </Nav.Link>
                                }
                                {
                                    user && <Nav.Link ><NavLink style={{ textDecoration: 'none', color: "black" }} to="/add-inventory-item">Add Item</NavLink> </Nav.Link>
                                }
                                {
                                    user && <Nav.Link ><NavLink style={{ textDecoration: 'none', color: "black" }} to="/my-items">My Items</NavLink> </Nav.Link>
                                }
                                {
                                    user ? <Nav.Link > <button onClick={() => signOut(auth)} className="btn btn-danger">Sign out</button> </Nav.Link> : <Nav.Link ><NavLink style={{ textDecoration: 'none', color: "black" }} to="/login">Login</NavLink> </Nav.Link>
                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

        </div >

    );
};

export default Header;