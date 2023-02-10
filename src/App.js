import React, { useEffect, useState } from "react";
import image1 from "./assets/back-6.jpg";
import arrow from "./assets/arrow.svg";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import img from "./assets/38921.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  const idAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  console.log(idAboveMediumScreens);

  const [heightFromTopIsZero, setHeightFromTopIsZero] = useState(false);

  console.log(heightFromTopIsZero, "asd");
  useEffect(() => {
    const listener = () => {
      if (window.scrollY >= window.innerHeight) {
        setHeightFromTopIsZero(true);
      }
      if (window.scrollY < window.innerHeight) {
        setHeightFromTopIsZero(false);
      }
      console.log(window.scrollY, window.innerHeight);
    };
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  return (
    <div className="roboto">
      <div className="h-screen relative w-full">
        <img src={image1} className="w-full h-full object-cover fixed"></img>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-blackOverlay flex flex-col gap-[5em] justify-center items-center">
          <div className="w-fit before:animate-BlinkCursor relative content-none before:absolute before:top-0 before:right-0 before:w-[2px] before:h-full before:bg-blue">
            <p className="whitespace-nowrap overflow-hidden animate-typing relative tracking-[5px] text-[6.4em] text-blue">
              Greetings, I am Lasha&nbsp;
            </p>
          </div>
          <div className="border border-blue border-solid py-[2em] px-[4em] animate-headerAppears delay-[8000ms] invisible">
            <p className="text-[6.4em] text-blue">
              I'm Front-end{" "}
              <span className="text-emerald-500">&lt;Web&gt;</span> Developer
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
      <Navbar
        heightFromTopIsZero={heightFromTopIsZero}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
      <img src={img} alt="" />
    </div>
  );
};

export default App;
