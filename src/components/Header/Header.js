import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
            <Container>
                <Row className="header">
                    <div className="col-md-4 d-flex name">
                        <Navbar.Brand href="home"><h1>Learn Point</h1></Navbar.Brand>
                    </div>
                    <div className="col-md-6 d-flex name">
                        <Nav>
                            <Nav.Link href="home"><h4 className="item">Home</h4></Nav.Link>
                            <Nav.Link href="courses"><h4 className="item">Courses</h4></Nav.Link>
                            <Nav.Link href="about"><h4 className="item">About US</h4></Nav.Link>
                            <Nav.Link href="contact"><h4 className="item">Contact Us</h4></Nav.Link>
                        </Nav>
                    </div>

                </Row>
            </Container>              
    );
};

export default Header;