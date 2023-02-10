import React, { useEffect, useState } from "react";
import logo from "../assets/my-logo.png";
import img from "../assets/38921.jpg";
import Link from "./Link";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = (props) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 700px)");

  const navAnimation = props.heightFromTopIsZero
    ? "bg-blackTransparent border-b border-solid border-graysh h-[150px] "
    : "bg-grayshish h-[100px]";
  const logoAnimation = props.heightFromTopIsZero ? "w-[25em]  " : "w-[20em] ";
  console.log(navAnimation, "navanimation");

  return (
    <nav
      class={`transition-all duration-[600ms] w-full flex justify-center sticky top-0 text-green ${navAnimation}`}
      id="home"
    >
      <div class="flex justify-between items-center w-5/6 ">
        <div>
          <img
            src={logo}
            alt=""
            class={`transition-all duration-[600ms] duration-[600ms] hover:pb-[2em] cursor-pointer ${logoAnimation}`}
          />
        </div>
        {isAboveSmallScreens ? (
          <div className="flex gap-[3em] text-[1.6em] font-semibold">
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
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
