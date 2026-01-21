import Slideshow  from "../components/Slideshow";
import React from "react";
import Background from '../assets/images/paint.jpg';

const About: React.FC = () => {
return (
    <div className="container mt-5">
      <div className="shadow-lg text-opacity-75 rounded text-light fw-bold fst-italic m-5" style={{ backgroundImage: `url(${Background})`}}>
        <h1 className="text-center">About Us</h1>
      </div>
        <Slideshow />
    </div>
  );
}

export default About;