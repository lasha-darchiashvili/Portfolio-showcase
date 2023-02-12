import React from "react";
import Profile from "./Profile";
import Navbar from "./Navbar";

const About = (props) => {
  return (
    <div className="bg-graybg md:h-screen">
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
