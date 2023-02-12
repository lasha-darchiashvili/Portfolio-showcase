import React from "react";
import ReactDOM from "react-dom";
import menuIcon from "../assets/menuIcon.svg";
import Link from "./Link";

const NavMenu = (props) => {
  const navBarStyles = `${
    props.navCloseAnimationOn
      ? "animate-navBarClose mob:animate-navBarCloseForMob"
      : ""
  } fixed top-0 right-0 bottom-0 left-[100%] bg-black ${
    props.navMenuIsOn ? "animate-navBarOpen mob:animate-navBarOpenForMob" : ""
  }`;

  return ReactDOM.createPortal(
    <div className={navBarStyles}>
      <nav>
        <div className="flex justify-end mr-[1em] mt-[3em]">
          <img
            src={menuIcon}
            alt=""
            className="w-[4em] z-50"
            onClick={() => props.setNavMenuIsOn((prev) => !prev)}
          />
        </div>
        <div className="flex gap-[1em] text-[1.6em] font-semibold text-green flex-col mt-[2em] ml-[3em]">
          <Link
            page="HOME"
            selectedPage={props.selectedPage}
            setSelectedPage={props.setSelectedPage}
          />

          <Link
            page="SKILLS"
            selectedPage={props.selectedPage}
            setSelectedPage={props.setSelectedPage}
          />

          <Link
            page="PORTFOLIO"
            selectedPage={props.selectedPage}
            setSelectedPage={props.setSelectedPage}
          />

          <Link
            page="CONTACT"
            selectedPage={props.selectedPage}
            setSelectedPage={props.setSelectedPage}
          />
        </div>
      </nav>
    </div>,
    document.getElementById("portal")
  );
};

export default NavMenu;
