import React from "react";
import ReactDOM from "react-dom";
import menuIcon from "../assets/menuIcon.svg";
import Link from "./Link";

const NavMenu = (props) => {
  const navBarStyles = `${
    props.navCloseAnimationOn
      ? "animate-navBarClose mob:animate-navBarCloseForMob"
      : ""
  } fixed top-0 right-0 bottom-0 left-[100%] bg-black z-50 ${
    props.navMenuIsOn ? "animate-navBarOpen mob:animate-navBarOpenForMob" : ""
  }`;

  return ReactDOM.createPortal(
    <div className={navBarStyles}>
      <nav>
        <div className="flex justify-end mr-[1em] mt-[2em]">
          <img
            src={menuIcon}
            alt=""
            className="w-[4em] z-50"
            onClick={() => props.setNavMenuIsOn((prev) => !prev)}
          />
        </div>
        <div className="flex gap-[1em] text-[1.6em] font-semibold text-green flex-col mt-[2em] ml-[3em]">
          <Link page="ABOUT" />

          <Link page="SKILLS" />

          <Link page="PORTFOLIO" />

          <Link page="CONTACT" />
        </div>
      </nav>
    </div>,
    document.getElementById("portal")
  );
};

export default NavMenu;
