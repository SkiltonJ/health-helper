import React from "react";
import "../css/pages/home.css";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div className='home-container'>
      <div className='home-container-inner'>
        <Link to='/table-topics'>
          <img
            src={require("../assets/images/TABLE TOPICS BABY.png")}
            alt='Table Topics Game Cover'
            width={450}
          />
        </Link>
        <Link to='/soul-desires'>
          <img
            src={require("../assets/images/SOULS DESIRES (4).png")}
            alt='Soul Desires Deck Cover'
            width={450}
          />
        </Link>
      </div>
    </div>
  );
};

export default home;
