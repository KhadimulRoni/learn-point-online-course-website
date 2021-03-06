import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import image from '../../logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="p-2">
            </div>
            <div className="row m-0 p-5">
                    <div className="col-md-4 d-flex about logo">
                        <img src={image} alt="" />
                        <h6>Our academy offers a wide range of stationery and online courses. we help our students to get the best education and give a start to their careers!</h6>
                    </div>
                    <div className="col-md-4 d-flex about">
                            <div>
                                <Link to="home"><h6>Home</h6></Link>
                            </div>
                            <div>
                                <Link to="courses"><h6>Courses</h6></Link>
                            </div>
                            <div>
                                <Link to="about"><h6>About US</h6></Link>
                            </div>
                            <div>
                                <Link to="contact"><h6>Contact Us</h6></Link>
                            </div>
                    </div>
                    <div className="col-md-4 d-flex about">
                        <h2>Contacts</h2>
                        <h6>Call Now</h6>
                        <h6>0 (800) 516 90 58</h6>
                        <h6>Visit Learn Point</h6>
                        <h6 className="text-danger">5500, Edisson Street, New York, NY, 88030</h6>
                    </div>
                </div>
            <p>Learn Point © 2021. All rights reserved. Terms of use and Privacy Policy</p>
        </div>
    );
};

export default Footer;