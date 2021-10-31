import React from "react";
import { Carousel } from "react-bootstrap";
import './Banner.css'

import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";

const Banner = () => {
  return (
    <div className="banner ">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 " src={banner1} alt="First slide"/>
          <Carousel.Caption className="text-info">
            <h2>
              Amazing<span className="text-warning"> Tour</span>{" "}
              With us
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption className="text-info">
            <h2>
             Find your <span className="text-warning">Paradise</span>
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption className="text-info">
            <h2>
              Have fun with <span className="text-warning">Family</span>
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
