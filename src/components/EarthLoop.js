import React from "react";
//? Video
import gitEarth from "../assets/git3.mp4";
//? Styles
import "../styles/earthLoop.scss";

const EarthLoop = () => {
  return (
    <div className="video__container">
      <video autoPlay muted loop className="video">
        <source src={gitEarth} type="video/mp4" />
      </video>
    </div>
  );
};

export default EarthLoop;
