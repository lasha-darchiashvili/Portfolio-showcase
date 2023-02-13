import React, { useEffect, useState } from "react";
import logo from "../assets/my-logo.png";
import Link from "./Link";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menuIcon.svg";
import NavMenu from "./NavMenu";

const Navbar = (props) => {
  const [navMenuIsOn, setNavMenuIsOn] = useState(null);

  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  const navAnimation = props.heightFromTopIsZero
    ? "bg-graybg border-b border-solid border-green sm:h-[100px] h-[80px] "
    : "h-[80px]";
  const logoAnimation = props.heightFromTopIsZero
    ? "sm:w-[15em] xs:w-[10em]"
    : "xs:w-[10em] ";

  const [navCloseAnimationOn, setNavCloseAnimationOn] = useState(false);

  const onNavOpen = () => {
    setNavMenuIsOn((prev) => !prev);
    setNavCloseAnimationOn(true);
  };

  return (
    <nav
      className={`w-full flex justify-center top-0 fixed ${
        props.heightFromTopIsZero
          ? "visible transition-all duration-[500ms]"
          : "invisible"
      } text-green z-50 ${navAnimation}`}
      id="home"
    >
      <div className="flex justify-between items-center w-5/6 ">
        <div>
          <a href="#">
            <img
              src={logo}
              alt=""
              className={`w-[10em] hover:pb-[2em] cursor-pointer ${logoAnimation}`}
            />
          </a>
        </div>
        {isAboveSmallScreens ? (
          <div className="flex gap-[3em] text-[1.6em] font-semibold">
            <Link page="ABOUT" />

            <Link page="SKILLS" />

            <Link page="PORTFOLIO" />

            <Link page="CONTACT" />
          </div>
        ) : (
          <div>
            <div className="absolute right-[1em] top-[2em]">
              <img
                src={menuIcon}
                alt=""
                className="w-[4em] z-50"
                onClick={onNavOpen}
              />
            </div>
          </div>
        )}
      </div>
      {!isAboveSmallScreens && (
        <NavMenu
          navMenuIsOn={navMenuIsOn}
          setNavMenuIsOn={setNavMenuIsOn}
          navCloseAnimationOn={navCloseAnimationOn}
        />
      )}
    </nav>
  );
};

export default Navbar;
