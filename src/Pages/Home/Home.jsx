import React from 'react';
import Hero from './Component/Hero/Hero';
import Contact from './Component/Contact/Contact';
import Award from './Component/Award/Award';
import Service from './Component/Service/Service';
import Feature from './Component/Feature/Feature';
import Goal from './Component/Goal/Goal';
import ContactUs from './Component/ContactUs/ContactUs';
import Package from './Component/Package/Package';
import Testomonial from './Component/Testimonial/Testomonial';
import FAQ from './Component/FAQ/FAQ';
import Blog from './Component/Blog/Blog';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Contact></Contact>
            <Service></Service>
            <Award></Award>
            <Feature></Feature>
            <Goal></Goal>
            <ContactUs></ContactUs>
            <Package></Package>
            <Testomonial></Testomonial>
            <FAQ></FAQ>
            <Blog></Blog>
        </div>
    );
};

export default Home;