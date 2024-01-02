import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";

const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow custom-prev-arrow" onClick={onClick}>
    {"<"}
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="custom-arrow custom-next-arrow" onClick={onClick}>
    {">"}
  </button>
);

const data = [
  "Realme",
  "Oppo",
  "Vivo",
  "Infinix",
  "Tecno",
  "Poco",
  "Xiaomi",
  "Samsung",
  "itel",
  "Huawei",
];

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 8,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <>
                <div className="carousel-item" key={index}>
                  {item}
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    );
  }
}
