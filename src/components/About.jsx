import React from "react";
import Profile from "./Profile";
import Navbar from "./Navbar";

const About = (props) => {
  return (
    <div className="bg-graybg md:h-screen" id="about">
      <Navbar heightFromTopIsZero={props.heightFromTopIsZero} />
      <Profile />
    </div>
  );
};

export default About;
