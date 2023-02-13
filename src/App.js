import React, { useEffect, useState } from "react";
import Landing from "./components/Landing";
import useMediaQuery from "./hooks/useMediaQuery";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  const idAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  console.log(idAboveMediumScreens);

  const [heightFromTopIsZero, setHeightFromTopIsZero] = useState(false);

  console.log(heightFromTopIsZero, "asd");
  useEffect(() => {
    const listener = () => {
      if (window.scrollY >= window.innerHeight - 5) {
        setHeightFromTopIsZero(true);
      }
      if (window.scrollY < window.innerHeight - 5) {
        setHeightFromTopIsZero(false);
      }
      console.log(window.scrollY, window.innerHeight);
    };
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  return (
    <div className="roboto bg-graybg z-10 ">
      <Landing />
      <About
        heightFromTopIsZero={heightFromTopIsZero}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
