import React from 'react';
import './AboutUs.css';
import image from'../../logo.png';

const About = () => {
    return (
        <div className="aboutUs">
            <h1 className="aboutTitle">About Us</h1>
            <div className="logo2">
                        <img src={image} alt="" />
                        <h4 className="aboutText p-5">Our academy offers a wide range of stationery and online courses. we help our students to get the best education and give a start to their careers! This is One of the world's best-known online learning resources, Coursera has several thousand courses from leading educational providers.An online class is a course conducted over the Internet.</h4>
            </div>
        </div>
    );
};

export default About;