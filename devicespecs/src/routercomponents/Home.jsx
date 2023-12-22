import React from "react";
import "../styles/home.css";
import homepic from "../images/homepic.jpg";

//For Icons
import { FaArrowCircleRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="home-maincontainer">
        <div className="home-leftside-main">
          <div className="title-text-container">
            <p className="title-text">DEVICESPECS.</p>
          </div>

          <div className="home-paragraph-text-con">
            <p className="home-paragraph-text">
              Explore a vast database of specifications for smartphones,
              laptops, tablets, wearables, and more. Our team is committed to
              curating and updating data regularly, ensuring you have access to
              the most recent and reliable information. From processor speeds
              and camera capabilities to storage options and connectivity
              features, DeviceSpecs covers it all.
            </p>
          </div>
          <div className="button-check-specs-con">
            <div className="button-check-specs-text">
              <div>Check Specifications!</div>
              <div>
                <FaArrowCircleRight />
              </div>
            </div>
          </div>
        </div>
        <div className="home-rightside-main">
          <img src={homepic} className="home-right-pic" />
        </div>
      </div>
    </>
  );
};

export default Home;
