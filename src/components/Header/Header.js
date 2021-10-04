import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './Header.css';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <Container>
                <Row className="header">
                    <div className="col-md-4 d-flex logo">
                        <Navbar.Brand href="home"><img src={logo} alt="" /></Navbar.Brand>
                    </div>
                    <div className="col-md-6 d-flex name">
                        <Nav>
                            <Link to="home"><h4 className="item">Home</h4></Link>
                            <Link to="courses"><h4 className="item">Courses</h4></Link>
                            <Link to="about"><h4 className="item">About US</h4></Link>
                            <Link to="contact"><h4 className="item">Contact Us</h4></Link>
                        </Nav>
                    </div>

                </Row>
            </Container>              
    );
};

export default Header;