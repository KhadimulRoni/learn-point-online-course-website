import React from 'react';
import About from '../AboutUs/About';
import ContactUs from '../ContactUs/ContactUs';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <h1>home</h1>


            <Header></Header>
            <Courses></Courses>
            <Footer></Footer>
            <About></About>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;