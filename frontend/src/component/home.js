import React from "react";
import { Link } from "react-router-dom";
import homeImage from '../Assets/Images/nn.jpg';
import './home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${homeImage})` }}>
      <div className="headerContainer">
        <h1> EVENTISTRY </h1>
        <p> All The Events Managed By One place</p>
        <h3> ====================We planned and managed all the events easy way=============</h3>
      </div>
    </div>
  );
}

export default Home;