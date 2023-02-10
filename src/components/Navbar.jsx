import React, { useEffect, useState } from "react";
import logo from "../assets/my-logo.png";
import img from "../assets/38921.jpg";
import Link from "./Link";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import menuIcon from "../assets/menuIcon.svg";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [toggle, setToggle] = useState(false);
  const toggle1 = toggle ? "open" : "";

  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  const navAnimation = props.heightFromTopIsZero
    ? "bg-graybg border-b border-solid border-green sm:h-[120px] h-[100px]"
    : "h-[100px]";
  const logoAnimation = props.heightFromTopIsZero
    ? "sm:w-[25em] xs:w-[10em]"
    : "xs:w-[10em] ";
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
            class={`w-[10em] transition-all duration-[600ms] duration-[600ms] hover:pb-[2em] cursor-pointer ${logoAnimation}`}
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
          <div>
            <img
              src={menuIcon}
              alt=""
              className="w-[3em]"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
