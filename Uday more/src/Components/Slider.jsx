import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import img1 from "../Assets/img1.webp";
import img2 from "../Assets/img2.webp";
import img3 from "../Assets/img3.webp";

function Slider() {
  return (
    <Carousel className="slider" pause fade>
      <Carousel.Item className="slider-image" interval={2000}>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="slider-image" interval={2000}>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="slider-image" interval={2000}>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
