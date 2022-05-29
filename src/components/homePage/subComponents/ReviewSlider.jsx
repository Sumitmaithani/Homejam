import React, { Component } from "react";
import ReviewSubComponent from './ReviewSubComponent'

//images
import dp1 from "../../../images/dp1.png";
import dp2 from "../../../images/dp2.png";
import dp3 from "../../../images/dp3.png";

//React slick
import Slider from "react-slick";

//MUI icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const ReviewSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <ArrowForwardIcon />,
        prevArrow: <ArrowBackIcon />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
          ]
      };
  return (
    <div>
    <div className="review--slider">
        <Slider {...settings}>
          <div>
          <ReviewSubComponent name="Hellen Jummy" tag="🏳‍🌈  Palo Alto, CA" img={dp1} />
          </div>
          <div>
          <ReviewSubComponent name="Isaac Oluwatemilorun" tag="🚩  Palo Alto, CA" img={dp2} />
          </div>
          <div>
          <ReviewSubComponent name="Hellen Jummy" tag="🏴  Palo Alto, CA" img={dp3} />
          </div>
          <div>
          <ReviewSubComponent name="Isaac Oluwatemilorun" tag="🏁  Palo Alto, CA" img={dp1} />
          </div>
          <div>
          <ReviewSubComponent name="Hellen Jummy" tag="🏳  Palo Alto, CA" img={dp2} />
          </div>
          <div>
          <ReviewSubComponent name="Isaac Oluwatemilorun" tag="🏴  Palo Alto, CA" img={dp3} />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default ReviewSlider