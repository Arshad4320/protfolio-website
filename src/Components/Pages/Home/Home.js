import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#2c3e50' }}>
            <Header></Header>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;