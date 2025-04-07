import React from "react";
import "../css/topbar.css";
import { Link } from "react-router-dom";

export const TopBar = () => {
  return (
    <div className='topbar'>
      <Link to='/'>
        <img src={require("../assets/images/logo.png")} alt='logo' />
      </Link>
    </div>
  );
};

export default TopBar;
