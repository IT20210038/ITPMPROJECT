import React from 'react';
import homeImage from '../Assets/Images/events.png';
import './Dashboard.css';

function Home() {
    return (
        <div className='home'>
            <h1>WELCOME TO EVENTISTRY</h1>
            <img class='homeImage' src={homeImage} alt="home image" />
        </div >
    );
}

export default Home;
