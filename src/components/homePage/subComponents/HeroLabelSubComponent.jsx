import React from "react";

//icon
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';


const HeroLabelSubComponent = () => {
  return (
    <div className="hero-labels">
      <button className="hero-label">
        <FavoriteBorderOutlinedIcon />
        <h1 className="hero-label-number">0</h1>
        <h4 className="hero-label-tag">Label</h4>
      </button>
      <button className="hero-label">
        <CardGiftcardOutlinedIcon />
        <h1 className="hero-label-number">0</h1>
        <h4 className="hero-label-tag">Label</h4>
      </button>
      <button className="hero-label">
        <CardGiftcardOutlinedIcon />
        <h1 className="hero-label-number">0</h1>
        <h4 className="hero-label-tag">Label</h4>
      </button>
      <button className="hero-label">
        <CardGiftcardOutlinedIcon />
        <h1 className="hero-label-number">0</h1>
        <h4 className="hero-label-tag">Label</h4>
      </button>
    </div>
  );
};

export default HeroLabelSubComponent;
