import React from 'react';
import './AboutUs.css';
import image from'../../logo.png';

const About = () => {
    return (
        <div className="aboutUs">
            <h1 className="aboutTitle">About Us</h1>
            <div className="logo aboutText">
                        <img src={image} alt="" />
                        <h4 className="p-5">Our academy offers a wide range of stationery and online courses. we help our students to get the best education and give a start to their careers! This is One of the world's best-known online learning resources, Coursera has several thousand courses from leading educational providers.An online class is a course conducted over the Internet. They are generally conducted through a learning management system, in which students can view their course syllabus and academic progress, as well as communicate with fellow students and their course instructor.</h4>
            </div>
        </div>
    );
};

export default About;