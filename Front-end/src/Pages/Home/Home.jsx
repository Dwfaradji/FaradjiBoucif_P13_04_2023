import React from 'react';
import "./Home.css"
import Hero from "../../Components/Hero/Hero";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <main>
                <Hero/>
                <Features/>
                <Footer/>
            </main>
        </div>
    );
};

export default Home;