import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './Header.css';
import logo from '../../logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
            <Container>
                <Row className="header">
                    <div className="col-md-4 d-flex logo">
                        <Navbar.Brand href="home"><img src={logo} alt="" /></Navbar.Brand>
                    </div>
                    <div className="col-md-6 d-flex name">
                        <Nav>
                            <NavLink to="home" 
                            activeStyle={{
                                            fontWeight: "bold",
                                            color: "red",
                                            textDecoration:"none"
                                            }}>
                                            <h4 className="item">Home</h4>
                            </NavLink>
                            <NavLink to="courses" 
                            activeStyle={{
                                            fontWeight: "bold",
                                            color: "red",
                                            textDecoration:"none"
                                            }}>
                                            <h4 className="item">Courses</h4>
                            </NavLink>
                            <NavLink to="about" 
                            activeStyle={{
                                            fontWeight: "bold",
                                            color: "red",
                                            textDecoration:"none"
                                            }}>
                                            <h4 className="item">About US</h4>
                            </NavLink>
                            <NavLink to="contact" 
                            activeStyle={{
                                            fontWeight: "bold",
                                            color: "red",
                                            textDecoration:"none"
                                            }}>
                                            <h4 className="item">Contact Us</h4>
                            </NavLink>
                        </Nav>
                    </div>

                </Row>
            </Container>              
    );
};

export default Header;