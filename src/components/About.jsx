import React from "react";
import Profile from "./Profile";
import Navbar from "./Navbar";

const About = (props) => {
  return (
    <div className="bg-graybg md:h-screen scroll-pt-[300px]" id="about">
      <div className="invisible h-[5px]"></div>
      <Navbar
        heightFromTopIsZero={props.heightFromTopIsZero}
        selectedPage={props.selectedPage}
        setSelectedPage={props.setSelectedPage}
      />
      <Profile />
    </div>
  );
};

export default About;
