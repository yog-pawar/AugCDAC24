import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import image1 from "./images/1WhatsApp Image 2025-02-07 at 23.14.46.jpeg";
import image2 from "./images/2WhatsApp Image 2025-02-07 at 23.14.47 (3).jpeg";
import image3 from "./images/3WhatsApp Image 2025-02-07 at 23.14.47 (2).jpeg";
import image4 from "./images/4WhatsApp Image 2025-02-07 at 23.14.47 (1).jpeg";
import image5 from "./images/5WhatsApp Image 2025-02-07 at 23.14.47.jpeg";
import "../../index.css";
const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel interval={1500} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image5} alt="Fifth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Slider;
