import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className="contactUs">
            <div className="contact p-5">
                        <h2 className="contactTitle">Contact Us</h2>
                        <h3 className="pt-5">Call Now</h3>
                        <h5 className="text-warning">0 (800) 516 90 58</h5>
                        <h3>Email</h3>
                        <h5 className="text-warning">learnpoint777@gmail.com</h5>
                        <h3>Visit Learn Point</h3>
                        <h5 className="text-warning">5500, Edisson Street, New York, NY, 88030</h5>
            </div>
            <div className="input">
                <div>
                    <Form>
                        <Row>
                            <Col>
                            <Form.Control placeholder="Your Name" />
                            </Col>
                            <Col>
                            <Form.Control placeholder="Email" />
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className="pt-4">
                    <Form>
                        <Form.Control placeholder="Subject" />
                    </Form>
                </div>
                <div className="pt-4">
                    <>
                        <FloatingLabel controlId="floatingTextarea2" label="Your Texts">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;