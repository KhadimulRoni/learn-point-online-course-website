import React from 'react';
import About from '../AboutUs/About';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MiddleItems from '../MiddleItems/MiddleItems';
import TopItems from '../TopItems/TopItems';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopItems></TopItems>
            <MiddleItems></MiddleItems>
            <Footer></Footer>
            <About></About>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;