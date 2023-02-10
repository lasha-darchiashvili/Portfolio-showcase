import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import image1 from "../assets/167479.webp";
import arrow from "../assets/arrow.svg";

const Landing = () => {
  return (
    <div className="h-screen relative w-full asd bg-no-repeat bg-cover">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-graysh flex flex-col gap-[5em] justify-center items-center">
        <div className="w-fit before:animate-BlinkCursor relative content-none before:absolute before:top-0 before:right-0 before:w-[2px] before:h-full before:bg-emerald-500">
          <p className="whitespace-nowrap overflow-hidden sm:animate-typing mob:animate-typingForSmScreen xs:animate-typingForMdScreen mob:invisible relative tracking-[5px] mob:text-[1.2em] xs:text-[2.4em] sm:text-[4.8em] text-white">
            Greetings, I am Lasha&nbsp;
          </p>
        </div>
        <div className=" py-[2em] px-[4em] animate-headerAppears delay-[8000ms] invisible text-center">
          <p className="mob:text-[1.2em] sm:text-[4.8em] xs:text-[2.4em] text-white">
            I'm Front-end <span className="text-emerald-500">&lt;Web&gt;</span>{" "}
            Developer
          </p>
        </div>
      </div>
      <AnchorLink href="#home">
        <img
          src={arrow}
          className="animate-arrowBounce absolute bottom-[2em] left-[50%] translate-x-[-50%]"
        ></img>
      </AnchorLink>
    </div>
  );
};

export default Landing;
