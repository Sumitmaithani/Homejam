import React from "react";
import logo from "../../../images/logo.png";

// icons
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import HeroHeadingSubComponent from "./HeroHeadingSubComponent";
import HeroLabelSubComponent from "./HeroLabelSubComponent";

const HeroComponent = () => {
  return (
      <div className="container">
    <div className="navbar">
      <img src={logo} className="logo" />
      <ul className="navbar-list">
        <li></li>
        <li className="navbar-item">
          <SearchIcon style={{width:"20px"}} />
          Search
        </li>
        <li className="navbar-item">Help</li>
        <li className="navbar-item">
          Account 
        </li>
        <li className="navbar-item"><ShoppingBagOutlinedIcon style={{width:"18px"}} /></li>
      </ul>
    </div>
    <HeroHeadingSubComponent />
    <HeroLabelSubComponent />
    </div>
  );
};

export default HeroComponent;
