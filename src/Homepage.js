import React from 'react';
import Home from './pages/Home';
import Features from './pages/Features';
import GameMode from './pages/GameMode';
import PlayWithStock from './pages/PlayWithStock';
import PlayLeagues from './pages/PlayLeagues';
import JoinCommunity from './pages/JoinCommunity';
import CallToAction from './pages/CallToAction';
import HomeTools from './pages/HomeTools';
import Footer from './pages/Footer';


function Homepage() {
    return (
        <div style={{ backgroundColor: "#070707" }}>
            <Home />
            <Features />
            <GameMode />
            <PlayWithStock />
            <PlayLeagues />
            <JoinCommunity />
            <HomeTools />
            <CallToAction />
            <Footer />
        </div>
    );
}

export default Homepage;
