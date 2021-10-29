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
          <img className="d-block w-100 " src={banner1} alt="First slide" />
          <Carousel.Caption className="text-info">
            <h2>
              Care for Your <span className="text-warning"> Smile</span>{" "}
              Committed to Excellence
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption className="text-info">
            <h2>
              Committed to Excellence{" "}
              <span className="text-warning"> Personalized</span> and{" "}
              <span className="text-warning">Comfortable </span> Attachment{" "}
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption className="text-info">
            <h2>
              Be proud of your <span className="text-warning">Smile</span>
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
