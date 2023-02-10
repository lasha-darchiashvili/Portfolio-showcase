import React, { useEffect, useState } from "react";
import Landing from "./components/Landing";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./components/Navbar";
import img from "./assets/38921.jpg";

import Profile from "./components/Profile";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  const idAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  console.log(idAboveMediumScreens);

  const [heightFromTopIsZero, setHeightFromTopIsZero] = useState(false);

  console.log(heightFromTopIsZero, "asd");
  useEffect(() => {
    const listener = () => {
      console.log(window.scrollY + 250, "ss");
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
    <div className="roboto bg-graybg z-10">
      <Landing />
      <div className="bg-graybg h-screen">
        <Navbar
          heightFromTopIsZero={heightFromTopIsZero}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Profile />
      </div>
      <div className="h-[1500px] bg-graybg"></div>
    </div>
  );
};

export default App;
