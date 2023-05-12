import React from 'react';
import "./Home.css"
import Hero from "../../Components/Hero/Hero";
import Features from "../../Components/Features/Features";


const Home = () => {
    return (
            <div>
                <main>
                    <Hero/>
                    <Features/>
                </main>
            </div>
    );
};

export default Home;